const jump = document.getElementById("jump")
const block = document.getElementById("block")
const score = document.getElementById("score")
const lose = document.getElementById('lose')
const ifLoser = document.getElementById('if_loser')
const start = document.getElementById('start')

let counter = 0;

function startGame() {
    start.addEventListener('click', function () {
        block.classList.add('animation_run')
        start.style.display = 'none'
    })
}

function jumpFunction() {
    if (jump.classList !== 'animation') {
        jump.classList.add('animation')
        score.innerHTML = `${counter}`
        setTimeout(function () {
            counter++
        }, 500)
    }
    setTimeout(function () {
        jump.classList.remove('animation')
    }, 500)

}

const failed = setInterval(function () {
    let jumpTop = parseInt(window.getComputedStyle(jump).getPropertyValue('top'))
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    if (blockLeft < 20 && blockLeft > 0 && jumpTop >= 426) {
        lose.style.display = ' none'
        ifLoser.style.display = ' flex'
    }
}, 10)

jump.addEventListener('click', jumpFunction)
jumpFunction()
startGame()