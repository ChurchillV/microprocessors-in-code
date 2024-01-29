// This function will convert a given binary input into decimal format
// The input should be of type string  for easy iteration
const binaryToDecimal = (input) => {

    // We initilize our output to 0 
    let decimalOutput = 0;
    
    // We do same for the placevalue, which serves as the power of 2 in the conversion
    // These are the numbers you place on top of each digit when performing the conversion
    let placeValue = 0;                     

    // Provided our input has a decimal point, we set the higest placevalue to the index of the decimal point - 1
    // Eg. for 110.11, the placevalue will be 2 (3 - 1), which is the highest power of 2 we will encounter
    if(input.includes('.')) {                                             
        placeValue = input.indexOf('.') - 1;
    } else {

    // Otherwise we set the placevalue to the length of the input - 1
    // Eg. for 11110, the place value will be 4 (5 - 1)
        placeValue = input.length - 1;
    }

    // Now we perform the summation of digit * (2 ^ placevalue)
    // Where we decrement placevalue after each addition
    // Eg. 110 -> [1 * (2 ^ 2)] + [1 * (2 ^ 1)] + [0 * (2 ^ 0)] = 6 [since placevalue is 2(3 - 1)]
    for(let i = 0; i < input.length; i++) {
        if(input[i] != '.') {
            decimalOutput += parseInt(input[i]) * Math.pow(2, placeValue);
            placeValue--;
        }
    }
    
    return decimalOutput;
}

console.log(binaryToDecimal('1001110001000.1100'));