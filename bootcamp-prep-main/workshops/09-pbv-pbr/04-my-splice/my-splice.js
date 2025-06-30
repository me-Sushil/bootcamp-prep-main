// YOUR CODE BELOW
function mySplice(arr, startIndex, deleteCount, additem){
    let keepElement = [];
    let removeElement = [];
    for(let i=0; i < startIndex; ++i){
        let element = arr[i];
        keepElement.push(element);
    }

    if(additem !== undefined){
        keepElement.push(additem);
    }

    for(let i=startIndex; i < startIndex + deleteCount; ++i){
        let element = arr[i];
        removeElement.push(element);
    }

    

    for(let i= startIndex+deleteCount; i<arr.length; ++i){
        let element = arr[i];
        keepElement.push(element);
    }

     // remove all elements from the original array
     while (arr.length) {
      arr.pop();
     }

     for(let i=0; i<keepElement.length; ++i){
        let element = keepElement[i];
        arr.push(element);
     }

    return removeElement;
 }