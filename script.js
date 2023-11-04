function calculate(operator) {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
  
    if (isNaN(input1) || isNaN(input2)) {
      document.getElementById('result').value = 'Ошибка';
    } else {
      let result;
      switch (operator) {
        case '+':
          result = input1 + input2;
          break;
        case '-':
          result = input1 - input2;
          break;
        case '*':
          result = input1 * input2;
          break;
        case '/':
          result = input1 / input2;
          break;
        case 'sqrt':
          result = Math.sqrt(input1);
          break;
        default:
          result = 'Ошибка';
      }
  
      document.getElementById('result').value = result;
    }
}
  
function clearFields() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('result').value = '';
}
  