// Questions and answers array for question-area div

const questions = {
    easy: [
        { q: "The pet that is referred to as 'man's best friend'?", a: "dog" },
        { q: "The three letter word which means the opposite of happy?", a: "sad" },
        { q: "The only three letter colour in the primary colour wheel?", a: "red" } 
    ],
    medium: [
        { q: "An object with pages that can either be filled with information or blank?", a: "book" },
        { q: "A four letter word for the thing we all have to travel on when travelling by car?", a: "road" },
        { q: "A product from a cow which we humans like to drink?", a: "milk" }
    ],
    hard: [
        { q: "The planet we all live on?", a: "earth" },
        { q: "The largest country in the World?", a: "russia" },
        { q: "What is the most celebrated holiday globally?", a: "christmas" }
    ],
    expert: [
        { q: "A 32 letter word from Mary Poppins?", a: "supercalifragilisticexpialidocious" },
        { q: "How to describe language that is meaningless or hard to understand?", a: "gobbledegook" },
        { q: "The word used to describe the opposition to the disestablishment of the Church of England?", a: "antidisestablishmentarianismbook" }

    ]
};

// Store current question+answer
    let currentAnswer = "";

// Function to generate random question based off difficulty chosen
function askQuestion(difficulty) {

    const questionBox = document.getElementById("question-area");
    const questionSet = questions[difficulty];
    const random = questionSet[Math.floor(Math.random() * questionSet.length)];
    questionBox.textContent = random.q; 
    currentAnswer = random.a.toLowerCase(); // store correct answer - ChatGPT
}

// Adds Event Listeners once page is fully loaded 
document.addEventListener("DOMContentLoaded", () => {

     // ChatGPT code
     // Difficulty Buttons (Game Page Only)
    const easyBtn = document.querySelector(".btn--green");
    const mediumBtn = document.querySelector(".btn--yellow");
    const hardBtn = document.querySelector(".btn--orange");
    const expertBtn = document.querySelector(".btn--red");

    if (easyBtn) easyBtn.addEventListener("click", () => askQuestion("easy"));
    if (mediumBtn) mediumBtn.addEventListener("click", () => askQuestion("medium"));
    if (hardBtn) hardBtn.addEventListener("click", () => askQuestion("hard"));
    if (expertBtn) expertBtn.addEventListener("click", () => askQuestion("expert"));
    
    // ChatGPT code
    // Submit Answer Button (Game Page Only)
    const submitBtn = document.getElementById("submit-answer");
    if (submitBtn) {
        submitBtn.addEventListener("click", () => {
            const userInput = document.getElementById("user-answer").value.trim().toLowerCase();

            if (!currentAnswer) {
                alert("Please select a difficulty and get a question first!");
                return;
            }

            if (userInput === "") {
            alert("Enter an answer first!");
            return;
            }

            if (userInput === currentAnswer) {
                window.location.href = "success.html";
            } else {
                window.location.href = "incorrect.html";
            }
        });
    }
    
    // ChatGPT code
    // Home Button (Success or Fail Page)
    const homeBtn = document.getElementById("home-button");
    if (homeBtn) {
        homeBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
});

console.log("Connected!")