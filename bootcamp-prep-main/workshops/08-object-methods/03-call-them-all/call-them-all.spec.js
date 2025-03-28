describe('callThemAll', () => {

  it('is a function', () => {
    expect(typeof callThemAll).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = callThemAll({}, null);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns an array with one element for each method in the object', () => {
    let numFun = {
      addTwenty: function(num) {
        return num + 20;
      },

      subtractTen: function(num) {
        return num - 10;
      },

      stringify: function(num) {
        return String(num);
      }
    };

    let returnedValue = callThemAll(numFun, 25);
    expect(returnedValue.length).toEqual(3);
  });

  it('returns an array with the returned values from each method in the object', () => {
    let numFun = {
      addTwenty: function(num) {
        return num + 20;
      },

      subtractTen: function(num) {
        return num - 10;
      },

      stringify: function(num) {
        return String(num);
      }
    };

    let returnedValue = callThemAll(numFun, 25);

    expect(returnedValue.includes(45)).toEqual(true);
    expect(returnedValue.includes(15)).toEqual(true);
    expect(returnedValue.includes('25')).toEqual(true);
  });

  it('returns ignores properties in the objcet', () => {
    let mostlyProps = {
      imAProp: true,
      alsoAProp: true,
      propsGoToMe: true,
      propidyPropProp: true,

      onlyMethod: function(string) {
        return 'hello ' + string;
      }
    };

    let returnedValue = callThemAll(mostlyProps, 'world');
    expect(returnedValue).toEqual(['hello world']);
  });

});
