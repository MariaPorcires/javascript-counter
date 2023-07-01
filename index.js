
let count = 0;
let countEl = document.getElementById("count-el");
let savedEl = document.getElementById("saved-el");

function increment() {
    count = count + 1
    countEl.textContent = count
}

function save() {
    savedEl.textContent += count + " - "
    countEl.textContent = 0;
    count = 0;
}


