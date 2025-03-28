// YOUR CODE BELOW
//Define a function taxCalculator that accepts the price of an 
// item and a state. taxCalculator should return the after-tax 
// cost of the item, assuming NY's tax is 4% and NJ's sales tax 
// is 6.625%.


// one way
const taxCalculator = (price, state) =>{
    switch (state){
        case 'NY':
            return price * 1.04;
        case 'NJ':
            return price * 1.06625;
        default :
        return price;
    }
};
console.log(taxCalculator("100", "NY"));


 // another way
// const taxCalculator = (price, state) => {
//     if (state === "NY"){
//         return price * 1.04;
//     }
//     else if (state === "NJ"){
//         return price * 1.06625;
//     }
//     else{
//         return price;
//     }
// }
// console.log(taxCalculator("100", "NY"));