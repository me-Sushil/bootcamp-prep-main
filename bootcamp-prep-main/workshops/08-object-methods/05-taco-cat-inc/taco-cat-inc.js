let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  currentInventory: function(){
    let sum = 0;
    const ourInventory = [
      this.gourmetShell,
      this.gourmetFishFilling,
      this.gourmetVeggie,
      this.gourmetSeasoning,
    ];

    for(let i=0; i<ourInventory.length; ++i){
      const inventoryItem = ourInventory[i];

      const subItemValues = Object.values(inventoryItem);
      
      for(let j=0; j<subItemValues.length; ++j){
        const {cost, quantity} = subItemValues[j];

      const  itemValue = cost * quantity;

      sum += itemValue;
      }
    }
    return sum;
  },

  sale: function(order){
    let totalSale = 0;

    const orderItem = Object.entries(order);
    for(let i=0; i<orderItem.length; ++i){
      const [itemCategory, itemName] = orderItem[i];

      const itemValues = this[itemCategory][itemName];
      if(itemValues.quantity > 1){
        totalSale += itemValues.cost;

        this[itemCategory][itemName].quantity -= 1;
      }
    }
    this.cash += totalSale;
    return totalSale;
  },

  cash: 0
};

// YOUR CODE BELOW
