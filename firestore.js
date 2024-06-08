import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;

const config = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
};

const app = initializeApp(config);

const db = getFirestore(app);

export default db;
