function calculate() {
    
    let operand1 = document.getElementById('operand1').value;
    let operator = document.getElementById('operator').value;
    let operand2 = document.getElementById('operand2').value;

   
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);

    if (isNaN(operand1) || isNaN(operand2)) {
        document.getElementById('result').textContent = 'Lūdzu ievadiet derīgus skaitļus.';
        return;
    }

    let result;

    
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                document.getElementById('result').textContent = 'Dalīšana ar nulli nav atļauta.';
                return;
            }
            result = operand1 / operand2;
            break;
        default:
            document.getElementById('result').textContent = 'Nepazīstams operators. Lūdzu, ievadiet vienu no šiem: +, -, *, /';
            return;
    }

    
    document.getElementById('result').textContent = `Rezultāts: ${result}`;
}