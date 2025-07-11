const reverseArray =(array)=>{
    if(array.length === 1){
        return array;
    }
    let lastArry = array[array.length -1];
    return [lastArry].concat(reverseArray(array.slice(0, -1)));
}