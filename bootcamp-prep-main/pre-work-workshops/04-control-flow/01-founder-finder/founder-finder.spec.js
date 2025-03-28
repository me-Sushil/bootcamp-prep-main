describe('found', () => {

  it('is of type boolean', () => {
    expect(typeof found).toEqual('boolean');
  })

  it('is true only if name is David or Nimit', () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let foundValues = {
      'David': true,
      'Nimit': true,
      'Someone else': false
    }

    expect(found).toEqual(foundValues[name]);
  });

});
