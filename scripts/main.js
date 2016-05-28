var past = [''];

var working = '';

function output(param) {
  document.getElementById("input").innerHTML = param;
}

function calcInput(param) {
  switch(param){
    case 'AC':
    working = "";
    past = [];
    output(working);

    break;
    case 'CE':
    working = past[past.length -1];
    var a = past.pop();
    output(working);
    break;
    case 'ANS':
    
    break;
    case '=':
    working = eval(working);
    past.push(working);
    output(working);
    break;

    case '%':
    case '/':
    case '*':
    case '+':
    case '-':
    case '9':
    case '8':
    case '7':
    case '6':
    case '5':
    case '4':
    case '3':
    case '2':
    case '1':
    case '0':
    working += param;
    past.push(working);
    output(working);
    break;
  }
}
