// YOUR CODE BELOW
// Write a function maxOfThree that accepts three number arguments.
// maxOfThree should return largest number of the three.
// maxOfThree(5, 4, 10); // => 10
// maxOfThree(7, 7, 4); // => 7

const maxOfThree =(a,b,c)=>{
    if(a>b && a>c){
    return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
    }
    
    console.log(maxOfThree(23,5,7));
    console.log(maxOfThree(3,15,7));