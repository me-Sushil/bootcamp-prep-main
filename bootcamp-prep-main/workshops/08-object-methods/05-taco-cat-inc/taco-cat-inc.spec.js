
describe('tacoCatInc', () => {

  it('is an object', () => {
    expect(typeof tacoCatInc).toEqual('object');
  });

  describe('currentInventory', () => {

    it('is a method in tacoCatInc', () => {
      expect('currentInventory' in tacoCatInc).toEqual(true);
    });

    it('is a function', () => {
      expect(typeof tacoCatInc.currentInventory).toEqual('function');
    });

    it('returns a number', () => {
      let returnedValue = tacoCatInc.currentInventory();
      expect(typeof returnedValue).toEqual('number');
    });

    it('returns the correct value of the inventory', () => {
      let returnedValue = tacoCatInc.currentInventory();
      expect(returnedValue).toEqual(1710);
    });

    it('does not include cash in the returned value', () => {
      tacoCatInc.cash = 1000;

      let returnedValue = tacoCatInc.currentInventory();
      expect(returnedValue).toEqual(1710);

      tacoCatInc.cash = 0;
    });

  });

  describe('sale', () => {

    beforeEach(() => {

      // before each test, reset the cash and inventory quantities in tacoCatInc
      resetValues();

      function resetValues() {
        for (let category in tacoCatInc) {
          for (let item in tacoCatInc[category]) {
            tacoCatInc[category][item].quantity = 100;
          }
        }

        tacoCatInc.cash = 0;
      }

    });

    it('is a method in tacoCatInc', () => {
      expect('sale' in tacoCatInc).toEqual(true);
    });

    it('is a function', () => {
      expect(typeof tacoCatInc.sale).toEqual('function');
    });

    it('returns a number', () => {
      let returnedValue = tacoCatInc.sale({});
      expect(typeof returnedValue).toEqual('number');
    });

    it('returns the correct total price for the sale', () => {
      let order = {
        gourmetShell: 'hard treat shell',
        gourmetFishFilling: 'salmon'
      }

      let returnedValue = tacoCatInc.sale(order);
      expect(returnedValue).toEqual(7);
    });

    it('updates the inventory quantities for the correct items', () => {
      let order = {
        gourmetShell: 'soft treat shell',
        gourmetFishFilling: 'tuna',
        gourmetVeggie: 'cat grass',
        gourmetSeasoning: 'treat dust'
      }

      tacoCatInc.sale(order);

      expect(tacoCatInc.gourmetShell['soft treat shell'].quantity).toEqual(99);
      expect(tacoCatInc.gourmetShell['hard treat shell'].quantity).toEqual(100);
      expect(tacoCatInc.gourmetFishFilling.salmon.quantity).toEqual(100);
      expect(tacoCatInc.gourmetFishFilling.tuna.quantity).toEqual(99);
      expect(tacoCatInc.gourmetFishFilling.sardines.quantity).toEqual(100);
      expect(tacoCatInc.gourmetVeggie['cat grass'].quantity).toEqual(99);
      expect(tacoCatInc.gourmetSeasoning['cat nip'].quantity).toEqual(100);
      expect(tacoCatInc.gourmetSeasoning['treat dust'].quantity).toEqual(99);

    });


    it('updates the cash property by the correct amount', () => {
      let order = {
        gourmetShell: 'hard treat shell',
        gourmetFishFilling: 'sardines',
        gourmetSeasoning: 'treat dust'
      }

      tacoCatInc.sale(order);

      expect(tacoCatInc.cash).toEqual(3.6);
    });

  });

});
