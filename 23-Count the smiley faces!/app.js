//return the total number of smiling faces in the array
function countSmileys(arr) {
  const eyes = [':',';'];
  const nose = ['-','~'];
  const mouth = [')','D'];  
  let count = 0;

  // For each smiley
  arr.map( (smiley) => {
    // If the length is 2, check if the eyes and mouth are valid
    if (smiley.length===2 && eyes.indexOf(smiley.charAt(0))!==-1 && mouth.indexOf(smiley.charAt(1))!==-1) {
        count++;
    }
    // If the length is 3, check if the eyes, nose and mouth are valid
    else if (smiley.length===3 && eyes.indexOf(smiley.charAt(0))!==-1 && nose.indexOf(smiley.charAt(1))!==-1 && mouth.indexOf(smiley.charAt(2))!==-1) {
        count++;
    }
  });

  return count;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;