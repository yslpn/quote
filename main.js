'use strict';

const quote = document.getElementsByTagName('blockquote');
const author = document.getElementsByTagName('h2');
const button = document.getElementsByTagName('button');
const warning = document.getElementsByTagName('p');

const quoteJSON = (() => {
    return fetch('./quotes.json')
        .then(x => x.json());
})();

const changeQuote = () => {
    quoteJSON.then((data) => {
        const getRandomInt = ((min, max) => Math.floor(Math.random() * (max - min + 1) + min))(0, data.length);
        quote[0].textContent = data[getRandomInt].quoteText;
        author[0].textContent = data[getRandomInt].quoteAuthor;
        indexAuthorList = 0;
        warning[0].textContent = '';
    })
};
changeQuote();

button[0].addEventListener('click', () => changeQuote());

let indexAuthorList = 0;

author[0].addEventListener('click', () => {
    quoteJSON.then((data) => {
        for (let z = indexAuthorList; z < data.length; z++) {
            if (data[z].quoteAuthor === author[0].textContent && data[z].quoteText !== quote[0].textContent) {
                quote[0].textContent = data[z].quoteText;
                author[0].textContent = data[z].quoteAuthor;
                indexAuthorList = z;
                break;
            } else if (z === data.length - 1) {
                warning[0].textContent = '*There are no more quotes from this author.';
            }
        }
    })
});