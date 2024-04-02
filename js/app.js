const number = document.querySelector(".number");
let loading = document.querySelector(".loading");
let welcome = document.querySelector(".welcome")
let count = 0;

function inc() {
  if (count >= 0) {
    count++;
  }
  number.innerHTML = count;
}

function reset() {
  if (count > 0) {
    count = 0;
    number.innerHTML = count;
  }
}

function dec() {
  if (count > 0) {
    count--;
    number.innerHTML = count;
  }
}

let load = document.querySelector(".load");
let countCards = 0;
function addCard() {
  let load__card = document.createElement("div");
  load__card.className = "load__card";
  load.appendChild(load__card);
  countCards++
  if (countCards === 10) {
    loading.classList.add("remove__loading");
    welcome.classList.add("add__welcome")
  }
}

// for (let i = 0; i < 2; i++) {
//   load.appendChild(addCard());
// }
