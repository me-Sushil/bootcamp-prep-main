// YOUR CODE BELOW
function zooInventory(zoo){
    let sentences = [];

    for(let i=0; i<zoo.length; i++){
        let animal = zoo[i];

        let name = animal[0];
        let specis = animal[1][0];
        let age = animal[1][1]

       let sentencess = `${name} the ${specis} is ${age}.`;
       sentences.push(sentencess);
    }
    return sentences;

}
const sentences = zooInventory( [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
  ]);
  console.log(sentences);