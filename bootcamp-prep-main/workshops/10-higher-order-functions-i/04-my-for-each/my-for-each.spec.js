describe('myForEach', () => {
  let testObj;

  // testing magic to see if the callback is called enough times
  beforeEach(() => {
    testObj = {
      testCallback: function(element, idx) {}
    }

    spyOn(testObj, 'testCallback');
  })

  it('is a function', () => {
    expect(typeof myForEach).toEqual('function');
  });

  it('returns undefined', () => {
    let returnedValue = myForEach([1, 2, 3], function() {});
    expect(typeof returnedValue).toEqual('undefined');
  });

  it('calls the callback once for every element in the passed-in array', () => {
    myForEach([1, 2, 3], testObj.testCallback)
    expect(testObj.testCallback.calls.count()).toEqual(3)
  });

  it('passes each element of the array as the first argument into the callback', () => {
    myForEach([10, 20, 30], testObj.testCallback)
    expect(testObj.testCallback.calls.argsFor(0)[0]).toEqual(10);
    expect(testObj.testCallback.calls.argsFor(1)[0]).toEqual(20);
    expect(testObj.testCallback.calls.argsFor(2)[0]).toEqual(30);
  });

  it('passes the index of each element of the array as the second argument into the callback', () => {
    myForEach([10, 20, 30], testObj.testCallback)
    expect(testObj.testCallback.calls.argsFor(0)[1]).toEqual(0);
    expect(testObj.testCallback.calls.argsFor(1)[1]).toEqual(1);
    expect(testObj.testCallback.calls.argsFor(2)[1]).toEqual(2);
  });

});
