function pizzaFactory(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaFactory("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);
var p2 = pizzaFactory("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);
var p3 = pizzaFactory("flat", "white sauce", "mozzarella", ["chicken", "green peppers"]);
console.log(p3);
var p4 = pizzaFactory("regular", "extra sauce", "none", ["basil", "hot peppers"]);
console.log(p4)

function randomPizza() {
    var pizza = {};

    crustType = ["deep dish", "regular", "flat", "hand tossed"];
    sauceType = ["traditional", "hand tossed", "marinara", "none"];
    cheeses = ["mozzarella", "feta",];
    toppings = ["pepperoni", "basil", "green peppers", "hot peppers", "mushrooms", "olives", "onions"];

    pizza.crustType = crustType[Math.floor(Math.random() * crustType.length)];
    pizza.sauceType = sauceType[Math.floor(Math.random() * sauceType.length)];
    pizza.cheeses = cheeses[Math.floor(Math.random() * cheeses.length)];
    pizza.toppings = toppings[Math.floor(Math.random() * toppings.length)];

    return pizza;
}

var pizzarandom = randomPizza();
console.log(pizzarandom);