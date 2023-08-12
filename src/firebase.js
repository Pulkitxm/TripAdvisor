// require('dotenv').config();
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    // apiKey:process.env.firebase_apiKey,
    // authDomain:process.env.firebase_authDomain,
    // projectId:process.env.firebase_projectId,
    // storageBucket:process.env.firebase_storageBucket,
    // messagingSenderId:process.env.firebase_messagingSenderId,
    // appId:process.env.firebase_appId,
    // measurementId:process.env.firebase_measurementId
    apiKey: "AIzaSyBWh2WGuhzaJmOf8p0pn49FVNoroorr1IY",
    authDomain: "wanderai-8708e.firebaseapp.com",
    projectId: "wanderai-8708e",
    storageBucket: "wanderai-8708e.appspot.com",
    messagingSenderId: "814390744789",
    appId: "1:814390744789:web:d8295820ccd593784c345c",
    measurementId: "G-W2R2XQ9GR6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
