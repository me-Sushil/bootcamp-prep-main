function dogBreeder(name, age) {
  if (age === undefined) {
    if (typeof name === "number") {
      age = name;
      name = null;
    } else {
      age = 0;
    }
  }
  if (!name) {
    name = "Steve";
  }

  let newdog = {
    name: name,
    age: age,
  };

  return newdog;
}
dogBreeder("Sam", 12); // => {name: 'Sam', age: 12}

dogBreeder(15); // => {name:'Steve', age: 15}
