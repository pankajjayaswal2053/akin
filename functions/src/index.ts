import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";

admin.initializeApp();
const db = admin.firestore();
const corsHandler = cors({origin: true});

// API endpoint to capture leads from the contact form
export const submitLead = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    if (request.method !== "POST") {
      response.status(405).send("Method Not Allowed");
      return;
    }
    try {
      const lead = request.body;
      // Add a server-side timestamp
      const leadWithTimestamp = {...lead, createdAt: admin.firestore.FieldValue.serverTimestamp()};
      await db.collection("leads").add(leadWithTimestamp);
      response.status(200).send({message: "Lead submitted successfully"});
    } catch (error) {
      console.error("Error submitting lead:", error);
      response.status(500).send({error: "Internal Server Error"});
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
      const application = request.body;
      // Note: In a real-world scenario with large files, you'd upload the resume
      // to a storage bucket (like Firebase Storage) from the client and pass the URL here.
      // Storing large base64 strings in Firestore is not optimal but works for this demo.
      const applicationWithTimestamp = {
        ...application,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      };
      await db.collection("applications").add(applicationWithTimestamp);
      response.status(200).send({message: "Application submitted successfully"});
    } catch (error) {
      console.error("Error submitting application:", error);
      response.status(500).send({error: "Internal Server Error"});
    }
  });
});


// Generic function to get all documents from a collection
const getCollection = async (collectionName: string, response: functions.Response) => {
  try {
    const snapshot = await db.collection(collectionName).get();
    const items = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    response.status(200).json(items);
  } catch (error) {
    console.error(`Error fetching ${collectionName}:`, error);
    response.status(500).send({error: "Internal Server Error"});
  }
};

// API endpoint to get career listings
export const getCareers = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    await getCollection("careers", response);
  });
});

// API endpoint to get client stories
export const getClientStories = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    await getCollection("clientStories", response);
  });
});

// API endpoint to get insights
export const getInsights = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    await getCollection("insights", response);
  });
});