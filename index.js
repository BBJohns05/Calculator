let equation = []; //updating
let stringEquation = 0; //display and calc
let resetEquation = 0; //resting equations

function buttonPress(buttonID){ //putting in the pressed number
    checkOne(resetEquation)
    equation.push(buttonID)
    stringEquation = equation.join("")
    input.value = stringEquation
}

function equalFunction(){ //putting function into the textbox
    textCheck(resetEquation)
    let tempNumber = eval(stringEquation)
    input.value = tempNumber
    equation = [];
    stringEquation = equation.join("");
    resetEquation++
}

function textCheck(){ //new information check (constantly checking for new numbers)
    checkTwo(resetEquation)
    stringEquation = input.value;
    equation = stringEquation.split("");
}

function checkTwo(checkVariable){  
        resetEquation = 0
        input.value = ""
        stringEquation = ""
        equation = []
}

