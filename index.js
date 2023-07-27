console.log("Hello World")

let count = 0

let minusBtn = document.querySelector('#minus-btn')
let resetBtn = document.querySelector('#reset-btn')
let plusBtn = document.querySelector('#plus-btn')

let counter = document.querySelector('#counter')


function decrease() {
    count -= 1
    counter.textContent = count
}

function reset() {
    count = 0
    counter.textContent = count
}

function increase() {
    count += 1
    counter.textContent = count
}


minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)
plusBtn.addEventListener('click', increase)


//--------------------------------------------------------------------------------------------------


let themeBtns = document.querySelectorAll('.theme-buttons')


function selectTheme(event) {
    document.body.className = event.target.textContent
    // document.querySelector('body').className = event.target.textContent

    document.querySelector('main').className = event.target.textContent

    let buttons = document.querySelectorAll('button')
    for(let i=0; i < buttons.length; i++) {
        buttons[i].className = event.target.textContent
    }
}

for(let i=0; i<themeBtns.length;i++) {
    themeBtns[i].addEventListener('click', selectTheme)
}


//---------------------------------------------------------------------------------------------------