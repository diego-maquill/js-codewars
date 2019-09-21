function presses(phrase) {
  const keypresses = {
    key0: Array.from(" 0"),
    key1: Array.from("1"),
    key2: Array.from("ABC2"),
    key3: Array.from("DEF3"),
    key4: Array.from("GHI4"),
    key5: Array.from("JKL5"),
    key6: Array.from("MNO6"),
    key7: Array.from("PQRS7"),
    key8: Array.from("TUV8"),
    key9: Array.from("WXYZ9")
  };
  // console.log(keypresses['key2']);
  let pressCount = 0;

  // Scan the phrase by splitting it into an array
  phrase.split("").map(function(char) {
    char = char.toUpperCase();
    for (i = 0; i <= 9; i++) {
      // Determine number Keypresses (+1 to offset index 0)
      let keyPress = keypresses[`key${i}`].indexOf(char) + 1;
      // If keypress is found add the keypress to press count
      if (keyPress !== 0) {
        pressCount += keyPress;
      }
    }
  });
  return pressCount;
}

console.log(presses("A"));
console.log(presses("LOL")); // 9, "should work for simple examples")
console.log(presses("HOW R U")); // 13, "should work for phrases with spaces")
