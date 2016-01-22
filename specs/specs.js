describe("pingPonging", function(){
  it("will return 'ping' if the number is divisable by only 3", function(){
    expect(pingPonging(9)).to.equal("Ping");
  });

  it("will return 'pong' if the number is divisable by only 5", function(){
    expect(pingPonging(20)).to.equal("Pong");
  });

});
