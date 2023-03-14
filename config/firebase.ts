import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";
import { connectAuthEmulator, getAuth } from "firebase/auth";


if(getApps().length === 0){
  const _app = initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  })

  if(process.env.NODE_ENV !== 'production'){
    connectAuthEmulator(getAuth(_app), "http://localhost:9099")
    connectStorageEmulator(getStorage(_app), "http://localhost", 9199)
    connectFirestoreEmulator(getFirestore(_app), "http://localhost", 8080)
  }

}

export const app = getApp()
export const firestore = getFirestore(app)
export const analytics = app.name && typeof window !== 'undefined' && process.env.NODE_ENV === 'production' ? getAnalytics(app) : null;
export const auth = getAuth(app)
export const storage = getStorage(app)