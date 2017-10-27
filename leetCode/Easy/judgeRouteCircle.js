// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.
//
// The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

// Example 1:
// Input: "UD"
// Output: true

// Example 2:
// Input: "LL"
// Output: false

const judgeCircle = (moves) => {
  let pos = 0.0;

  let moveCount = {
    'L': 0.5,
    'R': -0.5,
    'U': 1,
    'D': -1
  };

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];
    pos += moveCount[move];
  }

  return pos === 0.0;
};
