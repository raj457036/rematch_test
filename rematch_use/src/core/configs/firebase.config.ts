import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const _firebaseConfig = {
  apiKey: "AIzaSyDT2mOEm1s3LPGjjpIQTznIEshsN-gV3uk",
  authDomain: "balizacore.firebaseapp.com",
  projectId: "balizacore",
  storageBucket: "balizacore.appspot.com",
  messagingSenderId: "337250891884",
  appId: "1:337250891884:web:3558f66ef2c2a6822fc049",
  measurementId: "G-ZG28SQX2NY",
};

const app = initializeApp(_firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
