let animalNoises = [
  { 'dog': {
    'America' : 'Woof! Woof!',
    'Germany' : 'Wau Wau!',
    'England' : 'Bow wow!',
    'Uruguay' : 'Jua jua!',
    'Afrikaans' : 'Blaf!',
    'Korea' : 'Mong mong!',
    'Iceland' : 'Voff voff!',
    'Albania' : 'Ham!',
    'Algeria' : 'Ouaf ouaf!'
    }
  },
  { 'cat': {
    'America' : 'Meow',
    'Germany' : 'Miauw!',
    'England' : 'mew mew',
    'Uruguay' : 'Miau Miau!',
    'Afrikaans' : 'Purr',
    'Korea' : 'Nyaong!',
    'Iceland' : 'Kurnau!',
    'Albania' : 'Miau',
    'Algeria' : 'Miaou!'
    }
  },
  { 'chicken': {
    'America' : 'Cluck cluck',
    'Germany' : 'tock tock tock',
    'England' : 'Cluck Cluck',
    'Uruguay' : 'gut gut gdak',
    'Afrikaans' : 'kukeleku',
    'Korea' : 'ko-ko-ko',
    'Iceland' : 'Chuck-chuck!',
    'Albania' : 'Kotkot',
    'Algeria' : 'Cotcotcodet'
    }
  }
];

// YOUR CODE BELOW
const petSounds=(animal, country)=>{
  for (let i = 0; i < animalNoises.length; i++) {

    let animalObject = animalNoises[i];

    if (animal in animalObject) {

      let countrySounds = animalObject[animal];

      let sound = countrySounds[country];

      animal = animal[0].toUpperCase() + animal.slice(1) + 's';
      return animal + ' in ' + country + ' say ' + sound;
    }
  }
}