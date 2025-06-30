// YOUR CODE BELOW
function cloneMachine (animalObj){
    const clonedName = `${animalObj.name}Clone`;

    let clonedAnimal = {
        name:clonedName,
        species: animalObj.species,
        offspring: [],
    }
    animalObj.offspring.push(clonedName);

    return clonedAnimal;
}