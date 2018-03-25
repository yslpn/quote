let el = document.getElementById('quote');

let quotes = ["Genius is one percent inspiration and ninety-nine percent perspiration. - Thomas Edison","You can observe a lot just by watching. - Yogi Berra"]
let i = 0;
function count() {
    el.textContent = quotes[i];
    i++;
};