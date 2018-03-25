function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

let el = document.getElementById('quote');
let i = 0;

function changePLS() {
    readTextFile("https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json", function (text) {
        let data = JSON.parse(text);
        // console.log(data);
        console.log(data[i].quoteText);
        el.textContent = '"' + data[i].quoteText + '"'+ ' - ' + data[i].quoteAuthor;

    });
    i++;
};