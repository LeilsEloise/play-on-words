// Questions array for question-area div

const questions = {
    easy: [
        "The pet that is referred to as 'man's best friend'?",
        "The three letter word which means the opposite of happy?",
        "The only three letter colour in the primary colour wheel?"
    ],
    medium: [
        "An object with pages that can either be filled with information or blank?",
        "A four letter word for the thing we all have to travel on when travelling by car?",
        "A product from a cow which we humans like to drink?"
    ],
    hard: [
        "The planet we all live on?",
        "The largest country in the World?",
        "What is the most celebrated holiday globally?"
    ],
    expert: [
        "A 32 letter word from Mary Poppins?",
        "How to describe language that is meaningless or hard to understand?",
        "The word used to describe the opposition to the disestablishment of the Church of England?"

    ]
};

// Function to generate random question based off difficulty chosen
function askQuestion(difficulty) {
    const questionBox = document.getElementById("question-area");
    const questionSet = questions[difficulty];
    const randomQuestion = questionSet[Math.floor(Math.random() * questionSet.length)];
    questionBox.textContent = randomQuestion;
}

// Adds Event Listeners once page is fully loaded 
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".btn--green").addEventListener("click", () => { askQuestion("easy"); });
    document.querySelector(".btn--yellow").addEventListener("click", () => { askQuestion("medium"); });
    document.querySelector(".btn--orange").addEventListener("click", () => { askQuestion("hard"); });
    document.querySelector(".btn--red").addEventListener("click", () => { askQuestion("expert"); });
});

console.log("Connected!")