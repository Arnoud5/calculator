const btn = document.querySelectorAll("#numBtn");
const current = document.querySelector("#current-operand");
const previus = document.querySelector("#previus-operand");
const btnDelete = document.querySelector("#delete");
const btnClear = document.querySelector("#clear");
const opBtn = document.querySelectorAll("#operatorNum");
const eq = document.querySelector("#eq");
let currentNum = "";
let previusNum = "";
let operatorChosen = "";
let operatorChosen2 = "";
let result = "";

eq.addEventListener("click", () => {
  if (operatorChosen == "") {

  } else {
    result = operate(operatorChosen, previusNum, currentNum);
    previusNum = result;
    previus.innerHTML = previusNum;
    currentNum = "";
    current.innerHTML = currentNum;
    operatorChosen = "";
  }
});

opBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (operatorChosen === "") {
      operatorChosen = btn.value;
      previusNum += currentNum;
      const pickOp = document.querySelector("#pickOperator");
      pickOp.innerHTML = "";
      if (currentNum == "") {
        previus.innerHTML = `${previusNum} ${operatorChosen}`;
      } else {
        previus.innerHTML = `${currentNum} ${operatorChosen}`;
      }
    } else {
      result = operate(operatorChosen, previusNum, currentNum);
      previusNum = result;
      previus.innerHTML = previusNum;
      operatorChosen = "";
    }
    currentNum = "";
    current.innerHTML = currentNum;
  });
});

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

btn.forEach((numBtn) => {
  numBtn.addEventListener("click", () => {
    if (previusNum && operatorChosen === "") {
      console.log("pick an operator first");
      const pickOp = document.querySelector("#pickOperator");
      pickOp.innerHTML = "pick an operator first";
    } else {
      currentNum += numBtn.value;
      current.innerHTML = currentNum;
    }
  });
});

btnDelete.addEventListener("click", () => {
  currentNum = currentNum.slice(0, -1);
  current.innerHTML = currentNum;
});

btnClear.addEventListener("click", () => {
  currentNum = "";
  previusNum = "";
  current.innerHTML = currentNum;
  previus.innerHTML = previusNum;
});
