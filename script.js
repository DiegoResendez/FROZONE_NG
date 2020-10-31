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


const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const buttonD = document.getElementById("buttonD");

let questionNumber = 0;

startButton.addEventListener("click", getUserInfo); //Let's Get Started Button
giftButton.addEventListener("click", giftMyName); //Gift Playa Name Button
giftNameButton.addEventListener("click", addPlayaNameToDB);  // Gift My Name Button
getPlayaName.addEventListener("click", startNameGenerator);  // startNameGenerator 

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
    setNextQuestion();
    questionContainerElement.classList.remove("hide");
    newUserInformationElement.classList.add("hide");
    mainWelcomeScreenElement.classList.add("hide");

 
    console.log("Go to Questions Bank")
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
            showleaderBoard();
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
        //     showleaderBoard();
        // }
    }) 
}

function showleaderBoard(){
    newPlayaNameScreenElement.classList.remove("hide");
    questionContainerElement.classList.add("hide");
    // show your scoreboard
    // setScore();
    // console.log("hibbity dibbity")
    // add and remove hides
}

const question = [
    {
        q: "Trivia Question Template",
        answer: [
            { text: "Correct Answer", correct: true },
            { text: "Incorrect Answer 1", correct: false },
            { text: "Incorrect Answer 2", correct: false },
            { text: "Incorrect Answer 3", correct: false },
        ],
    },
    {
        q: "Trivia Question Template",
        answer: [
            { text: "Correct Answer", correct: true },
            { text: "Incorrect Answer 1", correct: false },
            { text: "Incorrect Answer 2", correct: false },
            { text: "Incorrect Answer 3", correct: false },
        ],
    },
    {
        q: "Trivia Question Template",
        answer: [
            { text: "Correct Answer", correct: true },
            { text: "Incorrect Answer 1", correct: false },
            { text: "Incorrect Answer 2", correct: false },
            { text: "Incorrect Answer 3", correct: false },
        ],
    },
    {
        q: "Trivia Question Template",
        answer: [
            { text: "Correct Answer", correct: true },
            { text: "Incorrect Answer 1", correct: false },
            { text: "Incorrect Answer 2", correct: false },
            { text: "Incorrect Answer 3", correct: false },
        ],
    },
    {
        q: "Trivia Question Template",
        answer: [
            { text: "Correct Answer", correct: true },
            { text: "Incorrect Answer 1", correct: false },
            { text: "Incorrect Answer 2", correct: false },
            { text: "Incorrect Answer 3", correct: false },
        ],
    },
    {
        q: "Trivia Question Template",
        answer: [
            { text: "Correct Answer", correct: true },
            { text: "Incorrect Answer 1", correct: false },
            { text: "Incorrect Answer 2", correct: false },
            { text: "Incorrect Answer 3", correct: false },
        ],
    },
    {
        q: "Trivia Question Template",
        answer: [
            { text: "Correct Answer", correct: true },
            { text: "Incorrect Answer 1", correct: false },
            { text: "Incorrect Answer 2", correct: false },
            { text: "Incorrect Answer 3", correct: false },
        ],
    },
]
