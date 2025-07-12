
function searchParty(name, world) {
  for (let place in world) {
    if (typeof world[place] === 'string') {
      let person = world[place];
      if (person === name) {
        return [place];
      }
    }
    else if (Array.isArray(world[place])) {
      let people = world[place];
      if (people.includes(name)) {
        return [place];
      }
    }
    else {
      let nextObject = world[place];
      let resultFromNextObject = searchParty(name, nextObject);
      if (resultFromNextObject) {
        return [place].concat(resultFromNextObject);
      }
    }
  }
  return null;
}