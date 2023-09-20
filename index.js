const result = [
    "July 31",
    "Ron Weasley and Hermione Granger",
    "Gryffindor",
    "James and Lily Potter",
    "snake",
]

let score = 0

const scoreboard = document.getElementById("score")

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
    })
}

function checkAnswer(event, question, option) {
    const nextQuestion =
        question === result.length - 1
            ? document.getElementById("end")
            : document.getElementById(`question${question + 2}`)

    event.target.parentElement
        .querySelectorAll("button")
        .forEach((e) => (e.disabled = true))

    if (option === result[question]) {
        score++
        event.target.classList.add("correct")
        nextQuestion.style.display = "block"
    } else {
        event.target.classList.add("wrong")
        nextQuestion.style.display = "block"
    }

    setTimeout(() => scrollToBottom(), 1)

    scoreboard.innerText = score
}
