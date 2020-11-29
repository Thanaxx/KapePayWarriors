// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBksAF5ce3BqFyRVlgroe5p9NmwW1poBng",
  authDomain: "formsss.firebaseapp.com",
  databaseURL: "https://formsss.firebaseio.com",
  projectId: "formsss",
  storageBucket: "formsss.appspot.com",
  messagingSenderId: "1082239644251",
  appId: "1:1082239644251:web:d6af3299895f981c32c57e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

let patientsInform = firebase.database().ref("info");

  //Listen for a submit
  var pForm = document.querySelector(".patientInfo");
  
  pForm.addEventListener("submit", SubmitRequest);

  function SubmitRequest(e){
    e.preventDefault();

        //Get values
        let fnames = document.querySelector("#fname").value;
        let lnames = document.querySelector("#lname").value;
        let ages = document.querySelector("#age").value;
        let bdays = document.querySelector("#bday").value;
        let statuss = document.querySelector("#status").value;
        let addresss = document.querySelector("#address").value;
        let email = document.querySelector("#emai").value;

        saveRequest(fnames, lnames, ages, bdays, statuss, addresss, email); //Function to save conatct info to firebase

        document.querySelector(".patientInfo").reset();

        sendEmailRequest(fnames, lnames, ages, bdays, statuss, addresss, email); //function to send email

      
}
  
  //Save infos to firebase
function saveRequest(fnames, lnames, ages, bdays, statuss, addresss, email){
  let newPatientsInformation = patientsInform.push();

  newPatientsInformation.set({
    firstname: fnames,
    lastname: lnames,
    age: ages,
    bithday: bdays,
    status: statuss,
    address: addresss,
    email: email,
  })
}
  
  
function sendEmailRequest(fnames, lnames, ages, bdays, statuss, addresss, email){
  Email.send({
      Host: "smtp.gmail.com",
      Username: 'Medcare.com',
      Password: 'agcjobpmpjytjmsv',
      To: "abordajechristeljoy@gmail.com",
      From: `${email}`,
      Subject: `${fnames} sent you a message!`,
      Body: `Hi ${lnames} welcome to the world of the aetas!`,
  })
  .then((message) => alert("mail sent successfully"));
}
  
  


/**LOGGGG */
function signup(){

  var email = document.getElementById("emailAdd");
  var password = document.getElementById("passordd");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  alert("sign up");

}

function login(){

  var email = document.getElementById("email");
  var password = document.getElementById("passord");
  
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  
  
  alert("Sign in")
  
 }

