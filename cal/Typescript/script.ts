let random =    document.getElementById("x^2") ! as HTMLInputElement;
let randomvar = document.getElementById("2") ! as HTMLInputElement;
let randompow = document.getElementById("10x") ! as HTMLInputElement;
let randomlog = document.getElementById("ln") ! as HTMLInputElement;

function getHistory(): string {
  return document.getElementById("history-value")!.innerText;
}
function printHistory(num: string) {
  document.getElementById("history-value")!.innerText = num;
}
function getOutput() {
  return document.getElementById("output-value")!.innerText;
}
function printOutput(num: string) {
  if (num == "") {
    y.innerText = num;
  } else {
    y.innerText = getFormat(num);
  }
}
function getFormat(num: string) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num: string) {
  return Number(num.replace(/,/g, ""));
}
let operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {
    let temp = (<HTMLInputElement>e.target);
    if (temp.id === "clear") {
      printHistory("");
      printOutput("");
    } else if (temp.id === "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substring(0, output.length - 1);
        printOutput(output);
      }
    } else {
      let output: number |string |boolean = getOutput();
      let history: any = getHistory();
      if (output !== "" || output === "" || history !== "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (temp.id === "=") {
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + temp.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}
let number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    let temp = (<HTMLInputElement>e.target);
    let output :number|boolean|string = reverseNumberFormat(getOutput());
    if (!isNaN(output)) {
      //if output is a number
      output = output + temp.id;
      printOutput(output);
    }
  });
}

let y = document.getElementById("output-value") ! as HTMLInputElement;
function sin() {
  y.innerText = String(Math.sin(Number(y.innerText)));
}
function cos() {
  y.innerText = String(Math.cos(Number(y.innerText)));
}
function tan() {
  y.innerText = String(Math.tan(Number(y.innerText)));
}
function trigo() {
  let x  = document.getElementById("fun") ! as HTMLInputElement;
  switch (x.value) {
    case "sin":
      sin();
      break;

    case "cos":
      cos();
      break;

    case "tan":
      tan();
      break;

    default:
      y.innerText = "0";
      break;
  }
}
function floor() {
  y.innerText = String(Math.floor(Number(y.innerText)));
}
function ceil() {
  y.innerText = String(Math.ceil(Number(y.innerText)));
}
function mathf() {
  let check = document.getElementById("fun2") ! as HTMLInputElement;
  switch (check.value) {
    case "floor":
      floor();
      break;

    case "ceil":
      ceil();
      break;

    default:
      y.innerText = "0";
      break;
  }
}
function exp() {
  y.innerText =String(Math.exp(Number(y.innerText)));
}
function PI() {
  y.innerText = String(Math.PI);
}
function E() {
  y.innerText = String(Math.E);
}
function pow() {
  if (y.innerText !== "0" && y.innerText !== "") {
    if (random.innerText == "x2") {
      y.innerText = String(Math.pow(parseInt(y.innerText), 2));
    } else {
      y.innerText = String(Math.pow(parseInt(y.innerText), 3));
    }
  }
}
function sqrt() {
  if (y.innerText !== "0" && y.innerText !== "") {
    if (randomvar.innerHTML == "<sup>2</sup>√x") {
      y.innerText = String(Math.sqrt(Number(y.innerText)));
    } else {
      y.innerText = String(Math.cbrt(Number(y.innerText)));
    }
  }
}
function tanpow() {
  if (y.innerText !== "0" && y.innerText !== "") {
    if (randompow.innerHTML == "10<sup>x</sup>") {
      y.innerText = String(Math.pow(10, parseInt(y.innerText)));
    } else {
      y.innerText = String(Math.pow(2, parseInt(y.innerText)));
    }
  }
}
function log() {
  if (y.innerText !== "0" && y.innerText !== "") {
    y.innerText = String(Math.log10(Number(y.innerText)));
  }
}
function lnlog() {
  if (y.innerText !== "0" && y.innerText !== "") {
    if (randomlog.innerText == "ln") {
      y.innerText = String(Math.log(Number(y.innerText)));
    } else {
      y.innerText = String(Math.E ** Number(y.innerText));
    }
  }
}
function rational() {
  if (y.innerText !== "0" && y.innerText !== "") {
    y.innerText = String(1 / parseInt(y.innerText));
  }
}
const factorial = () => {
  let fact = 1;
  let num  = Number(y.innerText);
  for (let i = 1; i <= num; i++) {
  fact *= i;
   }
  y.innerText = String(fact);
 }
function exponentiation() {
  if (y.innerText !== "0" && y.innerText !== "") {
    let a: string = (y.innerText += "**");
    printOutput("");
    printHistory(a);
  }
}
function scientific_nota() {
  if (y.innerText !== "0" && y.innerText !== "") {
    let x: string = y.innerText;
    let a: string = parseInt(x).toExponential();
    printOutput("");
    printHistory(a);
  }
}

let mv :number[] = []; 
function modx() {
  if (y.innerText !== "0" && y.innerText !== "") {
    y.innerText = String(0 - parseInt(y.innerText));
  }
}
function ms()  {
  if (y.innerText !== "0" && y.innerText !== "") {
    mv.unshift(Number(y.innerText));
    let z  = document.getElementById("memory-value") ! as HTMLInputElement;
    z.innerText  = String(mv);
  }
}
function mp() {
  if (mv[0]) {
    y.innerText = String(mv[0] + parseInt(y.innerText));
  }
}
function mm() {
  if (mv[0]) {
    y.innerText = String(mv[0]  - parseInt(y.innerText));
  }
}
function mc() {
  let z = document.getElementById("memory-value") ! as HTMLInputElement;
  z.innerText = "";
  mv  = [];
}
function mr() {
  if (y.innerText !== "0" && y.innerText !== "") {
    y.innerText += mv[0];
  }
}
const deg_rad = () => {
  let val  = document.getElementById("deg") ! as HTMLInputElement;
  let convert : number= parseInt(y.innerText);
  if (y.innerText !== "0" && y.innerText !== "") {
    if (val.innerText === "DEG") {
      val.innerText = "RAD";
      console.log(val.innerText);
      y.innerText = String(convert * (180 / Math.PI));
    } else {
      val.innerText = "DEG";
      y.innerText = String(convert * (Math.PI / 180));
      console.log(val.innerText);
    }
  }
};
let valid: boolean = true;
function ChangeAll() {
  if (valid) {
    (random.innerHTML = "x<sup>3</sup>"),
      (randomvar.innerHTML = "<sup>3</sup>√x"),
      (randompow.innerHTML = "2<sup>x</sup>"),
      (randomlog.innerHTML = "e<sup>x</sup>");
    valid = false;
  } else {
    valid = true;
    (random.innerHTML = "x<sup>2</sup>"),
      (randomvar.innerHTML = "<sup>2</sup>√x"),
      (randompow.innerHTML = "10<sup>x</sup>"),
      (randomlog.innerHTML = "ln");
  }
}
