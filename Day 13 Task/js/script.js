//Student data
var student = {
    fname: "Mariam",
    lname: "Mohammed",
    id: "2202000",
    year: "Fourth year student",
    score: "90",
    address: {
        country: "Egypt",
        city: "Fayoum"
    },
    major: "IT"
}
console.log(student);
console.log(student.fname, student.lname);
console.log(student.address);
student.score = "85";
console.log(student.score);


// Average Calculator
var arr = ["Mariam", "Nehal", "Nada", "Menna"];
arr.push("Nouran");
console.log(arr);
arr.pop();
arr.forEach(function (arr) {
    console.log(arr);
});
var rating = [90, 80, 70, 60];
let sum = 0;
for (var i = 0; i < rating.length; i++) {
    sum += rating[i];
}
var avr = sum / rating.length;
console.log(avr);

//Button Click Counter
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    console.log("Button clicked");

})

