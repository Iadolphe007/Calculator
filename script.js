const display = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')
let result = ''
const operator = ["%", "*", "/", "-", "+", "="]
 
const operation = (btn_value) => {
    if (btn_value === "=" && result !== " "){
        
        result = eval(result.replace("%", "/100"))

    }else if(btn_value === "AC"){
        result = ''
    }
    
    else if (btn_value === 'Del'){
        result = result.toString().slice(0, -1)
    } else{
        if(result === '' && operator.includes(btn_value)) return
        result += btn_value
    }
    display.value = result
}


buttons.forEach((button) => {
    button.addEventListener("click", (e) => operation(e.target.dataset.value))
})

