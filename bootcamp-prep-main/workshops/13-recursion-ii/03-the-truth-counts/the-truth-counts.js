// YOUR CODE BELOW
const theTruthCounts = (anArr)=>{
    let count = 0;
    anArr.forEach((element) => {
        if(Array.isArray(element)){
            count += theTruthCounts(element);
        }else if(element){ //else if (Boolean(element) === true) {   both are same in JS 
           ++count;
        }
    });
    return count;
}