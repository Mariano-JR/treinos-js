const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");

var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;


if(currentNumber == 10){
    document.getElementById("increment").disabled = true;
} else {
    document.getElementById("increment").disabled = false;
}

increment.addEventListener("click", function(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0) {
        document.getElementById("currentNumber").style.color = "red"
    }else {
        document.getElementById("currentNumber").style.color = "black"
    }

    if(currentNumber == 10){
        document.getElementById("increment").disabled = true;
    } else {
        document.getElementById("increment").disabled = false;
    }

    if(currentNumber == -10){
        document.getElementById("decrement").disabled = true;
    } else {
        document.getElementById("decrement").disabled = false;
    }
    });

decrement.addEventListener("click", function(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0) {
        document.getElementById("currentNumber").style.color = "red"
    }else {
        document.getElementById("currentNumber").style.color = "black"
    }

    if(currentNumber == 10){
        document.getElementById("increment").disabled = true;
    } else {
        document.getElementById("increment").disabled = false;
    }

    if(currentNumber == -10){
        document.getElementById("decrement").disabled = true;
    } else {
        document.getElementById("decrement").disabled = false;
    }
    });