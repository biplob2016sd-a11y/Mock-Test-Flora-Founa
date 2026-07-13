let currentQuestion = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");

function loadQuestion() {

    let q = questions[currentQuestion];

    question.innerHTML = (currentQuestion + 1) + ". " + q.question;

    options.innerHTML = "";

    q.options.forEach((option, index) => {

        options.innerHTML += `
        <p>
            <label>
                <input type="radio" name="answer">
                ${option}
            </label>
        </p>
        `;

    });

}

loadQuestion();

document.getElementById("nextBtn").onclick = function () {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    }

};

document.getElementById("prevBtn").onclick = function () {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

};
