import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from './config.js';



const form = document.querySelector('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const provider = new GoogleAuthProvider();
const googleBtn = document.getElementById('google-btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(email.value);
    console.log(password.value);


    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log("🚀 ~ .then ~ user:", user);
            window.location = 'home.html';

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
})



googleBtn.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            window.location = 'home.html';
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert(errorMessage);

        });
})