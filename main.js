const number = document.getElementById("number");
const count = document.getElementById("count");
const reset = document.getElementById("reset");

let counts = 1;

count.addEventListener("click", function () {
    let counted = counts++;
  number.innerHTML = counted;
})

reset.addEventListener("click", function () {
    counts = 001;
    number.innerHTML = 000;
});
