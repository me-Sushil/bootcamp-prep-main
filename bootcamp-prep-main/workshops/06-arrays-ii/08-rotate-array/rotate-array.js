// YOUR CODE BELOW
const rotateArray = ( originalArray, rotateNum ) =>{
    const direction = rotateNum >= 0 ? 'right' : 'left';

    const rotatedArray = originalArray.slice();

    for ( let i=0; i< Math.abs(rotateNum) % originalArray.length; i++){
        if(direction === 'right'){
            rotatedArray.unshift(rotatedArray.pop());
        }else{
            rotatedArray.push(rotatedArray.shift());
        }
    }
    return rotatedArray;
}