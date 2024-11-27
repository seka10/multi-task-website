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
  box.style.transition = " 1.1s ease-in, transform 1.1s ease-in"; // دخول
  box.style.transform = "scale(1.2)";
});

box.addEventListener("mouseleave", () => {
  box.style.transition = " 1.3s ease-out, transform 1.3s ease-out"; // خروج
  box.style.transform = "scale(1)";
});

const pass = document.getElementById("login-password");
const chck = document.querySelector(".pass-chk");

chck.addEventListener("change", function () {
  if (pass.type === "text") pass.type = "password";
  else pass.type = "text";
});
