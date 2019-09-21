function stat(strg) {
  if (strg === "") return "";

  let convertHourToSeconds = num => {
    return num * 60 * 60;
  };
  let converMinutetToSeconds = num => {
    return num * 60;
  };
  let convertSecondsToHour = num => {
    return num / 60 / 60;
  };
  let reduceHoursFromSeconds = (num, hours) => {
    return num - hours * 60 * 60;
  };
  let convertSecondsToMinute = num => {
    return num / 60;
  };
  let reduceMinsFromSeconds = (num, mins) => {
    return num - mins * 60;
  };
  let add = (a, b) => {
    return a + b;
  };
  let convertSecsToTime = secs => {
    let hours = parseInt(convertSecondsToHour(secs));
    secs = reduceHoursFromSeconds(secs, hours);
    let mins = parseInt(convertSecondsToMinute(secs));
    secs = reduceMinsFromSeconds(secs, mins);
    secs = parseInt(secs);
    return `${String(hours).padStart(2, "0")}|${String(mins).padStart(
      2,
      "0"
    )}|${String(secs).padStart(2, "0")}`;
  };

  // Convert the stats to an array
  let teamStatsInSecs = [];
  teamStats = strg.split(",");
  teamStats.map(function(stats) {
    let stat = stats.split("|");
    let hour = stat[0];
    let min = stat[1];
    let sec = stat[2];
    totalTimeInSecs =
      parseInt(sec) +
      converMinutetToSeconds(parseInt(min)) +
      convertHourToSeconds(parseInt(hour));
    teamStatsInSecs.push(totalTimeInSecs);
  });
  // Sort the team stats in numerical order
  teamStatsInSecs = teamStatsInSecs.sort(function(a, b) {
    return a - b;
  });
  console.log(teamStatsInSecs);

  // Calculate Range
  let range = teamStatsInSecs[teamStatsInSecs.length - 1] - teamStatsInSecs[0];
  let rangeTime = convertSecsToTime(range);

  // Calculate Average
  let average = teamStatsInSecs.reduce(add, 0) / teamStatsInSecs.length;
  let averageTime = convertSecsToTime(average);

  // Calculate Median
  let medianIndex = teamStatsInSecs.length / 2;
  let median = 0;
  if (Number.isInteger(medianIndex)) {
    median =
      (teamStatsInSecs[medianIndex] + teamStatsInSecs[medianIndex - 1]) / 2;
  } else {
    median = teamStatsInSecs[parseInt(medianIndex)];
  }
  let medianTime = convertSecsToTime(median);

  // Return result in format specified
  return `Range: ${rangeTime} Average: ${averageTime} Median: ${medianTime}`;
}

console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"));
// "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
console.log(
  stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41")
);
// "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00")

//{ '0': '02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17' }
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17"));
//Expected: 'Range: 00|31|17 Average: 02|27|10 Median: 02|24|57'

console.log(stat(""));
