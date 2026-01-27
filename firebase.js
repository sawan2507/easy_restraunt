// Import the functions you need from the SDKs you need
import { initializeApp } from "./firebase/app";
import { getAnalytics } from "firebase/analytics";

// request-permission.js
import { messaging } from "firebase-config";
import { getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWoPeAyvJT4dmCX6kG3itDEJMwpN21Jdg",
    authDomain: "desktop-web-push-notification.firebaseapp.com",
    projectId: "desktop-web-push-notification",
    storageBucket: "desktop-web-push-notification.firebasestorage.app",
    messagingSenderId: "247313256007",
    appId: "1:247313256007:web:78c2be862cbd8b03396b62",
    measurementId: "G-BXZL67Y8Y2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

async function requestFCMToken() {
  try {
    const token = await getToken(messaging, {
      vapidKey: "YOUR_WEB_PUSH_CERTIFICATE_KEY_PAIR",
    });
    if (token) {
      console.log("FCM Token:", token);
      return token;
    } else {
      console.log("No registration token available. Request permission first.");
    }
  } catch (err) {
    console.error("Error getting token:", err);
  }
}

requestFCMToken();

