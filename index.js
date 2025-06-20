let countEl = document.getElementById("count-el");
let count = 0;
function inc() {
    console.log("Incrementing");
    count += 1;
    countEl.innerText = count;
}