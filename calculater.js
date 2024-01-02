function dis(val){
  let display = document.querySelector('#output')
  display.value += val
}
function solve(){
  let display = document.querySelector('#output')
  let a = display.value
  let b = eval(a)
  display.value =b
}
function del(){
  let display = document.querySelector('#output')
  display.value = '';
}
function backspace(){
  let display = document.querySelector('#output')
  display.value = display.value.substring(0, display.value.length - 1);
}
function x2(){
  let display = document.querySelector('#output')
  display.value = Math.pow(display.value,2)
}
function x3(){
  let display = document.querySelector('#output')
  display.value = Math.pow(display.value,3)
}
function abs(){
  let display = document.querySelector('#output')
  display.value = Math.abs(display.value)
}
function sin(){
  let display = document.querySelector('#output')
  display.value = Math.sin(display.value*(Math.PI/180))
}
function cos(){
  let display = document.querySelector('#output')
  display.value = Math.cos(display.value*(Math.PI/180))
}
function tan(){
  let display = document.querySelector('#output')
  display.value = Math.tan(display.value*(Math.PI/180))
}
function asin(){
  let display = document.querySelector('#output')
  display.value = Math.asin(display.value)
}
function acos(){
  let display = document.querySelector('#output')
  display.value = Math.acos(display.value)
}
function atan(){
  let display = document.querySelector('#output')
  display.value = Math.atan(display.value)
}
function ln(){
  let display = document.querySelector('#output')
  display.value = Math.log(display.value)
}
function log(){
  let display = document.querySelector('#output')
  display.value = Math.log10(display.value)
}
function sqrt(){
  let display = document.querySelector('#output')
  display.value = Math.sqrt(display.value)
}
function cubrt(){
  let display = document.querySelector('#output')
  display.value = Math.cbrt(display.value)
}
function exp(){
  let display = document.querySelector('#output')
  display.value = Math.exp(display.value)
}
function pi(){
  let display = document.querySelector('#output')
  display.value = Math.PI
}
function percentage(){
  let display = document.querySelector('#output')
  display.value = display.value/100
}
function Rad(){
  let display = document.querySelector('#output')
  display.value = display.value*(Math.PI/180)
}
function deg(){
  let display = document.querySelector('#output')
  display.value = (Math.PI/180)/ display.value
}
function tenx(){
  let display = document.querySelector('#output')
  display.value = Math.pow(10,display.value)
}
function twox(){
  let display = document.querySelector('#output')
  display.value = Math.pow(2,display.value)
}
function ex(){
  let display = document.querySelector('#output')
  display.value = Math.pow(2.7183,display.value)
}
function deg(){
  let display = document.querySelector('#output')
  display.value = (Math.PI/180)/ display.value
}
function factorial() {
  let display = document.querySelector('#output')
  var result = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var result = 1;
    for (var i = display.value; i > 0; i--) {
      result = result * i;
    }
    display.value = result;
  }
}
function plusMinus() {
  let display = document.querySelector('#output')
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}
function invx() {
  let display = document.querySelector('#output')
  display.value = 1/display.value
}

function checkLength() {
  if (display.value.length >= 23) {
    display.value = "Overload Error";
  }
}
function syntaxError() {
  if (eval(display.value) == SyntaxError) {
    display.value = "Syntax Error";
  }
}
// function equals() {
//   if ((display.value).indexOf("^") > -1) {
//     var base = (display.value).slice(0, (display.value).indexOf("^"));
//     var exponent = (display.value).slice((display.value).indexOf("^") + 1);
//     display.value = eval("Math.pow(" + base + "," + exponent + ")");
//   } else {
//     display.value = eval(display.value);
//     checkLength();
//     syntaxError();
//   }
// }