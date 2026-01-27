// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/11.0.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging-compat.js");

// Initialize Firebase (use your project config here)
firebase.initializeApp({
    apiKey: "AIzaSyAWoPeAyvJT4dmCX6kG3itDEJMwpN21Jdg",
    authDomain: "desktop-web-push-notification.firebaseapp.com",
    projectId: "desktop-web-push-notification",
    storageBucket: "desktop-web-push-notification.firebasestorage.app",
    messagingSenderId: "247313256007",
    appId: "1:247313256007:web:78c2be862cbd8b03396b62",
    measurementId: "G-BXZL67Y8Y2",
});

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message: ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png" // optional
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
