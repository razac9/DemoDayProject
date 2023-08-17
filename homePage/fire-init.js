  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDs7lca535LMUaeI0vYhunsTPv24tbObAw",
    authDomain: "healthuplift-login-and-sign-up.firebaseapp.com",
    projectId: "healthuplift-login-and-sign-up",
    storageBucket: "healthuplift-login-and-sign-up.appspot.com",
    messagingSenderId: "353146765454",
    appId: "1:353146765454:web:636ee6012e839a261809df"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const database = firebase.database();