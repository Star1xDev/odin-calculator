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


