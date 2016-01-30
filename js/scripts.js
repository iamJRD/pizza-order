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
      if(this.toppings[i] === pizzaToppings[j]) {
        this.toppingsPrice.push(.50);
        medPizzaPrice += .50;
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

$(document).ready(function() {
  $("form#new-pizza-order").submit(function(event) {
    event.preventDefault();

    var inputtedQuantity = $("input#inputtedQuantity").val();
    var selectedPizzaSize = $("select#inputtedPizzaSize").val();
    var inputtedPizzaName = $("input#inputtedPizzaName").val();

    var chosenToppings = [];
      $.each($("input[name='toppings']:checked"), function() {
        chosenToppings.push($(this).val());
      });

    var newPizzaOrder = new PizzaOrder(inputtedQuantity, selectedPizzaSize, inputtedPizzaName, chosenToppings);
    var totalPrice = newPizzaOrder.pricing();
    var fullPrice = totalPrice.toFixed(2);

    if (inputtedPizzaSize === "" || inputtedPizzaName === "") {
      alert("Please fill out all fields so we can properly complete your order!");
    } else {
    $(".userOrders").show();
    $("ul#order").append("<li><span class='order'>" + newPizzaOrder.orderSummary() + "</span></li>");
    };

    $(".order").one("click", function() {
      $("#orderDetails").show();
      $("#orderDetails h3").text(newPizzaOrder.orderSummary());
      $(".finalPrice").text(" $" + fullPrice);

      for (var i = 0; i < chosenToppings.length; i++) {
        $("ul#toppings").append("<li>" + chosenToppings[i] + "</li>");
      };
    });
    resetFields();
  });
});
