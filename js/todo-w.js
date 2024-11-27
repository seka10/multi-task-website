const inputtitle = document.getElementById("title-notes"),
  add = document.getElementById("add"),
  inputtext = document.getElementById("the-content"),
  output = document.getElementById("outputs");

let item, btndel, h2, p;

add.addEventListener("click", function (e) {
  e.preventDefault();
  if ((inputtitle.value == "") | (inputtext.value == " ")) {
    alert("please check the input feild and try again !");
  } else if ((inputtext.value == "") | (inputtitle.value == " ")) {
    alert("please write the description at the feild and try again !");
  } else {
    item = document.createElement("div");
    btndel = document.createElement("button");
    h2 = document.createElement("h2");
    p = document.createElement("p");

    h2.innerHTML = inputtitle.value;
    p.innerHTML = inputtext.value;
    btndel.innerHTML = "Remove";

    item.classList.add("items");
    btndel.classList.add("remove-note");
    h2.classList.add("head-line-note");
    p.classList.add("content-note");

    item.appendChild(btndel);
    item.appendChild(h2);
    item.appendChild(p);

    output.appendChild(item);

    inputtext.value = "";
    inputtitle.value = "";
  }
  btndel.addEventListener("click", function () {
    output.removeChild(this.parentElement);
  });
});

const done = document.querySelector(".sub");
done.addEventListener("click", function () {
  alert("thanks we will do our best to find your prodacts soon as posiable");
  window.location.href = "home page.html";
});
