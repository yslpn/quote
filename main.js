'use strict';

const el = document.getElementsByTagName('blockquote');
const a = document.getElementsByTagName('p');
const b = document.getElementsByTagName('button');
const quoteJSON = (() => {
    return fetch('./quotes.json')
        .then(x => x.json());
})();

let index = 0;
b[0].addEventListener('click', () => {
    quoteJSON.then((data) => {
        el[0].textContent = data[index].quoteText;
        a[0].textContent = data[index].quoteAuthor;
    })
    index += 1;
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