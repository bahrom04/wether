const questions = [{
        question: "Which is the largest animal?",
        answers: [
            { text: "dog", correct: false },
            { text: "cat", correct: false },
            { text: "blue whale", correct: true },
            { text: "cow", correct: false },
        ]
    },
    {
        question: "Which is the smallest animal?",
        answers: [
            { text: "ant", correct: true },
            { text: "elephant", correct: false },
            { text: "mouse", correct: false },
            { text: "shark", correct: false },
        ]
    },
    {
        question: "Which planet is closest to the sun?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: true },
            { text: "Venus", correct: false },
        ]
    },
    {
        question: "When did World War 1 begin?",
        answers: [
            { text: "1914", correct: true },
            { text: "1939", correct: false },
            { text: "1945", correct: false },
            { text: "1918", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        button.classList.remove("correct", "incorrect");
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });
    if (isCorrect) {
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    nextButton.style.display = "block";
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        nextButton.innerHTML = "Finish";
    }
    nextButton.onclick = function() {
        if (currentQuestionIndex === questions.length) {
            alert(`You scored ${score} out of ${questions.length}`);
            startQuiz();
        } else {
            resetState();
            showQuestion();
        }
    }
}

startQuiz();