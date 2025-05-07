const insert = document.getElementById("insert");
const descreate = document.getElementById("descreates");
const reset = document.getElementById("reset");
const countLabel = document.getElementById("countLabel");

let count = 0;

insert.onclick = function () {
  count++;
  countLabel.textContent = count;
};

descreate.onclick = function () {
  count--;
  countLabel.textContent = count;
};

reset.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
