const currentNumber = document.querySelector(".current-number-display");

const previousNumber = document.querySelector(".previous-number-display .previous-number");

const mathSign = document.querySelector(".previous-number-display .math-sign");

const numbers = document.querySelectorAll(".calculator-bottom .number");

const operators = document.querySelectorAll(".calculator-bottom .operator");

const equals = document.querySelector(".calculator-bottom .equals");

const percent = document.querySelector(".calculator-bottom .percent");

const sqrt = document.querySelector(".calculator-bottom .sqrt");

const clearCurrent = document.querySelector(".calculator-bottom .clear-current");

const clearDisplay = document.querySelector(".calculator-bottom .clear");

const backspace = document.querySelector(".calculator-bottom .backspace");

let result = '';



function displayNumbers() {
    if(this.textContent === '.' && currentNumber.innerText.includes('.')) {
        return;
    }

    if(this.textContent === '.' && currentNumber.innerText === ''){
        return currentNumber.innerText += "0.";
    }

    currentNumber.innerText += this.textContent;
}

function clearCurrentNumber() {
    currentNumber.innerText = '';
}

function clearAllDisplay() {
    currentNumber.innerText = '';
    mathSign.innerText = '';
    previousNumber.innerText = '';
}

function opearte() {
    if(this.textContent === '-' && currentNumber.innerText === '') {
        return currentNumber.innerText = "-";
    } else if(currentNumber.innerText === '') {
        return;
    }

    if(previousNumber.innerText !== '') {
        showResult();
    }

    previousNumber.innerText = currentNumber.innerText;
    mathSign.innerText = this.textContent;
    currentNumber.innerText = '';
}

function showResult() {
    if(currentNumber.innerText === '' || previousNumber.innerText === '' || currentNumber.innerText === '-') {
        return;
    }

    let a = Number(previousNumber.innerText);
    let b = Number(currentNumber.innerText);

    let operator = mathSign.innerText;

    switch(operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '×':
            result = a * b;
            break;
        case 'x^':
            result = a ** b;
            break;
        case '/':
            result = a / b;
            break;
    }

    clearAllDisplay();
    currentNumber.innerText = result;
}

function percentOperator() {
    if(currentNumber.innerText === '' || previousNumber.innerText === '') {
        return;
    }

    let a = Number(previousNumber.innerText);
    let b = (Number(currentNumber.innerText)/100)*a;

    let operator = mathSign.innerText;
    switch(operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '×':
            result = a * b;
            break;
        case 'x^':
            result = a ** b;
            break;
        case '/':
            result = a / b;
            break;
    }
    clearAllDisplay();
    currentNumber.innerText = result;
}

function sqrtOperator() {
    if(currentNumber.innerText === '') {
        return;
    }

    if(previousNumber.innerText === '' && mathSign.innerText === '') {
        result = Math.sqrt(Number(currentNumber.innerText));
    } else {
        let a = Number(previousNumber.innerText);
        let b = Math.sqrt(Number(currentNumber.innerText));

        let operator = mathSign.innerText;
        switch(operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '×':
                result = a * b;
                break;
            case 'x^':
                result = a ** b;
                break;
            case '/':
                result = a / b;
                break;
        }
    }
    clearAllDisplay();
    currentNumber.innerText = result;
}

function backspaceOperator() {
    if(currentNumber.innerText !== '') {
        currentNumber.innerText = currentNumber.innerText.slice(0, -1);
    }
}



numbers.forEach(number => {
    number.addEventListener('click', displayNumbers);
});

clearCurrent.addEventListener('click', clearCurrentNumber);

clearDisplay.addEventListener('click', clearAllDisplay);

operators.forEach(operator => {
    operator.addEventListener('click', opearte);
});

equals.addEventListener('click', showResult);

percent.addEventListener('click', percentOperator);

sqrt.addEventListener('click', sqrtOperator);

backspace.addEventListener('click', backspaceOperator);