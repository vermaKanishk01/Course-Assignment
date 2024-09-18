/*
    Filtering and Capitalizing: Books Published After 2010 with Author Names.
    -> Write a program that takes a list of books, including their authors and publication years as input. The program
    should then filter out all books that were published before 2010 and create a new array with the remaining
    books, but with their author names capitalized.
*/

// books data
let books = [
    {
        title: "Book1",
        author: "Harper Lee",
        year: 2020
    },
    {
        title: "Book2",
        author: "sam",
        year: 2015
    },
    {
        title: "Book3",
        author: "F. Scott Fitzgerald",
        year: 2005
    },
    {
        title: "Book4",
        author: "Jane Austen",
        year: 2019
    },
    {
        title: "Book5",
        author: "J.D. Salinger",
        year: 2010
    }
];

// filtering the books that published before 2010 or in 2010
const bookBefore_2010 = books.filter((book) => book.year <= 2010);
console.log(bookBefore_2010);

// filtering the books that published after 2010
const remainingBooks = books.filter((book) => book.year > 2010);
console.log(remainingBooks)