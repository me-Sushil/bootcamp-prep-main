// YOUR CODE BELOW
//function getMax(f, s, a) {if (f > s) {if (f > a) {return f;} return a;} else if (s > a) {return s;}else {return a;}}
const getMax = (f, s, a) =>{
 if(f > s && f > a){
    return f;
 }
 else if ( s > f && s > a){
    return s;
 }
 else{
    return a;
 }
}



// function getMax(num1, num2, num3) {
//     if (num1 > num2) {
//       if (num1 > num3) {
//         return num1;
//       }
//       return num3;
//     }
//     else if (num2 > num3) {
//       return num2;
//     }
//     else {
//       return num3;
//     }
//   }