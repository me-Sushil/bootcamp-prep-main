// YOUR CODE BELOW
const exponentiate = (base, power) =>{

    let result = 1;
  
    for (let i = 0; i < power; i++) {
      result *= base;
    }
  
    return result;
  }
  
// alternate solution with a while loop
//   function exponentiate(base, power) {
//     if (power === 0) {
//       return 1;
//     }
  
//     let result = base;
  
//     while (power > 1) {
//       result *= base;
//       power--;
//     }
  
//     return result;
//   }