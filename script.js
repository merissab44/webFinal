// gets the headliner element
const display = document.querySelector('#display')
// gets the input field to change the size
const inputSize = document.querySelector('#input-size')
// this is the output that displays the values
const showSize = document.querySelector('#show-size')
const inputColor = document.querySelector('#input-color')
const showColor = document.querySelector('#show-color')
const bgInputColor = document.querySelector('#input-bg-color')
const showBgColor = document.querySelector('#show-bg-color')
const enterText = document.querySelector('#enter-text')
const showFont = document.querySelector('#show-font')
const selectFont = document.querySelector('#select-font')

function getFontSize(){
    // get the font size
    const fontInput = inputSize.value
    // show it in the html
    showSize.innerHTML = fontInput
    display.fontSize = fontInput
}

function getFontFamily(){
    const selectFont = document.querySelector('#select-font')
    const fontFamily = selectFont.value
    showFont.innerHTML = fontFamily
    display.style.fontFamily = fontFamily
}

function getFontColor(){
    const fontColor = inputColor.value
    display.style.fontColor = inputColor
    showColor.innerHTML = fontColor
    display.style.color = fontColor
}

function getBgColor(){
    const bgColor = bgInputColor.value
    display.style.bgColor = bgInputColor
    showBgColor.innerHTML = bgColor
    display.style.backgroundColor = bgColor
}

function getText(){
    const text = enterText.value
    display.innerHTML = text
}

inputSize.addEventListener('input', getFontSize)
inputColor.addEventListener('input', getFontColor)
bgInputColor.addEventListener('input', getBgColor)
enterText.addEventListener('input', getText)
selectFont.addEventListener('input', getFontFamily)