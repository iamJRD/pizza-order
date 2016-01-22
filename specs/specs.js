describe("pingPonging", function(){
  it("will return 'Ping' if the number is divisible by only 3", function(){
    expect(pingPonging(9)).to.equal("Ping");
  });

  it("will return 'Pong' if the number is divisible by only 5", function(){
    expect(pingPonging(20)).to.equal("Pong");
  });

  it("will return 'Ping-Pong' if the number is divisible by 3 and 5", function(){
    expect(pingPonging(45)).to.equal("Ping-Pong");
  });

  it("will return the number if it is not divisible by 3 or 5", function(){
    expect(pingPonging(13)).to.equal(13);
  });

});
