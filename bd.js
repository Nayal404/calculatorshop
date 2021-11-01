const input = document.querySelector("#input");
const output = document.querySelector("#output");
const btn = document.querySelector("#btn");
const error = document.querySelector("#error-msg");


function Bin2Dec() {
    const regEx = /^[0-1]+$/;

    if(input.value.match(regEx)) {
        const binArr = input.value.split('').reverse();
        let decNo = 0;

        binArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0);

        output.value = decNo.toString();
        output.style.cursor = 'text';
    }else {
        error.style.display = 'block';
    }
}


btn.addEventListener('click', () => {
    error.style.display = 'none';
    Bin2Dec();
})
var decimalInput = document.querySelector("#number"); 
var display = document.querySelector("#binary");

function makeBinary(n) {
  let output = '';
  if (n != 0) {
    let dividend = n;
    while (dividend != 0) {
      output = (dividend % 2) + output;
      dividend = Math.floor(dividend/2);
    }
  } else { output = "0";}
  return output;
}

function updateDisplay () {
  display.textContent = makeBinary(Math.abs(decimalInput.value));
}


decimalInput.addEventListener("change", updateDisplay);
decimalInput.addEventListener("click", updateDisplay);
