// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name) {
  const myArray = name.split(" ");
  let abbrev = myArray[0].charAt(0) + "." + myArray[1].charAt(0);
  return abbrev.toUpperCase();
}

// function abbrevName(name) {
//   var nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }
