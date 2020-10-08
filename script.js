// grabs elements that need to be updated based on user input
const display = document.querySelector('#display')
const inputSize = document.querySelector('#input-size')
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
    display.style.fontSize = fontInput + 'px'
}
// gets the input from the select menu and updates the display box and settings
function getFontFamily(){
    const selectFont = document.querySelector('#select-font')
    const fontFamily = selectFont.value
    showFont.innerHTML = fontFamily
    display.style.fontFamily = fontFamily
}
// gets the input from the color wheel and changes the font color
function getFontColor(){
    const fontColor = inputColor.value
    display.style.fontColor = inputColor
    showColor.innerHTML = fontColor
    display.style.color = fontColor
}
// gets the input from the color wheel and changes the background color
function getBgColor(){
    const bgColor = bgInputColor.value
    display.style.bgColor = bgInputColor
    showBgColor.innerHTML = bgColor
    display.style.backgroundColor = bgColor
}
// gets the text enetered in the text area and updates the display box
function getText(){
    const text = enterText.value
    display.innerHTML = text
}
// listens when an input is made or changed and performs one of the task functions
inputSize.addEventListener('input', getFontSize)
inputColor.addEventListener('input', getFontColor)
bgInputColor.addEventListener('input', getBgColor)
enterText.addEventListener('input', getText)
selectFont.addEventListener('input', getFontFamily)