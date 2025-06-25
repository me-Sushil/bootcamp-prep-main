let me2 = {
    name : "Tarana",
    getGreeting: function(anObj){
        return "Hi " + anObj.name + ", my name is " + this.name + ".";
    }
}
// let you = {
//     name:"Sushil",
//     }
// console.log(me2.name); // 'Tarana'
// console.log(you.name); // 'Sushil'
// console.log(me2.getGreeting(you)); // => 'Hi Sushil, my name is Tarana.'