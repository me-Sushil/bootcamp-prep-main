// Given two boolean values boolean1 and boolean2, set the result variable to:

// 'both' if both boolean1 and boolean2 are true
// 'one' if only one of boolean1 and boolean2 are true
// 'none' if neither value is true

const boolean1 = true;
const boolean2 = true;

let result;

if (boolean1 === true && boolean2 === true){
    result = 'both';
}else if (boolean1 === true|| boolean2 === true){
    result = 'one';
}else{
    result = 'none';
}
console.log(result);