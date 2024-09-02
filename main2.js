//CALCULATING  THE REMAINING AGE LEFT TO LIVE
function lifeInWeeks(age) {   
  
  // Total years to live
  const totalYears = 90;

  // Calculate remaining years
  const remainingYears = totalYears - age;

  // Calculate remaining days, weeks, and months
  const remainingDays = remainingYears * 365;
  const remainingWeeks = remainingYears * 52;
  const remainingMonths = remainingYears * 12;

  // Log the result
  console.log(`You have ${remainingDays} days, ${remainingWeeks} weeks, and ${remainingMonths} months left.`);

  
}
// Example usage:
lifeInWeeks(24);  


//THE LOVE MATCH CALCULATOR
function loveCalculator(partner1, partner2) {
 
  
  // Generate a random number between 0 and 100
  let matchPercentage = Math.floor(Math.random() * 101);

  // Output the result
  console.log(`${partner1} and ${partner2} are ${matchPercentage}% match!!`);
}

// Example usage:
loveCalculator("John", "Mary");  // Replace with any names to test
