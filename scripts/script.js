function getHistory() {
  //getter
  //obtener valor del historial

  return document.getElementById("history-value").innerText;
}

function printHistory(num) {
  //setter
  //imprime en el campo history
  document.getElementById("history-value").innerText = num;
}

function getOutput() {
    //obtiene el valor en el output
  return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    //imprime en el campo output
  if (num == "") {
    document.getElementById("output-value").innerText = "";
  } else {
    document.getElementById("output-value").innerText = getFormatedNumber(num);
  }
}

function getFormatedNumber(num) {
    //verifica si un numero es negativo y elimina el guion si es cierto
  if (num == "-") {
    return "";
  }

  var n = Number(num); //convierte la cadena a numero
  var value = n.toLocaleString("en"); //convertir numero a formato local (agrega comas para separar los miles)
  return value;
}

function limpiar() {
    //limpia los campos de history y output
  printHistory("");
  printOutput("");
}

//regex
function reverseNumberFormat(num) {
    //convierte la cadena a numero
  return Number(num.replace(/,/g, "")); //replace nos permite reemplazar todas las , de la cadena (atributo g) por un espacio en blanco
}

function retroceder() {
    //elimina el ultimo numero en el output
  var output = reverseNumberFormat(getOutput()).toString();

  if (output) {
    //Si output tiene valor
    output = output.substring(0, output.length - 1); //corta el ultimo caracter de la cadena
    printOutput(output);
  }
}

function numero(numero) {
    //agrega el numero presionado al output
  var output = reverseNumberFormat(getOutput());

  if (output != NaN) {
    // NaN = Not a Number
    //Si es un número
    console.log(typeof numero); //saber que tipo de dato es numero (Solo para verificar si es string)
    output = output + numero;
    printOutput(output);
  }
}

function operador(operador) {
    //activa la funcion del operador presionado
  var output = getOutput();
  var history = getHistory();

  if (output == "" && history != "") {
    //revisar si hay caracter al final de la string
    if (isNaN(history[history.length - 1])) {
      history = history.substring(0, history.length - 1); //traer string sin el caracter (elimina el ultimo caracter de la cadena)
    }
  }

  if (output != "") {
    output = reverseNumberFormat(output); //quita las comas de la cadena y las convierte en numero
  }

  history = history + output; //concatena al history lo que hay en output

  if (operador == "=") {
    var result = eval(history); //convierte la cadena en una evaluacion matematica y la guarda en la variable result
    printOutput(result);
    printHistory("");
  }else{
        //si se presiona cualquier operador que no sea "=" 
    history = history + operador; //concatenar operador con string history
    printHistory(history); //imprimir en history la cadena anterior concatenada con el operador
    printOutput(""); 
  }
}
