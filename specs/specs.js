describe("pingPonging", function(){
  it("will return 'Ping' if the number is divisable by only 3", function(){
    expect(pingPonging(9)).to.equal("Ping");
  });

  it("will return 'Pong' if the number is divisable by only 5", function(){
    expect(pingPonging(20)).to.equal("Pong");
  });

  it("will return 'PingPong' if the number is divisable by 3 and 5", function(){
    expect(pingPonging(45)).to.equal("PingPong");
  });

});