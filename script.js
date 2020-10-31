// Get elementByID for the buttons and the other shit.
const startButton = document.getElementById("startButton")
const giftButton = document.getElementById("giftButton")
const giftNameButton = document.getElementById("giftNameButton")
const getPlayaNameButton = document.getElementById("getPlayaName")
const newUserInformationElement = document.getElementById("newUserInformation");
const nameDonationElement = document.getElementById("nameDonation");
const questionContainerElement = document.getElementById("questionContainer")
const mainWelcomeScreenElement = document.getElementById("mainWelcomeScreen")




giftButton.addEventListener("click", giftMyName);
startButton.addEventListener("click", getUserInfo);
giftNameButton.addEventListener("click", addPlayaNameToDB);
getPlayaName.addEventListener("click", startNameGenerator);


function getUserInfo() 
{
    // startTimer();
    newUserInformationElement.classList.remove("hide");
    nameDonationElement.classList.add("hide");
    // setNextQuestion();
    console.log("Go to Start screen")
}

function giftMyName()
{
    nameDonationElement.classList.remove("hide");
    newUserInformation.classList.add("hide");

    console.log("Go to gift screen")
}

function addPlayaNameToDB() 
{
    console.log("User gifts Playa name to others")
}

function startNameGenerator()
{
    questionContainerElement.classList.remove("hide");
    newUserInformationElement.classList.add("hide");
    mainWelcomeScreenElement.classList.add("hide");
 
    console.log("Go to Questions Bank")
}
