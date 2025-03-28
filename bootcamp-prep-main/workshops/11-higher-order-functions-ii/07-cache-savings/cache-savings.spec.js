describe('cacheSavings', () => {

  it('is a function', () => {
    expect(typeof cacheSavings).toEqual('function');
  });

  it('returns a function', () => {
    let returnedValue = cacheSavings(function() {});
    expect(typeof returnedValue).toEqual('function');
  });

  describe('the returned function', () => {
    let testObj = {};

    beforeEach(() => {
      testObj.times10 = function(num) {
        return 10 * num;
      }

      spyOn(testObj, 'times10').and.callThrough()
    })

    it('calls the callback passed into cacheSavings the first time the returned function is called', () => {
      let returnedFunction = cacheSavings(testObj.times10);
      returnedFunction();

      expect(testObj.times10).toHaveBeenCalled();
    });

    it('does not call the callback a second time if the returned function is called twice with same argument', () => {
      let returnedFunction = cacheSavings(testObj.times10);
      returnedFunction(1);
      returnedFunction(1);

      expect(testObj.times10.calls.count()).toEqual(1);
    });

    it('calls the callback once for every unique argument received', () => {
      let returnedFunction = cacheSavings(testObj.times10);
      returnedFunction(1);
      returnedFunction(1);

      returnedFunction(2);
      returnedFunction(2);

      returnedFunction(3);
      returnedFunction(3);

      expect(testObj.times10.calls.count()).toEqual(3);
    });

    it('returns the result from the callback, whether or not the callback is actually called', () => {
      let returnedFunction = cacheSavings(testObj.times10);
      let returnedValue1 = returnedFunction(1);
      let returnedValue2 = returnedFunction(1);

      expect(returnedValue1).toEqual(10);
      expect(returnedValue2).toEqual(10);
    });

  });

});
