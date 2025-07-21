var urName = window.prompt("Enter your name:")
console.log(`Hello ${urName}!`);

//Ex1 (Calculator)
(function () {
    var numb1 = Number(window.prompt("Enter first number:"));
    var numb2 = Number(window.prompt("Enter second number:"));
    var operation = window.prompt("+ - * / %");

    if (operation === "+") {
        result = numb1 + numb2;
        console.log(result);
    }
    else if (operation === "-") {
        result = numb1 - numb2;
        console.log(result);
    }
    else if (operation === "*") {
        result = numb1 * numb2;
        console.log(result);
    }
    else if (operation === "/") {
        result = numb1 / numb2;
        console.log(result);
    }
    else if (operation === "%") {
        result = numb1 % numb2;
        console.log(result);
    }
    else {
        console.log("Please enter a valid operation");
    }
})();


//_______________________________________________________________________________________

//Ex2 (Multiplication table)
(function () {
    var num = Number(window.prompt("Enter number:"));

    function multiplicationTable(num) {
        for (var i = 1; i <= 12; i++) {
            result = num * i;
            console.log(result);
        }
    }
    multiplicationTable(num);
})();




//_______________________________________________________________________________________

//Ex3 (Even and Odd Number Counter)
var num = Number(window.prompt("Enter number:"));

function countEvenOdd(num) {
    console.log("Even numbers:");
    for (var i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
    console.log("Odd numbers:");
    for (var i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }

}
countEvenOdd(num);


//_______________________________________________________________________________________

//Ex4 (Grade Calculator)
var score = Number(window.prompt("Enter your score:"));

if (score > 100 || score < 0) {
    console.log("Please enter score between 0 and 100");
}
else if (score >= 90 && score <= 100) {
    console.log("A");
}
else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}

