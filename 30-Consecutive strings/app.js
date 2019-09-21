function longestConsec(strarr, k) {
  if (strarr.length === 0 || k < 1 || k > strarr.length) {
    return "";
  }
  let result = "";
  let longestLength = 0;
  let longest = "";

  // For every word in the array..
  for (let i = 0; i < strarr.length; i++) {
    result = "";

    // Combine words from 0 to k-1
    for (j = i; j < i + k; j++) {
      if (strarr[j] !== undefined) result += strarr[j];
    }

    // Check if the combined word is greater than the longest recorded
    // If result beats longest, copy result to longest
    if (result.length > longestLength) {
      longest = result;
      longestLength = result.length;
    }
  }

  return longest;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
); //, "abigailtheta")
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh"
    ],
    1
  )
); //, "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec([], 3)); //, "")
console.log(
  longestConsec(
    [
      "itvayloxrp",
      "wkppqsztdkmvcuwvereiupccauycnjutlv",
      "vweqilsfytihvrzlaodfixoyxvyuyvgpck"
    ],
    2
  )
); //, "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
); //, "wlwsasphmxxowiaxujylentrklctozmymu")
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
); //, "")
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)); //, "ixoyx3452zzzzzzzzzzzz")
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)
); //, "")
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)); //, "")
