const questions = [{
    question: "How do you tell frontend developer without telling frontend developer",
    answers: [
        { text: "avtobuschi okani gapi", correct: false },
        { text: "I will sell my computer to buy old samsung android phone to download chatGPT app and i will ask from it", correct: false },
        { text: "Lorem Ipsum", correct: true },
        { text: "python manage.py runserver", correct: false },
    ]
},
{
    question: "How to earn first money as a junior developer in 2024?",
    answers: [
        { text: "Sell your computer", correct: true },
        { text: "Broke your computer and give it to your support servise to fix it for free but you saved some money in your pocket", correct: false },
        { text: "print($ 5000)", correct: false },
        { text: "None", correct: false },
    ]
},
{
    question: "As a programmer, where do you see yourself 10 years from now?",
    answers: [
        { text: "I see myself as the world's leading expert in programming quantum spaghetti code for intergalactic spaghetti monsters.", correct: false },
        { text: "I see myself as the CEO of a startup that develops AI-powered socks that can write code while keeping your feet warm, revolutionizing the programming industry one cozy step at a time.", correct: false },
        { text: "Sitting in front of a computer, probably programming", correct: true },
        { text: "I see myself coding underwater with a team of dolphins, developing software for a new era of aquatic computing.", correct: false },
    ]
},
{
    question: "How to optimize code and save time to debug?",
    answers: [
        { text: "CTRL+C and CTRL+V", correct: true },
        { text: "Read the documentation", correct: false },
        { text: "Ask from Stack Overflow", correct: false },
        { text: "Watch anime", correct: false },
    ]
},
{
    question: "What is the most popular programming problem?",
    answers: [
        { text: "Missing a Semicolon.", correct: true },
        { text: "To say your relatives that you are not Printer master", correct: false },
        { text: "Coding without ChatGPT", correct: false },
        { text: "When they forget to save their code", correct: false },
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
    nextButton.onclick = function () {
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