const countToTen = (num) =>{
    if(num === 10){
       console.log(num);
    }
    else{
        console.log(num);
        countToTen(num + 1);
    }
}

