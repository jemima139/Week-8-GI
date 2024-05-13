//Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared evenly. The function should return an interpolated string like Each person gets 4.00 slices of pizza; from our 8-slice pizza x being a decimal in case there is no way to split the pizza evenly.

function sharePizza(totalSlices, numberOfPeople) {
    // Calculates the number of slices each person would get
    const slicesPerPerson = totalSlices / numberOfPeople;
    
    // Returns the interpolated string
    return `Each person gets ${slicesPerPerson.toFixed(2)} slices of pizza; from our ${totalSlices}-slice pizza`;
}


console.log(sharePizza(8, 2));  //Output: Each person gets 4.00 slices of pizza; from our 8-slice pizza
console.log(sharePizza(8, 3));  //Output: Each person gets 2.67 slices of pizza; from our 8-slice pizza
console.log(sharePizza(21, 20)); //Output: Each person gets 1.05 slices of pizza; from our 21-slice pizza
console.log(sharePizza(10, 3)); //Output: Each person gets 3.33 slices of pizza; from our 10-slice pizza


