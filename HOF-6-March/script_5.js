/*
    URL validation.
    -> Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
    followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
    Print a message indicating if the input matches the conditions or not.
*/

function validateURL(url) {
    // Regular expression to match valid URLs
    const urlRegex = /^(https?:\/\/)[\w\-._~:\/?#[\]@!$&'()*+,;=]+(\.[a-zA-Z]+)+$/;

    // Test if the input URL matches the regex
    if (urlRegex.test(url)) {
        console.log("Valid URL.");
    } else {
        console.log("Invalid URL.");
    }
}

// Example inputs to test the function
let testURL1 = "https://www.example.com";
let testURL2 = "http://example";
let testURL3 = "ftp://invalid-url";
let testURL4 = "https://example.com/path";

validateURL(testURL1); // Output: Valid URL.
validateURL(testURL2); // Output: Invalid URL.
validateURL(testURL3); // Output: Invalid URL.
validateURL(testURL4); // Output: Invalid URL.
