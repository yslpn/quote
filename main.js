'use strict';

const el = document.getElementsByTagName('blockquote'); // Quote
const a = document.getElementsByTagName('p');       // Author
const b = document.getElementsByTagName('button');    // Button

let i = 0;

b[0].addEventListener('click', function changeQ() {
    fetch('https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json')
        .then(x => x.json())
        .then(function (data) {
            el[0].textContent = data[i].quoteText;
            if (data[i].quoteAuthor) {
                a[0].textContent = data[i].quoteAuthor;
            } else {
                a[0].textContent = '';
            }
        })
    i++;
});

a[0].addEventListener('click', function changeA() {
    fetch('https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json')
        .then(x => x.json())
        .then(function (data) {
            for (let z = i + 1; z < data.length; z++) {
                if (data[z].quoteAuthor === a[0].textContent) {
                    a[0].textContent = data[z].quoteAuthor;
                    el[0].textContent = data[z].quoteText;
                    break;
                }
            }
        })
});