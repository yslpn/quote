'use strict';

const el = document.getElementsByTagName('blockquote');
const b = document.querySelectorAll('button');
let i = 0;

b[0].addEventListener('click', function change() {
    fetch('https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json')
        .then( x => x.json())
        .then( ( data ) => el[0].textContent = '"' + data[i].quoteText + '"'+ ' - ' + data[i].quoteAuthor)
    i++;
});