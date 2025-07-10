// function billerBuilder(nameOfState){

//     return function(priceOfItem){
//         if(nameOfState === 'NY'){
//           return  priceOfItem * 1.03 * 1.04;
//         }
//         if(nameOfState === "NJ"){
//           return priceOfItem * 1.05 * 1.06625;
//         }
//     }

// }


function billerBuilder(state){

    if(state === "NY"){
        return applyNYTexes;
    }
    return applyNJTexes;

    function applyNYTexes(price){
        return price * 1.03 * 1.04;
    }

    function applyNJTexes(price){
        return price * 1.05 * 1.06625;
    }
}