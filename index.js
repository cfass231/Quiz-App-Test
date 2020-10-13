const STORE = {
    view: "landing",
    currentQuestion: 0,
    score: 0,
    questions: [
        {
            name: "What was the hit single for the rock band, The Doors, back in 1967?",
            options: [
                "Light my Fire",
                "LA Woman",
                "Roadhouse Blues",
                "People are Strange"
            ],
            correct: 0

        },
        {
            name: "What popular genre exploded in the early 90's?",
            options: [
                "Thrash Metal",
                "Grunge",
                "New Wave",
                "Electronica"
            ],
            correct: 1

        },
        {
            name: "What was the name of the popular band that revitalized Metal back in the 90's?",
            options: [
                "Iron Maiden",
                "Pantera",
                "Metallica",
                "Slayer"
            ],
            correct: 1

        },
        {
            name: "What was the name of the Brazilian band out of Belo Horizonte?",
            options: [
                "Death",
                "Rammstein",
                "Megadeth",
                "Sepultura"
            ],
            correct: 3

        },
        {
            name: "What song by Led Zeppelin is famous for having a religious theme?",
            options: [
                "Stairway to Heaven",
                "Highway to Hell",
                "Whole Lotta Love",
                "Hair of the Dog"
            ],
            correct: 0

        },


    ]
}
function eventlistener() {
    $("body").on("click", "#start", function () {
        STORE.view = "question"
        STORE.currentQuestion = 0
        STORE.score = 0
        render()
    })
    $("body").on("submit", "form", function (event) {
        event.preventDefault();
        STORE.view = "feedback"
        const answer = event.target.answer.value
        const question = STORE.questions[STORE.currentQuestion]
        if (question.correct == answer) {
            STORE.score++
            STORE.correct = true
        }
        else {
            STORE.correct = false
        }
        render()
    })
    $("body").on("click", "#nextquestion", function (event) {
        STORE.currentQuestion++
        if (STORE.currentQuestion < STORE.questions.length) {


            STORE.view = "question"
        } else {
            STORE.view = "finalscore"
        }
        render()
    })
    $("body").on("click", "#playagain", function (event) {
        STORE.view = "landing"
        render()
    })
}

function main() {
    render()
    eventlistener()
}


function render() {
    let html
    if (STORE.view == "landing") {
        html = `<div>
<h1>Rock Quiz</h1>
<button id="start">Start Now</button>
</div>

`
    } else if (STORE.view == "question") {
        const question = STORE.questions[STORE.currentQuestion]
        html = `<h2>${question.name}</h2>
        <div>
        You are on Question ${STORE.currentQuestion + 1} out of 5
        Current score is ${STORE.score} /5
        </div>
<form>
<input name="answer" value="0" id="answer1" type="radio" />
<label for="answer1">${question.options[0]}</label>
 <input name="answer" value="1" id="answer2" type="radio" />
 <label for="answer2">${question.options[1]}</label>
 <input name="answer" value="2" id="answer3" type="radio" />
 <label for="answer3">${question.options[2]}</label> 
 <input name="answer" value="3" id="answe41" type="radio" />
 <label for="answer4">${question.options[3]}</label>
    <button>submit</button>
</form>`
    }
    else if (STORE.view == "feedback") {
        if (STORE.correct) {
            html = `<section>
        <h2>You got that right!</h2>
        <button id="nextquestion">Next Question</button>
    </section>`
        }
        else {
            const question = STORE.questions[STORE.currentQuestion]
            html = `<section>
            <h2>You answered incorrectly. The correct answer is ${question.options[question.correct]}.</h2>
            <button id="nextquestion">Next Question</button>
        </section>`
        }


    }
    else if (STORE.view == "finalscore") {
        html = `<section>
        <h2>Final Score</h2>
        <h3>You got ${STORE.score} out of 5 correct</h3>
        <button id="playagain">Play Again</button>
    </section>`
    }
    $("main").html(html)
}


$(main)