.grid-container { 
 display: grid; 
 align-items: center; 
 justify-content: center; 
} 
.calculator-grid { 
 display: grid; 
 grid-template-columns: repeat(4, 1fr); 
 grid-template-rows: repeat(6, 1fr); 
 grid-gap: 1px; 
 background-color: #999; 
} 
.calculator-grid button { 
 font-family: 'DM Mono', monospace; 
 font-size: 25px; 
 background-color: #fff; 
 border: none; 
 cursor: pointer; 
} 
textarea { 
 grid-column: span 4; 
 font-family: 'DM Mono', monospace; 
 font-size: 25px; 
 text-align: end; 
 background-color: #fad3cb; 
 padding: 15px; 
 border: none; 
} 
.calculator-grid button:nth-child(n+18) { 
 background-color: tomato; 
} 
button:hover, 
.calculator-grid button:nth-child(n+18):hover { 
 background-color: #440b15; 
 color: white; 
 transition: 0.2s; 
} 
(javascript) 
const input = document.getElementById('inputtext'); 
const buttons = document.querySelectorAll('button'); 
function calculate(expression) { 
 console.log(expression); 
 try { 
 return new Function('return ' + expression)(); 
 } catch (error) { 
 return 'Malformed Operation'; 
 } 
} 
function operation(buttonValue) { 
 if (buttonValue === 'C') { 
 input.value = ''; 
 } else if (buttonValue === 'DEL') { 
 input.value = input.value.slice(0, -1); 
 } else if (buttonValue === '=') { 
 input.value = calculate(input.value); 
 } else { 
 input.value += buttonValue; 
 } 
} 
buttons.forEach(button => { 
 let buttonValue = button.innerText; 
 button.addEventListener('click', function () { 
 operation(buttonValue); 
 }); 
}); 
const input = document.getElementById('inputtext'); 
const buttons = document.querySelectorAll('button'); 
function operation(buttonValue) { 
 if (buttonValue === 'C') { 
 input.value = ''; 
 } else if (buttonValue === 'DEL') { 
 input.value = input.value.slice(0, -1); 
 } else if (buttonValue === '=') { 
 input.value = calculate(input.value); 
 } else { 
 input.value += buttonValue; 
 } 
} 
function calculate(expression) { 
 console.log(expression); 
 try { 
 return new Function('return ' + expression)(); 
 } catch (error) { 
 return 'Malformed Operation'; 
 } 
} 
buttons.forEach(button=> { 
 let buttonValue = button.innerText; 
 button.addEventListener('click', function(){operation(buttonValue)}) 
}); 