const sumAll = function(start, end) {
  let finalSum = 0;
  if (Number.isInteger(start) == false || Number.isInteger(end) == false) {
    return 'ERROR';
  } else if ((start < 0) || (end < 0)){
    return 'ERROR';
  } else if (start > end) {
    for (i = start; i >= end; i--) {
      finalSum += i;
    }
  } else if (start < end) {
    for (i = start; i <= end; i++) {
      finalSum += i;
    }
  }
  return finalSum;

}

// Do not edit below this line
module.exports = sumAll;
