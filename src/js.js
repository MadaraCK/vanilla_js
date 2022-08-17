const jump = document.getElementById("jump")
const block = document.getElementById("block")
const score = document.getElementById("score")
const lose = document.getElementById('lose')
const ifLoser = document.getElementById('if_loser')
const start = document.getElementById('start')
const lobby = document.getElementById('lobby')
const reset = document.getElementById('reset')
const full_screen = document.getElementById('full_screen')

let counter = 0;

function startGame() {
    start.addEventListener('click', function () {
        block.classList.add('animation_run')
        start.style.display = 'none'
        lobby.style.display = 'block'
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
        if (blockLeft < 20 && blockLeft > 0 && jumpTop >= 459) {
            lose.style.display = ' none'
            ifLoser.style.display = ' flex'
        } else if (blockLeft < 20 && blockLeft > 0 && jumpTop >= 439) {
            lose.style.display = ' none'
            ifLoser.style.display = ' flex'
        }
    }

    , 10)

// Refresh//

reset.addEventListener('click', function () {
    window.location.reload(true);
})

/// full screen


function getFullScreen() {
    return document.fullscreenElement
}

function fullScreen() {
    if (getFullScreen()) {
        document.exitFullscreen()
    } else {
        document.getElementById('full_screen').requestFullscreen().catch(console.log)
    }
}

document.addEventListener('dblclick', () => {
    fullScreen()
})
window.addEventListener('fullscreenchange', () => {
    console.log('fullscreen')
})

////
jump.addEventListener('click', jumpFunction)
jumpFunction()
startGame()