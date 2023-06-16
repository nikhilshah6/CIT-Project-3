const validDenomination = coin => [1, 5, 10, 25, 50, 100].indexOf(coin) !== -1;

//function valueFromCoinObject(obj) {
    // Step 1: Use object deconstruction to create constant variables denom and count
   // const { denom = 0, count = 0 } = obj;
  
    // Step 2: Calculate the value
   // const value = denom * count;
  
    // Step 3: Return the calculated value
    //return value;
 // }
 function getValueFromDenomAndCount(denom, count) {
    return denom * count;
  }
  
  function valueFromCoinObject(obj) {
    // Get denom and count from the object
    const { denom = 0, count = 0 } = obj;
  
    // Calculate the value using the extracted function
    const value = getValueFromDenomAndCount(denom, count);
  
    return value;
  }
  
  function valueFromArray(arr) {
    return arr.reduce((accumulator, currentCoin) => {
      return accumulator + valueFromCoinObject(currentCoin);
    }, 0);
  }
  
  function coinCount(...coinage) {
    return valueFromArray(coinage);
  }
  
    
  //function valueFromCoinObject(coin) {
    // Implement the logic to get the value of the coin
 // }
  
function getTotalValue(denom, count) {
    return denom * count;
}

function valueFromCoinObject(obj) {
    const { denom = 0, count = 0 } = obj;
    const value = getTotalValue(denom, count);
    return value;
}


function valueFromArray(arr) {
    const values = arr.map(valueFromCoinObject);
    const totalValue = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return totalValue;
}


function coinCount(...coinage) {
    return valueFromArray(coinage);
}


console.log("{}", coinCount({ denom: 5, count: 3 }));
console.log("{}s", coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 }));
const coins = [{ denom: 25, count: 2 }, { denom: 1, count: 7 }];
console.log("...[{}]", coinCount(...coins));
console.log("[{}]", coinCount(coins));
