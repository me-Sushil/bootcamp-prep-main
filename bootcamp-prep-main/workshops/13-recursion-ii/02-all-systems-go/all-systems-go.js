// // YOUR CODE BELOW
// const allSystemsGo = (obj) => {
//   for (let key in obj) {
//     let value = obj[key];
//     if (typeof value === "object") { 
//       let finalVal = allSystemsGo(value);
//       if (!finalVal) {
//         return false;
//       }
//     }
//     if (!value) {
//       return false;
//     }
//   }
//   return true;
// };



const allSystemsGo = (anObj) =>{
    let allObjValue = Object.values(anObj);

    return allObjValue.every((elementOrSystem)=>{
        if(typeof elementOrSystem === "object"){
          return  elementOrSystem = allSystemsGo(elementOrSystem);
        }else{
            return elementOrSystem;
        }
    })
}