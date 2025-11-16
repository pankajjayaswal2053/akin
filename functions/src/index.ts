import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";

admin.initializeApp();
const db = admin.firestore();
const corsHandler = cors({origin: true});

type OrderDirection = FirebaseFirestore.OrderByDirection;
type CollectionName = "careers" | "clientStories" | "insights";

interface CollectionConfig {
  booleanFilters?: string[];
  allowedOrderFields?: string[];
  defaultOrder?: {field: string, direction: OrderDirection};
  defaultLimit?: number;
  maxLimit?: number;
}

const collectionConfigs: Record<CollectionName, CollectionConfig> = {
  careers: {
    booleanFilters: ["isPublished"],
    allowedOrderFields: ["priority", "createdAt", "title"],
    defaultOrder: {field: "priority", direction: "asc"},
    maxLimit: 50,
  },
  clientStories: {
    booleanFilters: ["isPublished"],
    allowedOrderFields: ["createdAt", "title"],
    defaultOrder: {field: "createdAt", direction: "desc"},
    maxLimit: 50,
  },
  insights: {
    booleanFilters: ["isFeatured", "isPublished"],
    allowedOrderFields: ["createdAt", "title"],
    defaultOrder: {field: "createdAt", direction: "desc"},
    maxLimit: 100,
  },
};

const parseBoolean = (value: unknown): boolean | undefined => {
  if (typeof value !== "string") return undefined;
  if (["true", "false"].includes(value.toLowerCase())) {
    return value.toLowerCase() === "true";
  }
  return undefined;
};

const parseLimit = (value: unknown, maxLimit: number, defaultLimit?: number): number | undefined => {
  if (typeof value !== "string") return defaultLimit;
  const parsed = parseInt(value, 10);
  if (isNaN(parsed) || parsed <= 0) return defaultLimit;
  return Math.min(parsed, maxLimit);
};

const sanitizeString = (value: unknown, maxLength = 2000): string => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
};

const ensureFields = (payload: Record<string, unknown>, requiredFields: string[]): void => {
  const missing = requiredFields.filter((field) => !payload[field]);
  if (missing.length > 0) {
    throw new functions.https.HttpsError("invalid-argument", `Missing fields: ${missing.join(", ")}`);
  }
};

const createCollectionHandler = (collectionName: CollectionName) => {
  return functions.https.onRequest((request, response) => {
    corsHandler(request, response, async () => {
      if (request.method !== "GET") {
        response.status(405).send("Method Not Allowed");
        return;
      }

      try {
        const config = collectionConfigs[collectionName];
        let queryRef: FirebaseFirestore.Query = db.collection(collectionName);

        if (config.booleanFilters) {
          config.booleanFilters.forEach((field) => {
            const value = parseBoolean(request.query[field]);
            if (value !== undefined) {
              queryRef = queryRef.where(field, "==", value);
            }
          });
        }

        const requestedOrderField = typeof request.query.orderBy === "string" ? request.query.orderBy : undefined;
        const orderDirectionParam = typeof request.query.orderDir === "string" ? request.query.orderDir.toLowerCase() : undefined;
        const orderDirection: OrderDirection = orderDirectionParam === "asc" || orderDirectionParam === "desc" ? orderDirectionParam : "desc";

        if (requestedOrderField && config.allowedOrderFields?.includes(requestedOrderField)) {
          queryRef = queryRef.orderBy(requestedOrderField, orderDirection);
        } else if (config.defaultOrder) {
          queryRef = queryRef.orderBy(config.defaultOrder.field, config.defaultOrder.direction);
        }

        const limitValue = parseLimit(request.query.limit, config.maxLimit ?? 50, config.defaultLimit);
        if (limitValue) {
          queryRef = queryRef.limit(limitValue);
        }

        const snapshot = await queryRef.get();
        const items = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        response.status(200).json(items);
      } catch (error) {
        console.error(`Error fetching ${collectionName}:`, error);
        response.status(500).send({error: "Internal Server Error"});
      }
    });
  });
};

const buildLeadPayload = (payload: Record<string, unknown>) => {
  ensureFields(payload, ["name", "email", "company", "message"]);
  return {
    name: sanitizeString(payload.name, 120),
    email: sanitizeString(payload.email, 120).toLowerCase(),
    company: sanitizeString(payload.company, 200),
    message: sanitizeString(payload.message, 2000),
    source: sanitizeString(payload.source, 120) || "website",
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  };
};

const buildApplicationPayload = (payload: Record<string, unknown>) => {
  ensureFields(payload, ["name", "email", "roleId"]);
  return {
    name: sanitizeString(payload.name, 120),
    email: sanitizeString(payload.email, 120).toLowerCase(),
    phone: sanitizeString(payload.phone, 40),
    roleId: sanitizeString(payload.roleId, 120),
    resume: sanitizeString(payload.resume, 400000),
    coverLetter: sanitizeString(payload.coverLetter, 4000),
    linkedin: sanitizeString(payload.linkedin, 240),
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  };
};

// API endpoint to capture leads from the contact form
export const submitLead = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    if (request.method !== "POST") {
      response.status(405).send("Method Not Allowed");
      return;
    }
    try {
      const leadPayload = buildLeadPayload(request.body || {});
      await db.collection("leads").add(leadPayload);
      response.status(200).send({message: "Lead submitted successfully"});
    } catch (error) {
      console.error("Error submitting lead:", error);
      const status = error instanceof functions.https.HttpsError ? 400 : 500;
      response.status(status).send({error: error.message || "Internal Server Error"});
    }
  });
});

// API endpoint to handle job applications
export const submitApplication = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    if (request.method !== "POST") {
      response.status(405).send("Method Not Allowed");
      return;
    }
    try {
      const applicationPayload = buildApplicationPayload(request.body || {});
      await db.collection("applications").add(applicationPayload);
      response.status(200).send({message: "Application submitted successfully"});
    } catch (error) {
      console.error("Error submitting application:", error);
      const status = error instanceof functions.https.HttpsError ? 400 : 500;
      response.status(status).send({error: error.message || "Internal Server Error"});
    }
  });
});

// API endpoint to get career listings
export const getCareers = createCollectionHandler("careers");

// API endpoint to get client stories
export const getClientStories = createCollectionHandler("clientStories");

// API endpoint to get insights
export const getInsights = createCollectionHandler("insights");
