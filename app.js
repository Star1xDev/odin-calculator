// function to add 2 numbers
const add = function(a,b){
  return a + b;
}

// function to sub 2 numbers
const sub = function(a,b){
  return a - b;
}

// function to multiply 2 numbers
const mul = function(a,b){
  return a * b;
}

// function to divide 2 numbers
const div = function(a,b){
  return a / b;
}

// function to run operation
const operate = function(a,b,operation){
  switch(operation) {
    case "+":
      return add(a,b);
    case "-":
      return sub(a,b);
    case "*":
      return mul(a,b);
    case "/":
      return div(a,b);
  }
}


// idk
const calcInput = document.querySelector(".calc__input");
const outputExp = document.querySelector(".calc__output .expression span");
const outputResult = document.querySelector(".calc__output .result span");

// when u click a digit
function clickDigit(elememt){
   let digit = elememt.textContent;
   if (outputExp.textContent === "0") {
      outputExp.textContent = digit;
      if (operation === "") {
        firstOperand = digit;
      }

    }else {
      outputExp.textContent += digit;
      if (operation === "") {
        firstOperand += digit;
      } else{
        secondOperand += digit;
      }
    }

}

// when u click an operation
function clickOperation(elememt){
  // get type of operation
  const op = (elememt.classList.value).split(" ")[1];
  let isLastCharOp = false;
  // check if last char in exp is an operation
  let text = outputExp.textContent;

  if (op === "add") {
    if (secondOperand === "") {
      operation = "+";
    }else{
      nextOperation = "+";
    }
    outputExp.textContent += "+";
  }
  if (op === "sub") {
    if (secondOperand === "") {
      operation = "-";
    }else{
      nextOperation = "-";
    }
    outputExp.textContent += "-";
  }
  if (op === "mul") {
    if (secondOperand === "") {
      operation = "*";
    }else{
      nextOperation = "*";
    }
    outputExp.textContent += "*";
  }
  if (op === "div") {
    if (secondOperand === "") {
      operation = "/";
    }else{
      nextOperation = "/";
    }
    outputExp.textContent += "/";
  }
  if (op === "mod") {
    if (secondOperand === "") {
      operation = "%";
    }else{
      nextOperation = "%";
    }
    outputExp.textContent += "%";
  }
  if (op === "delete") {
    operation = "delete";
  }
  if (op === "clear") {
    operation = "";
    outputExp.textContent = "0";
    firstOperand = "0";
    secondOperand = "";
  }
  if (op === "more") {
  }
  if (op === "result") {
    evaluateExp(firstOperand,operation,secondOperand);
    setupNextOperation();
  }

}

// when u click the dot
function clickDot(elememt){
  console.log(elememt.textContent);
}

// function to evaluate the expression
// and print the result
function evaluateExp(firstOperand,operation,secondOperand){
  let result = operate(parseInt(firstOperand),parseInt(secondOperand),operation);
  console.log(result);
  outputResult.parentElement.classList.remove("hidden");
  outputResult.textContent = result;

}

// function to setup for next operation
function setupNextOperation(){
  if (outputResult !== "") {
    firstOperand = outputResult.textContent;
  } else{
    firstOperand = "0";
  }
  operation = nextOperation;
  secondOperand = "";
  nextOperation = "";
}




// click event on calc
let firstOperand = "0";
let secondOperand = "";
let operation = "";
let nextOperation = "";

calcInput.addEventListener('click', function (e) {
  const target = e.target;
  let result = outputResult.textContent;

  // if target is a digit
  if (target.classList.contains("digit")) {
    clickDigit(target);
  }
  // if target is a operation
  if (target.classList.contains("op")) {
    clickOperation(target);
  }
  // if target is a dot
  if (target.classList.contains("dot")) {
    clickDot(target);
  }

  if (operation === "") {
    result = firstOperand;
  }

  if (nextOperation !== "") {
    evaluateExp(firstOperand,operation,secondOperand);
    setupNextOperation();
  }

  console.group("info");
  console.log("result is : " + result);
  console.log("operation is : " + operation);
  console.log("first operand : " + firstOperand);
  console.log("second operand : " + secondOperand);
  console.log("nextOperation : " + nextOperation);
  console.groupEnd("info");

});


