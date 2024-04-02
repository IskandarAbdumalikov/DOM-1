// function countNumber() {
//   let counter = document.createElement("div");
//   counter.className = "counter";

//   counter.appendChild(number);
//   counter.appendChild(btns);

//   let number = document.createElement("h1");
//   number.className = "number";

//   let count = 0;

//   function inc() {
//     if (count >= 0) {
//       count++;
//     }
//     number.innerHTML = count;
//   }

//   function reset() {
//     if (count > 0) {
//       count = 0;
//       number.innerHTML = count;
//     }
//   }

//   function dec() {
//     if (count > 0) {
//       count--;
//       number.innerHTML = count;
//     }
//   }

//   let btns = document.createElement("div");
//   btns.className = "btns";
//   btns.appendChild(add__btn);
//   btns.appendChild(reset__btn);
//   btns.appendChild(remove__btn);

//   let add__btn = document.createElement("button");
//   add__btn.className = "add__btn";
//   add__btn.onclick = inc();
//   let reset__btn = document.createElement("button");
//   reset__btn.className = "reset__btn";
//   reset__btn.onclick = reset();
//   let remove__btn = document.createElement("button");
//   remove__btn.className = "remove__btn";
//   remove__btn.onclick = dec();
// }
// for (let i = 0; i < 2; i++) {
//   counter.appendChild(countNumber());
// }
