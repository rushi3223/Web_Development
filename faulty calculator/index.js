function calculate() {
    let a = document.getElementById('firstNum').value;
    let b = document.getElementById('operation').value;
    let c = document.getElementById('secondNum').value;
    let resultDiv = document.getElementById('result');

    if (a === '' || c === '') {
        resultDiv.textContent = 'Please enter both numbers.';
        return;
    }

    let random = Math.random();
    let obj = {
        "+": "-",
        "*": "+",
        "-": "/",
        "/": "*",
    };

    let result;
    if (random > 0.1) {
        result = eval(`${a} ${b} ${c}`);
    } else {
        let faultyOp = obj[b] || b;
        result = eval(`${a} ${faultyOp} ${c}`);
    }
    resultDiv.textContent = `The result is ${result}`;
}

document.getElementById('calculateBtn').addEventListener('click', calculate);

