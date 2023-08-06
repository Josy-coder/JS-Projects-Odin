let display = document.getElementById('display');
let currentExpression = '';

function appendToDisplay(value) {
    currentExpression += value;
    display.value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    display.value = '';
}

function calculate() {
    let result;
    try {
        const numbers = currentExpression.match(/[0-9.]+/g).map(parseFloat);
        const operators = currentExpression.match(/[\+\-\*\/]/g);

        if (!numbers || !operators || numbers.length !== operators.length + 1) {
            throw new Error('Invalid Expression');
        }

        result = numbers[0];
        for (let i = 0; i < operators.length; i++) {
            switch (operators[i]) {
                case '+':
                    result += numbers[i + 1];
                    break;
                case '-':
                    result -= numbers[i + 1];
                    break;
                case '*':
                    result *= numbers[i + 1];
                    break;
                case '/':
                    if (numbers[i + 1] === 0) {
                        throw new Error('Division by zero is not allowed');
                    }
                    result /= numbers[i + 1];
                    break;
            }
        }

        display.value = result;
        currentExpression = String(result);
    } catch (error) {
        display.value = 'Error';
        currentExpression = '';
    }
}
