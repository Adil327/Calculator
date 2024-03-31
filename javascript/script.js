function appendToInput(value) {
    document.getElementById('inputBox').value += value;
}

// Input Function
function appendOperator(operator) {
    var inputBox = document.getElementById('inputBox');
    var lastChar = inputBox.value.slice(-1);

    if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/' && lastChar !== '.') {
        inputBox.value += operator;
    }
}

// Clear Input
function clearInput() {
    document.getElementById('inputBox').value = '';
}

// Delete character
function deleteLastChar() {
    var inputBox = document.getElementById('inputBox');
    inputBox.value = inputBox.value.slice(0, -1);
}

// Calculations
function calculate() {
    var inputBox = document.getElementById('inputBox');
    var result = eval(inputBox.value);
    inputBox.value = result;
}
