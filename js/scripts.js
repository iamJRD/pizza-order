function PizzaOrder(quantity, pizzaSize, pizzaName, toppings, price) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.pizzaName = pizzaName;
  this.toppings = [];
  this.price = price;
};

  var pizzaToppings = ["Pepperoni","Canadian Bacon","Sausage","Bacon","Onions","Peppers","Olives","Mushrooms","Pineapple","Extra Cheese","Extra Sauce"];

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
  } if (this.pizzaSize === "ExtraLarge") {
    medPizzaPrice += 4;
  }
  return medPizzaPrice + (chosenToppings.length / 2);
};

PizzaOrder.prototype.orderSummary = function() {
  return this.pizzaSize + " " + this.pizzaName;
};

function resetFields() {
  $("input#inputtedQuantity").val("");
  $("select#inputtedPizzaSize").val("");
  $("input#inputtedPizzaName").val("");
  $("input:checkbox").removeAttr("checked");
}

$(document).ready(function() {
  $("form#new-pizza-order").submit(function(event) {
    event.preventDefault();

    var inputtedQuantity = $("input#inputtedQuantity").val();
    var inputtedPizzaSize = $("input#inputtedPizzaSize").val();
    var inputtedToppings = $("inputtedToppings").val();
    var inputtedPizzaName = $("input#inputtedPizzaName").val();
    var newPizzaOrder = new PizzaOrder(inputtedQuantity, inputtedPizzaSize, inputtedToppings);

    $("p#finalOrder").text(newPizzaOrder.orderSummary());





    resetFields();
  });
});
