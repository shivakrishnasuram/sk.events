import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword   } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js'


const firebaseConfig = {
    apiKey: "AIzaSyBt1K3szramLXe6WFyDNd4mbtqYj9hVVQE",
    authDomain: "jspro-9acb6.firebaseapp.com",
    projectId: "jspro-9acb6",
    storageBucket: "jspro-9acb6.firebasestorage.app",
    messagingSenderId: "681370220967",
    appId: "1:681370220967:web:ed09e15e29b3e79eec1e82",
    measurementId: "G-7QH0WDW0SV"
};
const app = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider();
const auth =getAuth(app)
export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword};
