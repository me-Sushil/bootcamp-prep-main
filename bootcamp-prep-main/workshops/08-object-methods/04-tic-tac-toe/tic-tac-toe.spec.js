describe('ticTacToe', () => {
  // save a stringified copy of your ticTacToe board
  let boardCopy = JSON.stringify(ticTacToe.board);

  // before each test, reset the board with it's initial values
  beforeEach(() => {
    ticTacToe.board = JSON.parse(boardCopy);
  })

  it('is an object', () => {
    expect(typeof ticTacToe).toEqual('object');
  });

  describe('board', () => {
    it('is a propery of ticTacToe', () => {
      expect('board' in ticTacToe).toEqual(true);
    });

    it('is an array', () => {
      expect(Array.isArray(ticTacToe.board)).toEqual(true);
    });

    it('is has three rows', () => {
      expect(ticTacToe.board.length).toEqual(3);
    });

    it('each row is initially an array of three null values', () => {
      for (let i = 0; i < 3; i++) {
        let row = ticTacToe.board[i];
        expect(row).toEqual([null, null, null]);
      }
    });
  });

  describe('move', () => {
    it('is a method of ticTacToe', () => {
      expect('move' in ticTacToe).toEqual(true);
    });

    it('is a function', () => {
      expect(typeof ticTacToe.move).toEqual('function');
    });

    it('returns the board', () => {
      let returnedValue = ticTacToe.move('x', 0, 0);
      expect(returnedValue).toEqual(ticTacToe.board);
    });

    it('adds the given character to the row and column number', () => {
      ticTacToe.move('x', 1, 1);
      expect(ticTacToe.board[1][1]).toEqual('x')
    });

    it('does not let a player overwrite a cell that has already been used', () => {
      ticTacToe.move('x', 1, 1);
      ticTacToe.move('y', 1, 1);

      expect(ticTacToe.board[1][1]).toEqual('x')
    });

  });

  describe('clear', () => {
    it('is a method of ticTacToe', () => {
      expect('clear' in ticTacToe).toEqual(true);
    });

    it('is a function', () => {
      expect(typeof ticTacToe.clear).toEqual('function');
    });

    it('returns the board', () => {
      let returnedValue = ticTacToe.clear();
      expect(returnedValue).toEqual(ticTacToe.board);
    });

    it('resets the board to its original value', () => {
      ticTacToe.move('x', 0, 0);
      ticTacToe.move('x', 1, 1);
      ticTacToe.move('x', 2, 2);
      ticTacToe.clear()
      expect(ticTacToe.board[0][0]).toEqual(null)
      expect(ticTacToe.board[1][1]).toEqual(null)
      expect(ticTacToe.board[2][2]).toEqual(null)
    });

  });

});
