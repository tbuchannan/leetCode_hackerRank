// Reverse String

// Write a function that takes a string as input and returns the string reversed.
//
// Example:
// Given s = "hello", return "olleh".

const reverseString = (str) => {
    let result = '';

    for(let i = str.length - 1; i >=0; i--){
        result += str[i];
    }

    return result;
};
