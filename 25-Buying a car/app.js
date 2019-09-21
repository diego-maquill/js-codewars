/*
A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore the percent of loss increases by a fixed 0.5 percent at the end of every two months.

Can you help him? Our man finds it difficult to make all these calculations.

How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?
*/

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  if (startPriceOld > startPriceNew) return [0,startPriceOld-startPriceNew]; // If no need to save

  let month = 1;
  let monthlyLoss = percentLossByMonth / 100;
  let monthlySavings = savingperMonth;
  let oldCarValue = startPriceOld - (startPriceOld * monthlyLoss);
  let newCarValue = startPriceNew - (startPriceNew * monthlyLoss);
  let totalSavings = oldCarValue + monthlySavings;
  let totalRemaining = newCarValue - totalSavings;
  
  while(totalRemaining>0) {
    month++;
    if(month%2==0) monthlyLoss += 0.005; // At end of every 2nd month, increase lost by 0.5%
    monthlySavings += savingperMonth; // Earn money every month
    oldCarValue = oldCarValue - (oldCarValue * monthlyLoss); // Reduce value of old car every month
    newCarValue = newCarValue - (newCarValue * monthlyLoss); // Reduce value of old car every month
    totalSavings = oldCarValue + monthlySavings;
    totalRemaining = newCarValue - totalSavings;
  }
  
  // Return number of months saved and rounded absolute value of excess money
  return [month, Math.round(Math.abs(totalRemaining))];
}

console.log( nbMonths(2000, 8000, 1000, 1.5) );// should return [6, 766] or (6, 766)
console.log( nbMonths(12000, 8000, 1000, 1.5) ); // [0, 4000]
console.log( nbMonths( 8000, 12000, 500, 1 ) ); //[8, 597]