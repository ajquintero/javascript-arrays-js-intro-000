var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars, "newElement"){
  chocolateBars = ["reeses", ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(array, "newElement"){
  ["reeses", ...chocolateBars];
  return chocolateBars;
}
