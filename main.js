const questions = [
    {
        question : "Which is the largest animal in the world ?",
        answers:[
            {text:"Lion",correct: false},
            {text:"Blue whale",correct: true},
            {text:"Tiger",correct: false},
            {text:"Elepant",correct: false},
        ]
    },
    {
        question: "Which year ipl csk win the 5th trophy ?",
        answers: [
            {text:"2023",correct:true},
            {text:"2011",correct:false},
            {text:"2021",correct:false},
            {text:"2022",correct:false},
        ]
    },
    {
        question: "What is the highest individual score ever recorded in an IPL match?",
        answers: [
            {text:"175 by Chris Gayle",correct:true},
            {text:"180 by Rohit Sharma ",correct:false},
            {text:"194 by Virat Kohli",correct:false},
            {text:"200 by KL Rahul",correct:false},
        ]
    },
    {
        question: "What is the name of the stadium that will host the opening match of IPL 2024?",
        answers: [
            {text:"M. Chinnaswamy Stadium",correct:false},
            {text:"Wankhede Stadium",correct:false},
            {text:"M. A. Chidambaram Stadium",correct:true},
            {text:"Eden Gardens",correct:false},
        ]
    }
];

const question = document.getElementById("question");
const answerbutton = document.getElementById("answer-button");
const nextbutton = document.getElementById("next-btn");

let currentquestionindex = 0;
let score = 0;

function startquiz(){
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion = questions[currentquestionindex];
    let questionNo = currentquestionindex + 1;
    question.innerHTML = questionNo + ". " + currentQuestion.question; 
    answerbutton.innerHTML = ""; 

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}
function resetState(){
    nextbutton.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
        }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerbutton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextbutton.style.display="block";
}
function showscore(){
    resetState();
    question.innerHTML=`your Score ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="Playagain";
    nextbutton.style.display="block";
}
function handlenextbuuton(){
    currentquestionindex++;
    if(currentquestionindex < questions.length){
        showQuestion();
    }
    else{
        showscore();
    }
}
nextbutton.addEventListener("click",()=>{
    if(currentquestionindex < questions.length){
        handlenextbuuton();
    }
    else{
        startquiz();
    }
});

startquiz();
