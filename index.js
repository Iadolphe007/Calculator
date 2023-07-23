clearBtn = document.getElementById('c-btn')
deleteBtn = document.getElementById('del-btn')
screen_input = document.querySelector('.input')
screen_out = document.querySelector('.output')
numBtn = document.querySelector('.value_num')
signBtn = document.querySelector('.sign')
equalNtm = document.getElementById('equal-btn')
dotBtn = document.getElementById('dot-btn')


function Keyboard_input(e) {
    if (e.key >= 0 && e.key <= 9){
        appendNumber(e.key)
    }
    if (e.key === '.'){
        appendPoint()
    }
    if (e.key === '=' || e.key === 'Enter'){
        evaluate()
    }
    if (e.key === 'Backspace'){
        deleteNumber
    }
    if (e.key === 'Escape'){
        clear()
    }
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
        setOperation(convertOperator(e.key))
    }
}


function convertOperator(key_operator) {
    if (key_operator === '/'){
        return '÷'
    }
    if (key_operator === '*'){
        return '×'
    }
    if (key_operator === '-'){
        return '−'
    }
    if (key_operator === '+'){
        return '+'
    }
  }
  

function add(a, b) {
    return a + b
}
function substract(a, b) {
    return a - b
}  
function multiply(a, b) {
    return a * b
}  
function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '−':
        return substract(a, b)
      case '×':
        return multiply(a, b)
      case '÷':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
}  