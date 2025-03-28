describe('result', () => {

  it('should be of type string', () => {
    expect(typeof result).toEqual('string');
  });


  it('should be both, one, or none depending on the boolean1 and boolean2 values', () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let resultValues = {
      'truetrue': 'both',
      'truefalse': 'one',
      'falsetrue': 'one',
      'falsefalse': 'none'
    }

    expect(result).toEqual(resultValues[String(boolean1) + String(boolean2)]);
  });

});
