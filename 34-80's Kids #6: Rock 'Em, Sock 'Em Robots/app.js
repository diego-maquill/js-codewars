function fight(robot1, robot2, tactics) {
  let gameOver = (player1, player2) => {
    // Check if either one of the players have zero health
    if (player1["health"] <= 0 || player2["health"] <= 0) return true;
    else if (player1["tactics"].length === 0 && player2["tactics"].length === 0)
      // Check if either player's tactics are empty
      return true;
    else return false;
  };

  let attackFrom = (attacker, target) => {
    // If player has tactics left
    if (attacker["tactics"].length > 0) {
      // Determine the value of the next tactic
      let attackPoint = tactics[attacker["tactics"][0]];
      // Reduce health of opponent by value of attackPoint
      if (attackPoint > 0) {
        target["health"] -= attackPoint;
      }
      // Remove used tactic
      attacker["tactics"].shift();
    }
  };

  // Check which player has greater health left. Otherwise, it's a draw.
  let checkWinner = (player1, player2) => {
    if (player1["health"] > player2["health"]) return `${player1["name"]} has won the fight.`;
    else if (player2["health"] > player1["health"]) return `${player2["name"]} has won the fight.`;
    else return "The fight was a draw.";
  };

  // If robot 1 is faster than robot 2
  if (robot1["speed"] >= robot2["speed"]) {
    // Robot 1 attacks first
    while (!gameOver(robot1, robot2)) {
      attackFrom(robot1, robot2); // Robot 1 attacks
      if (gameOver(robot1, robot2)) {
        break;
      } // Check if game over
      attackFrom(robot2, robot1); // Robot 2 attacks
    }
  } else {
    // Otherwise, robot 2 is faster than robot 1
    // Robot 2 attacks first
    while (!gameOver(robot1, robot2)) {
      attackFrom(robot2, robot1); // Robot 2 attacks
      if (gameOver(robot1, robot2)) {
        break;
      } // Check if game over
      attackFrom(robot1, robot2); // Robot 1 attacks
    }
  }
  // console.log(robot1);
  // console.log(robot2);

  // check result
  return checkWinner(robot1, robot2);
}

// Example 1
// robot1 = {
//   "name": "Rocky",
//   "health": 100,
//   "speed": 20,
//   "tactics": ["punch", "punch", "laser", "missile"]
// }
// robot2 = {
//   "name": "Missile Bob",
//   "health": 100,
//   "speed": 21,
//   "tactics": ["missile", "missile", "missile", "missile"]
// }
// tactics = {
//   "punch": 20,
//   "laser": 30,
//   "missile": 35
// }

// console.log( fight(robot1, robot2, tactics) );// -> "Missile Bob has won the fight."

// robot1 = {
//   name: "Rocky",
//   health: 793,
//   speed: 19,
//   tactics: [
//     "punch",
//     "punch",
//     "laser",
//     "missile",
//     "punch",
//     "laser",
//     "missile",
//     "punch",
//     "laser",
//     "missile",
//     "punch",
//     "laser",
//     "missile"
//   ]
// };
// robot2 = {
//   name: "Missile Bob",
//   health: 782,
//   speed: 1,
//   tactics: [
//     "punch",
//     "punch",
//     "laser",
//     "missile",
//     "punch",
//     "laser",
//     "missile",
//     "punch",
//     "laser",
//     "missile",
//     "punch",
//     "laser",
//     "missile"
//   ]
// };

// tactics = { punch: 20, laser: 30, missile: 35 };

// robot1 = {
//   name: "Rocky",
//   health: 100,
//   speed: 21,
//   tactics: ["space ray"]
// };
// robot2 = {
//   name: "Missile Bob",
//   health: 100,
//   speed: 22,
//   tactics: ["space ray"]
// };
// tactics = { "space ray": 100 };

robot1 = {
  name: "Rocky",
  health: 424,
  speed: 27,
  tactics: [
    "punch",
    "punch",
    "laser",
    "missile",
    "punch",
    "laser",
    "missile",
    "punch",
    "laser",
    "missile",
    "punch",
    "laser",
    "missile"
  ]
};
robot2 = {
  name: "Missile Bob",
  health: 723,
  speed: 24,
  tactics: [
    "punch",
    "punch",
    "laser",
    "missile",
    "punch",
    "laser",
    "missile",
    "punch",
    "laser",
    "missile",
    "punch",
    "laser",
    "missile"
  ]
};
tactics = { punch: 20, laser: 30, missile: 35 };

console.log(fight(robot1, robot2, tactics));
