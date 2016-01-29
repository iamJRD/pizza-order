describe ("PizzaOrder", function() {
  it("creates a new pizza order with the given properties", function() {
    var testPizzaOrder = new PizzaOrder("1", "Small", [], 12);
    expect(testPizzaOrder.quantity).to.equal("1");
    expect(testPizzaOrder.pizzaSize).to.equal("Small");
    expect(testPizzaOrder.toppings).to.eql([]);
    expect(testPizzaOrder.price).to.equal(12);
  });

  it("creates the pricing prototype", function() {
    var testPizzaOrder = new PizzaOrder("1", "Medium", []);
    expect(testPizzaOrder.pricing()).to.equal(14);
  });

});
