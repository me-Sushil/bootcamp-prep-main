
function makeGrid(numColumns, numRows) {
    let grid = [];
      for (let i = 0; i < numRows; i++) {
        let row = [];
      for (let j = 0; j < numColumns; j++) {
        row.push(j + 1);
      }
        grid.push(row);
    }
      return grid;
  }