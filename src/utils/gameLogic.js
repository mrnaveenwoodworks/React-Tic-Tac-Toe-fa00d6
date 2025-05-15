// Win condition checks and game state utilities
export const checkWinner = (squares) => {
  const lines = [
    [0, 1, 2], // Horizontal lines
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Vertical lines
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonal lines
    [2, 4, 6]
  ];

  // Check all possible winning combinations
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: lines[i]
      };
    }
  }
  return null;
};

// Check if the game is a draw
export const isDraw = (squares) => {
  return squares.every(square => square !== null);
};

// Get current game status message
export const getGameStatus = (squares, xIsNext) => {
  const winResult = checkWinner(squares);
  
  if (winResult) {
    return `Winner: ${winResult.winner}`;
  }
  
  if (isDraw(squares)) {
    return "Game ended in a draw!";
  }
  
  return `Next player: ${xIsNext ? "X" : "O"}`;
};

// Check if game is over (either win or draw)
export const isGameOver = (squares) => {
  return checkWinner(squares) || isDraw(squares);
};

// Get available moves (empty squares)
export const getAvailableMoves = (squares) => {
  return squares
    .map((square, index) => square === null ? index : null)
    .filter(index => index !== null);
};

// Check if a move is valid
export const isValidMove = (squares, index) => {
  return squares[index] === null && !isGameOver(squares);
};