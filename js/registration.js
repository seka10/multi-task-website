document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[name="choice"]');
  
    radios.forEach((radio) => {
      radio.addEventListener("change", function () {
        radios.forEach((r) => {
          if (r !== radio) {
            r.checked = false; // تأكد إن الباقيين مش متعلمين
          }
        });
      });
    });
  });
  const box = document.querySelector(".form-box");
  
  box.addEventListener("mouseenter", () => {
    box.style.transition = " 1s ease-in, transform 1s ease-in"; // دخول
    box.style.transform = "scale(1.2)";
  });
  
  box.addEventListener("mouseleave", () => {
    box.style.transition = " 0.5s ease-out, transform 0.5s ease-out"; // خروج
    box.style.transform = "scale(1)";
  });
  const showen = document.querySelector(".btn");
  showen.addEventListener("click", function () {
    box.classList.add("show");
  });
  function toggle() {
    var pop = document.getElementById("pop");
    pop.classList.toggle();
  }
  