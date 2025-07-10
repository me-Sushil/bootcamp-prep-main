// YOUR CODE BELOW
const getDogBreeder = (defaultname, defaultage)=>{
    return (name = defaultname, age=defaultage)=>{
    if(typeof name === 'number'){
        age = name;
        name = defaultname;
    }
    let newDog={
        name : name,
        age : age,
    }
    return newDog;
}   
}