let current_operation = null
let screen_del = false
let first_operator = ''
let second_operator = ''

clearBtn = document.getElementById('c-btn')
deleteBtn = document.getElementById('del-btn')
screen_input = document.querySelector('.input')
screen_out = document.querySelector('.output')
numBtn = document.getElementById('data')
signBtn = document.getElementById('sign')
equalBtn = document.getElementById('equal-btn')
dotBtn = document.getElementById('dot-btn')


window.addEventListener('keydown', Keyboard_input)
equalBtn = addEventListener('click', evaluate)
clearBtn = addEventListener('click', clear)
deleteBtn = addEventListener('click', delete_number)
dotBtn = addEventListener('click', add_point)


numBtn.forEach((button) => 
    button.addEventListener('click', () => add_number(button.textContent))
)

signBtn.forEach((button) =>
  button.addEventListener('click', () => add_sign(button.textContent))
)

function add_number(number){
    if(screen_input.textContent === '0' || screen_del){
        delete_screen()
        screen_input.textContent += number
    }
}

function delete_screen(){
    screen_input.textContent = ''
    screen_del = false
}

function clear() {
    screen_input.textContent = '0'
    screen_out.textContent = ''
    first_operator = ''
    second_operator = ''
    current_operation = null
  }
  function add_point() {
    if (screen_del){
        delete_creen()
    }
    if (screen_input.textContent === ''){
        screen_input.textContent = '0'
    }
    if (screen_input.textContent.includes('.')){
        return
    }
    screen_input.textContent += '.'
}

function delete_number() {
    screen_input.textContent = screen_input.textContent
      .toString()
      .slice(0, -1)
}
  

function set_operator(operator){
    if(current_operation !== null){
        evaluate()
    }
    first_operator = screen_input.textContent
    current_operation = operator
    screen_out.textContent = `${first_operator} ${current_operation}` 
    screen_del = true
}

function evaluate(){
    if(current_operation === null || screen_del){
        return
    }
    if (current_operation === '÷' && screen_input.textContent === '0'){
        alert('Error')
    }
    second_operator = screen_input.textContent
    screen_input.textContent = round_result(
        operate(current_operation, first_operator, second_operator))
    screen_out.textContent = `${first_operator} ${current_operation} ${second_operator} =`
    current_operation = null
}

function round_result(number) {
    return Math.round(number * 1000) / 1000
}

function Keyboard_input(e) {
    if (e.key >= 0 && e.key <= 9){
        add_number(e.key)
    }
    if (e.key === '.'){
        add_point()
    }
    if (e.key === '=' || e.key === 'Enter'){
        evaluate()
    }
    if (e.key === 'Backspace'){
        delete_number()
    }
    if (e.key === 'Escape'){
        clear()
    }
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
        add_sign(convertOperator(e.key))
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