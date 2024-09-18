/*
    LinkedIn Profile URL Validator.
    -> As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
    formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
    www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
    end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
    -> The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
    that do not follow this format or contain invalid characters. The program should provide clear output messages
    indicating whether each input is a valid LinkedIn profile URL or
*/

// Function to validate LinkedIn profile URL using regex
function validateLinkedInURL(url) {
    // Regular expression to match valid LinkedIn profile URLs
    const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;

    // Test if the input URL matches the regex
    if (linkedinRegex.test(url)) {
        console.log("Valid LinkedIn profile URL.");
    } else {
        console.log("Invalid LinkedIn profile URL.");
    }
}

// Example inputs to test the function
let testURL1 = "https://www.linkedin.com/in/johndoe123";  // Valid
let testURL2 = "https://www.linkedin.com/in/jane_doe-xyz"; // Valid
let testURL3 = "https://www.linkedin.com/in/abc";          // Invalid (too short)
let testURL4 = "https://www.linkedin.com/in/john-doe_12345678901234567890123"; // Invalid (too long)
let testURL5 = "https://linkedin.com/in/johndoe";          // Invalid (missing 'www.')
let testURL6 = "https://www.linkedin.com/in/john@doe";     // Invalid (contains invalid character '@')

validateLinkedInURL(testURL1); // Output: Valid LinkedIn profile URL.
validateLinkedInURL(testURL2); // Output: Valid LinkedIn profile URL.
validateLinkedInURL(testURL3); // Output: Invalid LinkedIn profile URL.
validateLinkedInURL(testURL4); // Output: Invalid LinkedIn profile URL.
validateLinkedInURL(testURL5); // Output: Invalid LinkedIn profile URL.
validateLinkedInURL(testURL6); // Output: Invalid LinkedIn profile URL.
