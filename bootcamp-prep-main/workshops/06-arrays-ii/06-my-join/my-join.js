// YOUR CODE BELOW
const myJoin = (array, separator) => {

    if(separator === undefined){
        separator = ',';
    }

    let setString = [];

    for( let i=0; i<array.length; i++){
        let element = array[i];

        if (i !== 0) {
            setString += separator;
          }
          if (element !== undefined && element !== null) {
                  setString += element;
          }
        }
      
        return setString;
      }