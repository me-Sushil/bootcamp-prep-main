// YOUR CODE BELOW
const removeColumns =(originalGrid, numColums)=>{
    const removeGrid =[];

    for(let i=0; i<originalGrid.length; i++){
        const currentRow = originalGrid[i];
        removeGrid.push(currentRow.slice(0, currentRow.length - numColums));
    }
 return removeGrid;
}