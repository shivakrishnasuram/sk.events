import {  auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase.js";
// import { signInWithPopup } from "firebase/auth"


let signupform = document.getElementById("signup");
let signinform = document.getElementById("signin");
let btn = document.getElementById("rdlg");
let regist = document.getElementById("regi");

btn.addEventListener("click", () => {
    // signupform.style.display = "none";
    signinform.style.display = "inline-block"
    signupform.style.display = "none"
    btn.style.display = "none"
    regist.style.display = "inline-block"
});

regist.addEventListener("click", () => {
    signupform.style.display = "inline-block";
    signinform.style.display = "none"
    regist.style.display = "none"
    btn.style.display = "inline-block"
})

signupform.addEventListener("submit", (event) => {
    event.preventDefault()
    let emails = document.getElementById("mails").value
    let passwords = document.getElementById("passwd").value
    // console.log(email)
    // console.log(password)
    createUserWithEmailAndPassword(auth, emails, passwords)
        .then((x) => {
            console.log(x)
            if (x.user) {
                alert("okay its nice ")
                signinform.style.display = "inline-block"
                signupform.style.display = "none"
                btn.style.display = "none"
                regist.style.display = "block"
            }

        }).catch((e) => {
            console.log(e)
            alert("something is gone")
        })
})
signinform.addEventListener("submit", (event) => {
    event.preventDefault()
    let email = document.getElementById("smail").value
    let password = document.getElementById("spasswd").value
    signInWithEmailAndPassword(auth, email, password)
        .then((x) => {
            console.log(x.user.accessToken)
            if (x.user.accessToken) {
                location.replace("./maain.html")
            }

        }).catch((e) => {
            alert("your entered a wrong pass or email")
            console.log(e)
        })
})





// regist.addEventListener("click", () => {
//     signinform.style.display = "none";
//     signupform.style.display = "block"; // Ensure signup form is shown
// });
