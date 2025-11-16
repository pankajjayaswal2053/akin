// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const missingConfig = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingConfig.length > 0) {
  throw new Error(`Missing Firebase configuration values: ${missingConfig.join(', ')}`);
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getFunctionsBaseUrl = () => {
  const url = import.meta.env.VITE_FUNCTIONS_BASE_URL as string | undefined;
  if (!url) {
    throw new Error('Missing VITE_FUNCTIONS_BASE_URL environment variable');
  }
  return url;
};
