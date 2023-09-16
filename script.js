var fruits = ["Apple", "Banana", "Mango"];
var content = document.getElementById('content');

content.innerHTML = fruits;
function pushArr(){
    fruits.push("Orange");
    content.innerHTML += "<p>After push: " + fruits.toString() + "</p>";
}

function popArr(){
    fruits.pop();
    content.innerHTML += "<p>After pop: " + fruits.toString() + "</p>";
}

function filterArr(){
    var longFruits = fruits.filter(fruit => fruit.length > 5);
    content.innerHTML += "<p>After filter: " + longFruits.toString() + "</p>";
}