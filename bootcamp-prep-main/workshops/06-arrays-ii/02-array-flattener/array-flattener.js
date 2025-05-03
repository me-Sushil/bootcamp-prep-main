// YOUR CODE BELOW
function arrayFlattener(tDArray) {
    let twoDArray= [];

    for(let i=0; i<tDArray.length; i++){
        let element = tDArray[i];

        if(Array.isArray(element)){
            for(let j=0; j<element.length; j++){
                let innerElement = element[j];

                twoDArray.push(innerElement);
            }
        }else{
            twoDArray.push(element);
        }
    }

    return twoDArray;
}

const twoDArray = arrayFlattener([1,2,[3,4],5]);
console.log(twoDArray);