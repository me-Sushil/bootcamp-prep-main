describe('getDogBreeder', () => {

  it('is a function', () => {
    expect(typeof getDogBreeder).toEqual('function');
  });

  it('returns a dogBreeder function', () => {
    let returnedValue = getDogBreeder('Snoopy', 0);
    expect(typeof returnedValue).toEqual('function');
  });

    describe('dogBreeder', () => {
      let dogBreeder = getDogBreeder('Rufus', 5)

      it('is a function', () => {
        expect(typeof dogBreeder).toEqual('function');
      });

      it('returns an object', () => {
        let dogBreeder = getDogBreeder('Rufus', 5);
        let returnedValue = dogBreeder();

        expect(typeof returnedValue).toEqual('object');
      });

      it('returns an object with the given name and age', () => {
        let returnedValue = dogBreeder('Snoopy', 3);

        let expectedValue = {
          name: 'Snoopy',
          age: 3
        };

        expect(returnedValue).toEqual(expectedValue);
      });

      it('returns an object with the default age defined when getDogBreeder was called', () => {
        let dogBreeder = getDogBreeder('Rufus', 5)
        let returnedValue = dogBreeder('Snoopy');

        let expectedValue = {
          name: 'Snoopy',
          age: 5
        };

        expect(returnedValue).toEqual(expectedValue);
      });

      it('returns an object with the default name and age defined when getDogBreeder was called', () => {
        let dogBreeder = getDogBreeder('Rufus', 5)
        let returnedValue = dogBreeder();

        let expectedValue = {
          name: 'Rufus',
          age: 5
        };

        expect(returnedValue).toEqual(expectedValue);
      });

      it('returns an object with the default name defined when getDogBreeder was called if only the age is defined', () => {
        let dogBreeder = getDogBreeder('Rufus', 5)
        let returnedValue = dogBreeder(10);

        let expectedValue = {
          name: 'Rufus',
          age: 10
        };

        expect(returnedValue).toEqual(expectedValue);
      });

    });

});
