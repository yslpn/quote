'use strict';

const el = document.getElementsByTagName('blockquote');
const a = document.getElementsByTagName('p');
const b = document.getElementsByTagName('button');
const quoteJSON = (() => {
    return fetch('./quotes.json')
        .then(x => x.json());
})();

b[0].addEventListener('click', () => {
    quoteJSON.then((data) => {
        let getRandomInt = ((min, max) => Math.floor(Math.random() * (max - min + 1)) + min)(0, data.length);
        el[0].textContent = data[getRandomInt].quoteText;
        a[0].textContent = data[getRandomInt].quoteAuthor;
    })
    indexAuthorList = 0;
});

let indexAuthorList = 0;
a[0].addEventListener('click', () => {
    quoteJSON.then((data) => {
        for (let z = indexAuthorList; z < data.length; z++) {
            if (data[z].quoteAuthor === a[0].textContent && data[z].quoteText !== el[0].textContent) {
                a[0].textContent = data[z].quoteAuthor;
                el[0].textContent = data[z].quoteText;
                indexAuthorList = z;
                break;
            }
        }
    })
});