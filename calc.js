let display = document.getElementById('display');
    let result = document.getElementById('result');
    let currentInput = '';

    function appendToDisplay(value) {
      currentInput += value;
      display.textContent = currentInput;
    }

    function appendMultiplication(value) {
      currentInput += value;
      display.textContent = currentInput;
    }

    function clearDisplay() {
      currentInput = '';
      display.textContent = '0';
    }

    function deleteLastDigit() {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput;
    }

    function calculateResult() {
      try {
        result.textContent = eval(currentInput).toString();
      } catch (error) {
        result.textContent = 'Error';
      }
    }

    function calculateSquareRoot() {
      try {
        result.textContent = Math.sqrt(eval(currentInput)).toString();
      } catch (error) {
        result.textContent = 'Error';
      }
    }

    function calculatePercentage() {
      try {
        result.textContent = (eval(currentInput) / 100).toFixed(2);
      } catch (error) {
        result.textContent = 'Error';
      }
    }

    // Keyboard support
    window.addEventListener('keydown', function (event) {
      if (event.key.match(/[0-9\+\-\*\/\(\)\.\=x]/i)) {
        if (event.key.toLowerCase() === 'x') {
          appendMultiplication('*');
        } else {
          appendToDisplay(event.key);
        }
      } else if (event.key === 'Enter') {
        calculateResult();
      } else if (event.key === 'Escape') {
        clearDisplay();
      } else if (event.key === 'Backspace') {
        deleteLastDigit();
      }
    });