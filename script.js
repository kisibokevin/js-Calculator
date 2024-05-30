
document.addEventListener("DOMContentLoaded", function() {

    let display = document.getElementById("display");
    const numbers = document.querySelectorAll(".numbers");
    const operators = document.querySelectorAll(".operator");

    numbers.forEach(function(number) {
        number.addEventListener("click", function() {

            if (display.value === "0" || display.value === "NaN") {
                display.value = "";
            }

            display.value += number.value;
        })
    })

    operators.forEach(function(operator) {
        operator.addEventListener("click", function() {
            if (operator.value === "+" || operator.value === "-" || operator.value === "*" || operator.value === "/" || operator.value === ".") {
                display.value += operator.value;
            } else if (operator.value === "AC") {
                display.value = "";
            } else if (operator.value === "DEL") {
                display.value = display.value.slice(0, -1);
            } else{
                display.value = eval(display.value);
            }
        })
    })

})