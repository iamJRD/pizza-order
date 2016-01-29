describe("PizzaOrder", function() {
  it("creates a new pizza order with the given properties", function() {
    var testPizzaOrder = new PizzaOrder("1", "Small", "Onions", 12.50);
    expect(testPizzaOrder.quantity).to.equal("1");
    expect(testPizzaOrder.pizzaSize).to.equal("Small");
    expect(testPizzaOrder.toppings).to.equal("Onions");
    expect(testPizzaOrder.price).to.equal(12.50);
  });

});
