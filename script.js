const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn0 = document.querySelector("#btn0");
const btnTimes = document.querySelector("#btnTimes");
const btnMin = document.querySelector("#btnMin");
const btnEqual = document.querySelector("#btnEqual");
const btnSum = document.querySelector("#btnSum");
const btnDot = document.querySelector("#btnDot");
const btnSub = document.querySelector("#btnSub");
const btnClear = document.querySelector("#btnCls");

btn1.onclick = () => alert("click 1");
btn2.onclick = () => alert("click 1");
btn3.onclick = () => alert("click 1");
btn4.onclick = () => alert("click 1");
btn5.onclick = () => alert("click 1");
btn6.onclick = () => alert("click 1");
btn7.onclick = () => alert("click 1");
btn8.onclick = () => alert("click 1");
btn9.onclick = () => alert("click 1");
btn0.onclick = () => alert("click 1");
btnMin.onclick = () => alert("click 1");
btnEqual.onclick = () => alert("click 1");
btnSum.onclick = () => alert("click 1");
btnDot.onclick = () => alert("click");
btnTimes.onclick = () => alert("click");
btnSub.onclick = () => alert("click");

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (a === 0 && b === 0) {
    return "error";
  }
  if (b === 0) {
    return "undefined";
  }
  if (a === 0) {
    return "infinity";
  }

  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
    switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "x":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}
