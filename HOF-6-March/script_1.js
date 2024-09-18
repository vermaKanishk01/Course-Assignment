/*
    Reverse String.
    -> The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
    of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
    2 seconds before reversing the string. The reversed string should then be printed as output.
*/

const input = "hello"

function reverseString(input){
    return input.split("").reverse().join("");
}

setTimeout(() => {
    const reverseInput = reverseString(input);
    console.log("Input after reverse : ", reverseInput);
}, 2000);

console.log("Original Input : ", input);
