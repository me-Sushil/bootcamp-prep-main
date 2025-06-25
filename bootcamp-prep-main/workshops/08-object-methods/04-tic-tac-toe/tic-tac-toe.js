// YOUR CODE BELOW
let ticTacToe = {
    board : [[null, null, null],
             [null, null, null],
             [null, null, null]],
    move : function (character, x, y){
        if(this.board[y][x] === null){
            this.board[y][x] = character;
        }
        console.log(this.board);
        return this.board;
    },
    clear : function (){
        this.board = [[null, null, null],
             [null, null, null],
             [null, null, null]];
    
    return this.board;
    }
};