function PizzaOrder(quantity, pizzaSize, toppings, price) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.toppings = [];
  this.price = price;
};

  var pizzaToppings = ["Pepperoni","Canadian Bacon","Sausage","Bacon","Onions","Peppers","Olives","Mushrooms","Extra Cheese","Extra Sauce"];

PizzaOrder.prototype.pricing = function() {

  var medPizzaPrice = 14;
  var chosenToppings = [];

  for (var i = 0; i < pizzaToppings.length; i++) {
    if(this.toppings[i] === pizzaToppings[i]) {
      chosenToppings.push(pizzaToppings[i]);
    }
  }
  if (this.pizzaSize === "Personal") {
    medPizzaPrice -= 4;
  } if (this.pizzaSize === "Small") {
    medPizzaPrice -= 2;
  } if (this.pizzaSize === "Large") {
    medPizzaPrice += 2;
  } if (this.pizzaSize === "Extra Large") {
    medPizzaPrice += 4;
  }
  return medPizzaPrice + (chosenToppings.length / 2);
};
