describe('lastWord', () => {

  it('should be of type string', () => {
    expect(typeof lastWord).toEqual('string');
  });


  it('should be uppercased if word starts with p and has length of 7', () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let lastWordValues = {
      'carrots': 'carrots',
      'pacific': 'PACIFIC',
      'perfecto': 'perfecto',
      'perfect': 'PERFECT'
    }

    expect(lastWord).toEqual(lastWordValues[word]);
  });

});
