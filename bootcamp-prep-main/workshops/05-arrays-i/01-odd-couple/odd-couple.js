// let names = ["Sushil", "Sushma", "Arjun", "Sagar"];
// console.log(names);
// console.log(Array.isArray(names));

// let names = ["Sushil", "Sushma", "GS", "Sworag"];
// console.log(names [0]);
// names [0] ="Sagar";
// console.log(names);
// console.log(names.length);
// console.log(names[names.length - 1]);

// //////////////////////
// let Addname = names.push("Arjun");
// console.log(names);

// ///////////////////////////
// let latestAdd = names.pop();
// console.log(names);

// ////////////////////
// let firstELRemove = names.shift();
// console.log("shift name",names);

// ////////////////////
// names.unshift("Samir");
// console.log("unshift name", names);

// //////////////////
// console.log(names.indexOf("GS"));


/////////////////
// let person = "Samir";
// if(names.indexOf(person)> -1){
//     console.log("Person Found");
// }else{
//     console.log("Person Not Found");
// }

// /////////////////
// console.log(names);
// console.log(names.slice(0,1));
// console.log(names.slice(0,2));
// console.log(names.slice(1,2));
// console.log(names.slice(1));
// console.log(names);

// let namesCopy = names.slice();
// namesCopy[0]="Aryan";
// console.log(names);
// console.log(namesCopy);



// include method - check if a value is in array 
// console.log(names.includes("GS"));
// console.log(names.includes("devid"));


// reverse method

// console.log(names);
// names.reverse();
// console.log(names);
// console.log(names[0]);





function oddCouple(nums) {

    let oddNums = [];
      for (let i = 0 ; i < nums.length; i++) {
       let currentNum = nums[i];
  
      if (currentNum % 2) {
          oddNums.push(currentNum);
  
        if (oddNums.length === 2) {
  
          return oddNums;
        }
      }
    }
  
    return oddNums;
  }