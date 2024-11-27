window.open = alert(
  "To have all features please login or regist .. thank you for visiting our Website ❤"
);
let button = document.querySelector(".down-btn");

// const items = document.querySelector('.items')
// const menuItems = ["Introduction", "Projects", "Suggution", "Contact us"]

// menuItems.forEach((item) => {
//    const link = document.createElement("a");
//    const list_item = document.createElement("li");
//    link.innerText = item;
//    list_item.appendChild(link);
//    items.appendChild(list_item);
// })

const Mainbtn = document.querySelector(".Main-btn");
// closed
let activeMenu = false;

const mainmenu = document.querySelector(".mainmenu");

Mainbtn.addEventListener("click", function () {
  activeMenu = !activeMenu;

  mainmenu.classList.toggle("active");
  mainmenu.classList.remove("peak");

  if (activeMenu) {
    Mainbtn.innertext = "×";
  } else {
    Mainbtn.innerHTML = "=";
  }
});

Mainbtn.addEventListener("mouseover", function () {
  if (!activeMenu) {
    mainmenu.classList.add("peak");
  }
});

Mainbtn.addEventListener("mouseout", function () {
  if (!activeMenu) {
    mainmenu.classList.remove("peak");
  }
  //   zr.innerHTML = "×";
});

const zorar = document.querySelector(".vs");

zorar.addEventListener("mouseover", function () {
  zorar.innerHTML = "Registering";
});

zorar.addEventListener("mouseout", function () {
  zorar.innerHTML = "Logging In";
});

const box = document.querySelector(".box");
const vs = document.querySelector(".vs");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

vs.addEventListener("click", function () {
  box.classList.add("show");
});

one.addEventListener("click", function () {
  box.classList.remove("show");
});

two.addEventListener("click", function () {
  box.classList.remove("show");
});
