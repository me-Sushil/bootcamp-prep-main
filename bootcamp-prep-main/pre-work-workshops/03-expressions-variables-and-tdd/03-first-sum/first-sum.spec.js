describe("myFirstSum", function() {

  it("should be a number", function() {
    expect(typeof myFirstSum).toEqual('number');
  });

  it("should be equal to 2018", function () {
  	expect(myFirstSum).toEqual(2018);
  });

});
