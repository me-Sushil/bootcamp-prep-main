function deeperCopy(originalArray){
    let copy = [];
    for(let i=0; i<originalArray.length; ++i){
        let element = originalArray[i];

        
        if(Array.isArray(element)){

            let innerArr = [];

            for(let i=0; i<element.length; i++){
                let elm = element[i];
                innerArr.push(elm);
            }
             copy.push(innerArr);
        }else{
            copy.push(element);

    }
       
    }
    return copy;
}