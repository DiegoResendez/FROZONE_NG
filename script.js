// Get elementByID for the buttons and the other shit.
const startButton = document.getElementById("startButton")
const giftButton = document.getElementById("giftButton")
const giftNameButton = document.getElementById("giftNameButton")
const getPlayaNameButton = document.getElementById("getPlayaName")
const newUserInformationElement = document.getElementById("newUserInformation");
const nameDonationElement = document.getElementById("nameDonation");
const questionContainerElement = document.getElementById("questionContainer")
const mainWelcomeScreenElement = document.getElementById("mainWelcomeScreen")
const questionElement = document.getElementById("question");
const answerButtonElements = document.getElementById("answer-buttons");
const newPlayaNameScreenElement = document.getElementById("newPlayaNameScreen");
const suckerScreenElement = document.getElementById("suckerScreen");
const keepPlayaNameButton = document.getElementById("keepPlayaName")
const statesElement = document.getElementById("inputState");


let statesArray = []; //Array of State Abbrviations or a forLoop to go through and add to options in index.html lines 58,59 & 100,101

const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const buttonD = document.getElementById("buttonD");

let questionNumber = 0;
let femininePlayaNamesArray = ["Princess Lollipop", "Bright Eyes", "Butterfly", "Miss Kitty Meow Meow", "Summer Vacation", "Lotus Flower", "Sugar Buns", "Honey Smacks"];
let masculinePlayaNamesArray = ["Shitty McDoodoopants", "Chad", "Beaver Basher", "Tyler Needick", "Piss Weasle", "Schlong Dongadoodle","Tan Bannana", "Dickie McNutsack"];
let kidsPlayaNamesArray = ["Kid appropriate name", "The Child", "Lil' Sebastian", "Tiger", "Beast", "Bobo"]


startButton.addEventListener("click", getUserInfo); //Let's Get Started Button
giftButton.addEventListener("click", giftMyName); //Gift Playa Name Button
giftNameButton.addEventListener("click", addPlayaNameToDB);  // Gift My Name Button
getPlayaName.addEventListener("click", startNameGenerator);  // startNameGenerator 
keepPlayaName.addEventListener("click", addPlayaNameToCensus);  // startNameGenerator 


function getUserInfo() 
{
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
    suckerScreenElement.classList.remove("hide");
    nameDonationElement.classList.add("hide");
    newUserInformation.classList.add("hide");
    mainWelcomeScreenElement.classList.add("hide");

    console.log("User gifts Playa name to others")
}

function startNameGenerator()
{
    setNextQuestion();
    questionContainerElement.classList.remove("hide");
    newUserInformationElement.classList.add("hide");
    mainWelcomeScreenElement.classList.add("hide");

 
    console.log("Go to Questions Bank")
}

function addPlayaNameToCensus()
{
    console.log("User keeps Generated Playa Name")
}



function setNextQuestion() {
    showQuestion(questionNumber)
    questionNumber++;
}

function showQuestion(questionNumber) {
    questionElement.innerText = question[questionNumber].q
    buttonA.textContent = question[questionNumber].answer[0].text;
    buttonA.setAttribute("data", question[questionNumber].answer[0].correct);
    buttonB.textContent = question[questionNumber].answer[1].text;
    buttonB.setAttribute("data", question[questionNumber].answer[1].correct);
    buttonC.textContent = question[questionNumber].answer[2].text;
    buttonC.setAttribute("data", question[questionNumber].answer[2].correct);
    buttonD.textContent = question[questionNumber].answer[3].text;
    buttonD.setAttribute("data", question[questionNumber].answer[3].correct);

}

let answerButton = document.getElementsByClassName("buttonAnswer");
 for( let i = 0; i < answerButton.length; i++){
     answerButton[i].addEventListener("click", function(event){
         let answer = this.getAttribute("data")
         console.log(answer)
        if(questionNumber < question.length){
         console.log(questionNumber)
         setNextQuestion()
        }
        else{
            showPlayaNameScreen();
        }
        //  if (answer === "false"){
        //     timerStart = timerStart - 10;
        //     // console.log("if false")
        //  } 
        //  if(questionNumber < question.length){
        //  console.log(questionNumber)
        //  setNextQuestion()
        // } else{
        //     stopTimer();
        //     $("#userScore").text(timerStart);
        //     // console.log(timerStart)
        //     // setScore();
        //     // console.log("Score should populate");
        //     showPlayaNameScreen();
        // }
    }) 
}

function showPlayaNameScreen(){
    newPlayaNameScreenElement.classList.remove("hide");
    questionContainerElement.classList.add("hide");
    // show your scoreboard
    // setScore();
    // console.log("hibbity dibbity")
    // add and remove hides
}

const question = [
    {
        q: "What year was the first year Arctica accepted Credit Cards?",
        answer: [
            { text: "2019", correct: true },
            { text: "NEVER", correct: false },
            { text: "2021", correct: false },
            { text: "2000", correct: false },
        ],
    },
    {
        q: "A bag of ice costs how much?",
        answer: [
            { text: "$5.00 USD", correct: false },
            { text: "$0.50 USD", correct: false },
            { text: "$2.00 USD", correct: true },
            { text: "$4.00 USD", correct: false },
        ],
    },
    {
        q: "The Man burns on which day?",
        answer: [
            { text: "Sunday", correct: false },
            { text: "Saturday", correct: true },
            { text: "Yesterday", correct: false },
            { text: "Friday", correct: false },
        ],
    },
    {
        q: "Black Rock City is home to what event?",
        answer: [
            { text: "Burning Man", correct: true },
            { text: "Coachella", correct: false },
            { text: "Lollapalooza", correct: false },
            { text: "Woodstock", correct: false },
        ],
    },
    {
        q: "I am ________ years old.",
        answer: [
            { text: "30", correct: false },
            { text: "-12", correct: false },
            { text: "1000", correct: false },
            { text: "this many", correct: true },
        ],
    },
    {
        q: "True or False: Schrodinger's cat is named Mittens.",
        answer: [
            { text: "False", correct: false },
            { text: "True", correct: false },
            { text: "Both True and False", correct: true },
            { text: "Was or is?", correct: false },
        ],
    },
    {
        q: "Earth is the _____ planet from the sun.",
        answer: [
            { text: "Best", correct: false },
            { text: "Third", correct: true },
            { text: "Last", correct: false },
            { text: "Fourth", correct: false },
        ],
    },
]
