describe ("PizzaOrder", function() {
  it("creates a new pizza order with the given properties", function() {
    var testPizzaOrder = new PizzaOrder("1", "Small", "name", [], 12);
    expect(testPizzaOrder.quantity).to.equal("1");
    expect(testPizzaOrder.pizzaSize).to.equal("Small");
    expect(testPizzaOrder.pizzaName).to.equal("name");
    expect(testPizzaOrder.toppings).to.eql([]);
    expect(testPizzaOrder.price).to.equal(12);
  });

  it("creates the pricing prototype", function() {
    var testPizzaOrder = new PizzaOrder("1", "Medium", []);
    expect(testPizzaOrder.pricing()).to.equal(14);
  });

  it("creates the order summary prototype", function() {
    var testPizzaOrder = new PizzaOrder("1", "Large", "name", [], 16);
    expect(testPizzaOrder.orderSummary()).to.equal("Large name");
  });
});
