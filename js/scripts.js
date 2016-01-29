function PizzaOrder(quantity, pizzaSize, pizzaName, toppings, toppingsPrice, price) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.pizzaName = pizzaName;
  this.toppings = toppings;
  this.toppingsPrice = [];
  this.price = price;
};

PizzaOrder.prototype.pricing = function() {

  var medPizzaPrice = 14;
  var pizzaToppings = ["Pepperoni","Canadian Bacon","Sausage","Bacon","Onions","Peppers","Olives","Mushrooms","Pineapple","Extra Cheese","Extra Sauce"];

  for (var i = 0; i < this.toppings.length; i++) {
    for (var j = 0; j < pizzaToppings.length; j++) {
      if(this.toppings[i] === pizzaToppings[i]) {
        this.toppingsPrice.push(0.50);
        medPizzaPrice += 0.50;
      }
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
  return medPizzaPrice;
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
