/*MOBILE RESPONSIVE MENU BAR*/
const menu = document.querySelector(".menuBar");
const navLinks = document.querySelector(".menuBarLinks");
const navLi = document.querySelectorAll(".menuBarLinks li");
const coverNone = document.querySelector(".cpage");

menu.addEventListener("click", () =>{
    navLinks.classList.toggle("open");
    coverNone.classList.toggle("view");

    navLi.forEach(link => {
        link.classList.toggle("fade");

    });
});

/*LOGIN/SIGNUP/FILLING OUT OF FORMS FUNCTIONS*/

/*Opening login/sign up*/
const openSched = document.querySelector(".checkup-btn");
const loginMain = document.querySelector(".login-container");
const backMain = document.querySelector(".backToMain");
const signinForm = document.querySelector(".sgn-btn");
const signupDetails = document.querySelector(".signup-containerA");
const loginBtn = document.querySelector(".lgn-btn");
const logDetails = document.querySelector(".login-containerB");
const backMainA = document.querySelector(".backToMainA");


openSched.addEventListener("click", () =>{
    loginMain.style.display = "block";
});

backMain.addEventListener("click", ()=>{
    loginMain.style.display = "none";
});

signinForm.addEventListener("click", () =>{
    logDetails.style.display = "block";
    loginMain.style.display = "none";
});

loginBtn.addEventListener("click", () =>{
    logDetails.style.display = "block";
    loginMain.style.display = "none";
});

backMainA.addEventListener("click", ()=>{
    loginMain.style.display = "block";
    logDetails.style.display = "none";
});




/**PATIENTS FORM */
const exitForm = document.querySelector(".exitReqestForm");
const mainForm = document.querySelector(".patientsForm");

exitForm.addEventListener("click", ()=>{
        alert("cancel request form?")
        if(confirm("are you sure?")){
            mainForm.style.display = "none";
            logDetails.style.display = "none";
            loginMain.style.display = "none";
         }
         else{
            mainForm.style.display = "block";
         }

});

/**OPENING A FORM*/
const logina = document.querySelector(".sup");
const loginb = document.querySelector(".logSoc");
const porm = document.querySelector(".patientsForm");

logina.addEventListener("click", openForm);
loginb.addEventListener("click", openForm);

function openForm(e){
    e.preventDefault();

    porm.style.display = "block";

}

/*SLIDER*/
var slides = document.querySelector(".productWrapper").children;
var prevSlide = document.querySelector(".sliderLeft");
var nextSlide = document.querySelector(".sliderRight");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick=function (){
    next("next");
}

prevSlide.onclick=function (){
    next("prev");
}

function next(direction){
     
    if(direction=="next"){
        index++;
            if(index==totalSlides){
                index=0;
            }
    }
    else{
        if(index==0){
            index=totalSlides-1;
        }
        else{
            index--;
        }
    }

    for(i=0; i<slides.length; i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

/*Open product*/
const openProd = document.querySelector(".products");
const prodBody= document.querySelector(".product");
const cancelProd = document.querySelector(".cancel");
const cancelProdA = document.querySelector(".cancell");
const cancelProdB = document.querySelector(".cancelll");

openProd.addEventListener("click", () =>{
    prodBody.style.display = "block";
});

cancelProd.addEventListener("click", () =>{
    prodBody.style.display = "none";
});

cancelProdA.addEventListener("click", () =>{
    prodBody.style.display = "none";
});

cancelProdB.addEventListener("click", () =>{
    prodBody.style.display = "none";
});

/*Navigation change color bg
window.addEventListener("scroll", function () {
    let headers = document.querySelector('header');

    headers.classList.toggle('scrollingActive');
})*/