const quizData = [
    {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python","JavaScript"],
    answer: "JavaScript"
    },
     {
    question: "What does CSS stands for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Creative Style System","Control Sheet Syntax"],
    answer: "Cascading Style Sheets"
    },
     {
    question: "Which of the listed animals can't be found in water?",
    options: ["Fish", "Crab", "Lion","Prawn"],
    answer: "Lion"
    },
     {
    question: "Which of the following can't be found in the kitchen?",
    options: ["Body cream", "Knife", "Pot","Gas cooker"],
    answer: "JavaScript"
    }
];
const questionEl = document.getElementById("question");
const optionsEl = document. getElementById("options");
const nextbtnEl = document. getElementById("next-btn");
const resultEl = document. getElementById("result");
const scoreEl = document. getElementById("score");
const restartBtnEl = document. getElementById("restart-btn");

let currentQuestion = 0;
let score =0

function loadQuestion(){
    optionsEl.innerHTML ="";

    let q = quizData[currentQuestion];
    questionEl.textContent = q.question;

    q.options.forEach(option => {
        const button =document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        const li = document.createElement("li");
        li.appendChild(button);
        optionsEl.appendChild(li);
    })
}
function checkAnswer(selected){
    let correct = quizData[currentQuestion].answer;
    if (selected === correct){
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length){
        loadQuestion();
    } else{
        showResult();
    }
}
function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = `${score} / ${quizData.length}`;
}
restartBtnEl.addEventListener("click", () => {
    currentQuestion =0;
    score =0;
    resultEl.classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("options").innerHTML ="";
    loadQuestion();
});

loadQuestion();

