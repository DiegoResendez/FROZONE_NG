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
const firstNameElement = document.getElementById("firstName");
const lastNameElement = document.getElementById("lastName");
const playaNameElement = document.getElementById("playaName");
const inputCityElement = document.getElementById("inputCity");
const inputStateElement = document.getElementById("inputState");
const inputZipElement = document.getElementById("inputZip");
const masculineNameElement = document.getElementById("masculineName");
const feminineNameElement = document.getElementById("feminineName");
const fantasyNameElement = document.getElementById("fantasyName");
const childNameElement = document.getElementById("childName");
const newUserFirstNameElement = document.getElementById("newUserFirstName");
const NewUserCityElement = document.getElementById("NewUserCity");
const newUserStateElement = document.getElementById("newUserState");
const newUserZipElement = document.getElementById("newUserZip");
const newUserLastNameElement = document.getElementById("newUserLastName");
const newPlayaNameElement = document.getElementById("newPlayaName");


// const lastNameElement = document.getElementById("lastName");
// const lastNameElement = document.getElementById("lastName");
// const lastNameElement = document.getElementById("lastName");

let statesArray = []; //Array of State Abbrviations or a forLoop to go through and add to options in index.html lines 58,59 & 100,101
let suckersInfoArray = [];
let userInfoArray = [];

const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const buttonD = document.getElementById("buttonD");

let startingScore = 100;
let questionNumber = 0;

let femininePlayaNamesArray = ["Princess Lollipop", "Bright Eyes", "Butterfly", "Miss Kitty Meow Meow", "Summer Vacation", "Lotus Flower", "Sugar Buns", "Honey Smacks", "Ginger Snaps"];
let masculinePlayaNamesArray = ["Shitty McDoodoopants", "Chad", "Beaver Basher", "Tyler Needick", "Piss Weasle", "Schlong Dongadoodle","Tan Bannana", "Dickie McNutsack", "Unicorn Jizz"];
let kidsPlayaNamesArray = ["Kid appropriate name", "The Child", "Lil' Sebastian", "Tiger", "Beast", "Bobo"];
let fantasyPlayaNamesArray = ["Gizmo", "Frodo", "Gandolf","Minotour","Wolverine", "Zeus", "Jupiter", "Neptune", "Ares", "Mars"];
let donatedPlayaNamesArray = [];


startButton.addEventListener("click", getUserInfo); //Let's Get Started Button
giftButton.addEventListener("click", giftMyName); //Gift Playa Name Button
giftNameButton.addEventListener("click", addPlayaNameToDB);  // Gift My Name Button
getPlayaName.addEventListener("click", startNameGenerator);  // startNameGenerator 
keepPlayaName.addEventListener("click", addPlayaNameToCensus);  // New User Keeps Name and Joins Census


let userFirstName = newUserFirstNameElement.value;
let userLastName = newUserLastNameElement.value;
let userCity = NewUserCityElement.value;
let userState = newUserStateElement.value;
let userZip = newUserZipElement.value;

let firstName = firstNameElement.value;
let lastName = lastNameElement.value;
let playaName = playaNameElement.value;
let inputCity = inputCityElement.value;
let inputState = inputStateElement.value;
let inputZip = inputZipElement.value;


function getUserInfo() 
{
    newUserInformationElement.classList.remove("hide");
    nameDonationElement.classList.add("hide");
    // console.log("Go to Start screen")
}

function giftMyName()

{
    nameDonationElement.classList.remove("hide");
    newUserInformation.classList.add("hide");
    // console.log("Go to gift screen")

}


function addPlayaNameToDB() 
// event.preventDefault();
{
    suckerScreenElement.classList.remove("hide");
    nameDonationElement.classList.add("hide");
    newUserInformation.classList.add("hide");
    mainWelcomeScreenElement.classList.add("hide");
    
    console.log("This should add User's Playa Name to Array")
    
    // Potential forLoop to remove redundancy.
    
    firstNameElement.innerHTML = firstName;
    localStorage.setItem("firstName", firstName)
    suckersInfoArray.push(firstName);
    
    lastNameElement.innerHTML = lastName;
    localStorage.setItem("lastName", lastName)
    suckersInfoArray.push(lastName);
    
    playaNameElement.innerHTML = playaName;
    localStorage.setItem("playaName", playaName)
    donatedPlayaNamesArray.push(playaName);
    
    inputCityElement.innerHTML = inputCity;
    localStorage.setItem("inputCity", inputCity)
    suckersInfoArray.push(inputCity);
    
    inputStateElement.innerHTML = inputState;
    localStorage.setItem("inputState", inputState)
    suckersInfoArray.push(inputState);
    
    inputZipElement.innerHTML = inputZip;
    localStorage.setItem("inputZip", inputZip)
    suckersInfoArray.push(inputZip);
    
    console.log(suckersInfoArray)
    console.log(donatedPlayaNamesArray)
    validateForm();
    // addSuckerInfoToArray();
}

function validateDonorForm()
{

}

function validateUserForm()
{

}

