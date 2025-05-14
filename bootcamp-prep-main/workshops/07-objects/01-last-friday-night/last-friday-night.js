// YOUR CODE BELOW
const lastFridayNight = (transactions) =>{
let total = 0;
for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    total += transaction.amount;
  }
 return total;
}