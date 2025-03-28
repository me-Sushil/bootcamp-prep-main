// YOUR CODE BELOW
function justInCamelCase(undername) {
  let camelcaseoutput = "";
    let foundunder = false;
    for(let i = 0; i<undername.length; i++) {
    if (undername[i] === "_") {
      foundunder = true;
      } else {
        if (foundunder) {
        camelcaseoutput += undername[i].toUpperCase();
      foundunder = false;
    } else {
      camelcaseoutput += undername[i];
      }
  }
  }
      return camelcaseoutput;
}
