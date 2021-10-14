
import { initializeApp } from "";
import { getAuth, createUserWithEmailAndPassword } from "";

const firebaseConfig = {
    apiKey: "AIzaSyCSDlI1P82u2EYKSQL1WJhWKs9Z4roCTQc",
    authDomain: "jagoexchangeorg.firebaseapp.com",
    projectId: "jagoexchangeorg",
    storageBucket: "jagoexchangeorg.appspot.com",
    messagingSenderId: "317868310621",
    appId: "1:317868310621:web:5df79a483d64ae0a588db4",
    measurementId: "G-Y0LLBWWV4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("signup").addEventListener('click', function () {
    // const firstName = document.getElementById("first_name").value
    // const lastName = document.getElementById("last_name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...

            console.log("created")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...

            console.log(errorCode + errorMessage)
        });

});
