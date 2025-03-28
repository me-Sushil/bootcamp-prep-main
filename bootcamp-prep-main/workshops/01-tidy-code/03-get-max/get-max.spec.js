describe("getMax", function() {

  it("is a function", function() {
    expect(typeof getMax).toEqual('function');
  });

  it("returns a number", function() {
    let result = getMax(1, 2, 3);
    expect(typeof result).toEqual('number');
  });

  it("returns the first number if it is the largest", function () {
    let result = getMax(30, 20, 10);
  	expect(result).toEqual(30);
  });

  it("returns the second number if it is the largest", function () {
    let result = getMax(20, 60, 40);
    expect(result).toEqual(60);
  });

  it("returns the third number if it is the largest", function () {
    let result = getMax(-300, -200, -100);
    expect(result).toEqual(-100);
  });

});