function startNameGenerator()
// event.preventDefault();
{
    setNextQuestion();
    questionContainerElement.classList.remove("hide");
    newUserInformationElement.classList.add("hide");
    mainWelcomeScreenElement.classList.add("hide");
    
    
    // Potential forLoop to remove redundancy.
    newUserFirstNameElement.innerHTML = userFirstName;
    localStorage.setItem("userFirstName", userFirstName)
    // userInfoArray.push(userFirstName);
    
    newUserLastNameElement.innerHTML = userLastName
    localStorage.setItem("userLastName", userLastName)
    userInfoArray.push(userLastName);
    
    NewUserCityElement.innerHTML = userCity;
    localStorage.setItem("userCity", userCity)
    userInfoArray.push(userCity);
    
    newUserStateElement.innerHTML = userState;
    localStorage.setItem("userState", userState)
    userInfoArray.push(userState);
    
    newUserZipElement.innerHTML = userZip;
    localStorage.setItem("userZip", userZip)
    userInfoArray.push(userZip);
    
    console.log(userInfoArray); 
    
    console.log("Go to Questions Bank");
    addNewUserInfo();
    validateUserForm();
}

function addNewUserInfo()
{
    // I think I need a DB to add new user information.
    let userInfo = {firstName: userFirstName, lastName: userLastName, city: userCity, state: userState, zipcode: userZip};
    let userInfoArray = localStorage.getItem("userInfoArray");
    console.log(userInfo)
    if(userInfoArray){
        userInfoArray = JSON.parse(userInfoArray)
        userInfoArray.push(userInfo);
    } else(userInfoArray = [userInfo]);
    localStorage.setItem("userInfoArray", JSON.stringify(userInfoArray))

    console.log("Set values from localStorage to User Info Array")
}

function addPlayaNameToCensus()
{
    console.log("User keeps Generated Playa Name")
}

function addSuckerInfoToArray()
{
    let suckerInfo = {firstName: firstName, lastName: lastName, city: inputCity, state: inputState, zipcode: inputZip};
    let suckersInfoArray = localStorage.getItem("suckersInfoArray");
    console.log(suckerInfo)

    if(suckersInfoArray){
        suckersInfoArray = JSON.parse(suckersInfoArray)
        suckersInfoArray.push(suckerInfo);
    } else(suckersInfoArray = [suckerInfo]);
    localStorage.setItem("suckersInfoArray", JSON.stringify(suckersInfoArray))
    // console.log("Sucker's Info will be added to array or DB")
    console.log("Need to add Playa Name to donatedPlayaNamesArray")

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
         if (answer === "false"){
            startingScore = startingScore - 10;
            // console.log("if false")
         } 
        if(questionNumber < question.length){
         console.log(questionNumber)
         setNextQuestion()
        }
        else{
            showPlayaNameScreen();
        }
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
    showNewPlayaName();
}

function showNewPlayaName(){
    let finalScore = startingScore;
    console.log(finalScore);

    // let finalScore = {firstName: userFirstName, lastName: userLastName, score: startingScore, city: userCity, state: userState, zipcode: userZip};

    if(finalScore >80){
        let playaNameArrays = femininePlayaNamesArray.length;
        let rand = Math.random();
        let randName = Math.floor(rand * playaNameArrays )
        let newUserPlayaName = femininePlayaNamesArray[randName];
        console.log(newUserPlayaName);
        newPlayaNameElement.textContent = newUserPlayaName;
    } if(finalScore >=70){
        let playaNameArrays = fantasyPlayaNamesArray.length;
        let rand = Math.random();
        let randName = Math.floor(rand * playaNameArrays )
        let newUserPlayaName = fantasyPlayaNamesArray[randName];
        console.log(newUserPlayaName);
        newPlayaNameElement.textContent = newUserPlayaName;
    } if(finalScore >=60){
        let playaNameArrays = kidsPlayaNamesArray.length;
        let rand = Math.random();
        let randName = Math.floor(rand * playaNameArrays )
        let newUserPlayaName = kidsPlayaNamesArray[randName];
        console.log(newUserPlayaName);
        newPlayaNameElement.textContent = newUserPlayaName;
    } if(finalScore <50){
        let playaNameArrays = masculinePlayaNamesArray.length;
        let rand = Math.random();
        let randName = Math.floor(rand * playaNameArrays )
        let newUserPlayaName = masculinePlayaNamesArray[randName];
        console.log(newUserPlayaName);
        newPlayaNameElement.textContent = newUserPlayaName;
    }
    else return null;
    // else(finalScore >60 && <80)

    // console.log("Show Playa Name");
    // let rand = Math.random();
    // let masculineNames = masculinePlayaNamesArray.length;
    // let randName = Math.floor(rand * masculineNames )
    // let newUserPlayaName = masculinePlayaNamesArray[randName];
    // console.log(newUserPlayaName);
    // newPlayaNameElement.textContent = newUserPlayaName;

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




//Adding answers from input: You could use an onclick event handler in order to get the input value for the text field. 
// Make sure you give the field an unique id attribute so you can refer to it safely through document.getElementById():
// If you want to dynamically add elements, you should have a container where to place them. For instance, a <div id="container">. 
// Create new elements by means of document.createElement(), and use appendChild() to append each of them to the container. 
// You might be interested in outputting a meaningful name attribute (e.g. name="member"+i for each of the dynamically generated <input>s if they are to be submitted in a form.
// Notice you could also create <br/> elements with document.createElement('br'). If you want to just output some text, you can use document.createTextNode() instead.
// Also, if you want to clear the container every time it is about to be populated, you could use hasChildNodes() and removeChild() together.