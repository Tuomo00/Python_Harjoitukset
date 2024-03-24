let correctCount = 0;
let wrongCount = 0;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { question: `${num1} + ${num2}`, answer: num1 + num2 };
}

function showQuestion() {
const { question, answer } = generateQuestion();
document.getElementById('question').textContent = question;
return { question, answer };
}

function checkAnswer() {
const userAnswer = parseInt(document.getElementById('answer').value, 10);
const questionElement = document.getElementById('question');

if (questionElement) {
    const questionText = questionElement.textContent;
    const correctAnswer = eval(questionText); 

    if (!isNaN(userAnswer)) {
        if (userAnswer === correctAnswer) {
            correctCount++;
        } else {
            wrongCount++;
        }
        updateScore();
        showQuestion();
        document.getElementById('answer').value = ''; 
    } else {
        alert('Syötä validi numero!');
    }
} else {
    console.error("Element with id 'question' not found.");
}
}

function updateScore() {
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = wrongCount;
}

showQuestion();