let searchInput = document.querySelector("#searchInput");
let userSelect = document.querySelector("#userSelect");
let postsDiv = document.querySelector("#posts");

(function () {
    const recipesList = ["carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber",
        "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin",
        "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini",
        "radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", "chili",
        "garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano",
        "cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple",
        "apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry",
        "boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit",
        "lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange",
        "papaya", "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate",
        "quince", "raspberry", "strawberry", "watermelon", "salad", "pizza", "pasta",
        "popcorn", "lobster", "steak", "bbq", "pudding", "hamburger", "pie", "cake",
        "sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries", "masala",
        "paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup",
        "hummus", "chili", "maple syrup", "parma ham", "fajitas", "champ", "lasagna",
        "poke", "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts",
        "rendang", "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb",
        "turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs"];

    let selectOptions = "";
    for (let option of recipesList) {
        selectOptions += `<option value="${option}">${option}</option> `
    }

    userSelect.innerHTML = selectOptions;
})();

async function getPosts(searchTerm = "pizza") {
    try {
        let response = await fetch(`http://forkify-api.herokuapp.com/api/search?q=${searchTerm}`);
        if (response.ok) {
            let data = await response.json();
            displayContent(data.recipes);
        }

    } catch {
        window.alert("There's an error!");
    }
}
getPosts();


function displayContent(dataArr) {
    let content = "";
    for (let item of dataArr) {
        content += `<div class="card" id="card" style="width: 18rem;">
    <img src="${item.image_url}" class="card-img-top" alt="${item.title}">
    <div class="card-body">
        <h5 class="card-title">${item.publisher}</h5>
        <p class="card-text">${item.title}</p>
        <a href="${item.source_url}" class="btn btn-primary" id="aBtn" target="_blank">View Recipe</a>
    </div>
</div>`;
    }
    postsDiv.innerHTML = content;
}

searchInput.addEventListener("input", function (e) {
    let searchTerm = e.target.value.toLowerCase();
    let found = false;
    for (let i = 0; i < userSelect.options.length; i++) {
        let option = userSelect.options[i];
        if (option.value.includes(searchTerm)) {
            userSelect.value = option.value;
            getPosts(option.value);
            found = true;
            break;
        }
    }
    if (!found && searchTerm !== "") {
        postsDiv.innerHTML = `<p style=" text-align:center;">No results found</p>`;
    }
});


userSelect.addEventListener("change", function (e) {
    getPosts(e.target.value.toLowerCase());
});
