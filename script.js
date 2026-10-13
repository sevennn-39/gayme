// 1. Data pool for quiz questions
const quizData = [
    {
        question: "Favorite video game?",
        answers: [
            { text: "Splatoon 3", correct: false },
            { text: "Project Sekai", correct: true },
            { text: "Minecraft", correct: false },
            { text: "Deltarune", correct: false }
        ]
    },
    {
        question: "What's your favorite fanfiction tag?",
        answers: [
            { text: "hurt/comfort", correct: false },
            { text: "crack treated seriously", correct: true },
            { text: "everyone needs a hug", correct: false },
            { text: "character study", correct: true }
        ]
    },
    {
        question: "Are you a morning person or a night owl?",
        answers: [
            { text: "morning person", correct: false },
            { text: "night owl", correct: true },
        ]
    },
    {
        question: "Favorite taste group?",
        answers: [
            { text: "salty", correct: false },
            { text: "sweet", correct: false },
            { text: "sour", correct: false },
            { text: "umami", correct: true },
        ]
    },
    {
        question: "Favorite season?",
        answers: [
            { text: "winter", correct: true },
            { text: "spring", correct: false },
            { text: "summer", correct: false },
            { text: "fall", correct: false },
        ]
    },
    {
        question: "Favorite manga?",
        answers: [
            { text: "The Guy She Was Interested in Wasn't a Guy at All (green yuri)", correct: false },
            { text: "Disney Twisted Wonderland", correct: true },
            { text: "Black Butler", correct: false },
            { text: "Toilet-Bound Hanako-kun", correct: false },
        ]
    },
    {
        question: "Best video game type?",
        answers: [
            { text: "visual novel", correct: true },
            { text: "first-person shooter", correct: false },
            { text: "platformer", correct: false },
            { text: "tycoon games", correct: false },
        ]
    },
    {
        question: "Favorite form of humor?",
        answers: [
            { text: "slapstick/physical humor", correct: false },
            { text: "dry humor", correct: false },
            { text: "dark humor", correct: true },
            { text: "puns", correct: false },
        ]
    },
    {
        question: "Hobbies?",
        answers: [
            { text: "drawing", correct: true },
            { text: "baseball", correct: false },
            { text: "crochet", correct: false },
            { text: "gardening", correct: false },
        ]
    },
    {
        question: "Favorite aesthetic?",
        answers: [
            { text: "decora", correct: false },
            { text: "visual kei/vkei", correct: false },
            { text: "tenshi kawaii", correct: false },
            { text: "grunge", correct: true },
        ]
    },

];

const questionElement = document.getElementById('title');
const answerButtonsElement = document.getElementById('buttons');
const nextButton = document.getElementById('buttontwo');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = quizData[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtonsElement.appendChild(button);
        
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("wrong");
    }

    nextButton.classList.remove('hide');
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${quizData.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
