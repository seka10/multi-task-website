window.open = alert(" thank you for being one of our family ... Enjoy ❤");
const progress = document.querySelector(".progres-bar");

window.addEventListener("scroll", function () {
  let width =
    ((document.body.scrollTop || document.documentElement.scrollTop) /
      (document.body.scrollHeight - document.documentElement.clientHeight)) *
    100;
  console.log(document.documentElement.scrollHeight);
  console.log(document.body.scrollTop);
  progress.style.width = `${width}%`;
});

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

window.onscroll = function () {
  if (window.scrollY >= 500) {
    button.style.display = "block";
    console.log(`scroling value is ${window.scrollY}`);
  } else {
    button.style.display = "none";
  }
};

button.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Mainbtn = document.querySelector(".Main-btn");
// closed
let activeMenu = false;

const mainmenu = document.querySelector(".mainmenu");

Mainbtn.addEventListener("click", function () {
  activeMenu = !activeMenu;

  // هنبدل حالة الـ menu ما بين "active" و "غير active"
  if (activeMenu) {
    mainmenu.classList.add("active");
    mainmenu.classList.remove("peak");
    Mainbtn.innerHTML = "×"; // لما يكون مفتوح، العلامة تبقى "×"
  } else {
    mainmenu.classList.remove("active");
    Mainbtn.innerHTML = "="; // لما يكون مقفول، العلامة ترجع "="
  }
});

Mainbtn.addEventListener("mouseover", function () {
  if (!activeMenu) {
    mainmenu.classList.add("peak"); // إضافة تأثير الـ hover
  }
});

Mainbtn.addEventListener("mouseout", function () {
  if (!activeMenu) {
    mainmenu.classList.remove("peak"); // إزالة تأثير الـ hover
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

