'use strict';

let el = document.getElementById('quote');
let i = 0;

function change() {
    fetch('https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json')
        .then(x => x.json())
        .then((data) => el.textContent = '"' + data[i].quoteText + '"' + ' - ' + data[i].quoteAuthor)
    i++;
};