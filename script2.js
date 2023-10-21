let currentInput =""; 
        let display = document.getElementById ('display');
        let darkMode= false; 
      
        function appendPercentage() {
                currentInput += '%';
                display.value = currentInput;
            }

            function appendDecimal() {
                if (!currentInput.includes('.')) {
                    currentInput += '.';
                    display.value = currentInput;
                }
            }

            function toggleParentheses() {
                if (currentInput.endsWith('(')) {
                    currentInput += ')';
                } else {
                    currentInput += '(';
                }
                display.value = currentInput;
            }
            function calculateFactorial() {
                let result = 1;
                for (let i = 1; i <= currentInput; i++) {
                    result *= i;
                }
                currentInput = result;
                display.value = currentInput;
            }
            function appendPi() {
                currentInput += Math.PI;
                display.value = currentInput;
            }

            function calculateSquareRoot() {
                currentInput = Math.sqrt(currentInput);
                display.value = currentInput;
            }
        function deleteDigit() {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            }
        function appendToDisplay (value){ 
            currentInput += value;  
            display.value = currentInput; 
        } 

        function appendFunction(func) {
            currentInput += func;
            display.value = currentInput;
        }
     
        function clearDisplay (){ 
            currentInput = "";  
            display.value = ""; 
        } 
        // Funcion  para calcular el resultado de la exprecion ingresada por el usuario  
        function calculateResult (){ 
            try { 
                const result = eval(currentInput);// Evalua el resultado de la expresion y guarda el resultado  
                display.value = result; // Muestra el resultado en el display 
                currentInput = result.toString(); // Convierte el resultado en una CADENA  y lo almacena  
     
            } catch (error) { 
                display.value =' error'; // En caso del que el usuario haga alguna operacion erronea muestra un error en el display  
            } 
                 
        } 
        function toggleDarkMode() {
            darkMode=!darkMode;
            const calculator = document.querySelector(".calculator");
            calculator.classList.toggle("dark",darkMode);
        }
     