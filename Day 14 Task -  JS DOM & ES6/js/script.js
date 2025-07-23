//Event task
document.body.addEventListener("click", function (e) {
    console.log("Clicked Element:", e.target);
});

document.getElementById("heading").addEventListener("dblclick", function (e) {
    console.log("You double-clicked!");
});

document.addEventListener("mousedown", function () {
    console.log("Mouse down");
});

document.addEventListener("keypress", function () {
    console.log("User is typing...");
});

document.getElementById("test").addEventListener("focus", function () {
    console.log("Input focused");
});



let img = document.createElement("img");
img.src = "./images/drew-coffman-1872.jpg";
img.style.width = "200px";
document.body.appendChild(img);
img.addEventListener("drag", function () {
    console.log("Image is being dragged");
});

//Day14 Task
"Use strict"

let btn = document.createElement("button");
btn.textContent = "Click!";
btn.className = "btn";
document.body.appendChild(btn);

let item = document.createElement("div");
item.textContent = "item";
item.className = "item";
document.body.appendChild(item);

//_______________________________________________

let lang = ["HTML", "CSS", "JS"];
let [first, , third] = lang;
console.log(first, third);

//_______________________________________________


let names = ["Mariam", "Haya", "Fatma"];
for (let name of names) {
    console.log(name);
}

let userInfo = {
    name: "Mariam",
    age: 21,
    address: "Fayoum"
}
for (let key in userInfo) {
    console.log(key + ":", userInfo[key]);
}

//_______________________________________________

let nums = [10, 20, 30];
let sum = nums.map(num => num + 20);
console.log(sum);

let num1 = [10, 20, 40, 80, 100];
let fnum = num1.filter(num => num > 40);
console.log(fnum);

//_______________________________________________

let numb = [15, 30, 80, 20]
function calc(...parem) {
    let empty = "";
    for (let i = 0; i < numb.length; i++) {
        empty += parem[i];
    }
    console.log(empty);

}
calc(...numb);

//_______________________________________________

let users = [
    { name: "Mariam", age: 21 },
    { name: "Habiba", age: 19 },
];

let result = users.find(users => userInfo.age > 20);
console.log(result);

