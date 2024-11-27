const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("login-password");

// إضافة حدث عند تقديم النموذج
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // منع الإرسال الافتراضي للنموذج

  const email = emailInput.value;
  const password = passwordInput.value;

  // تحقق من البريد الإلكتروني وكلمة المرور
  if (email === "sayed.ayman900900@gmail.com" && password === "1911") {
    // إذا كانت البيانات صحيحة
    alert("Login successful!");
    // إعادة توجيه المستخدم إلى الصفحة التالية
    window.location.href = "home page.html"; // قم بتعديل هذا الرابط حسب الحاجة
  } else {
    // إذا كانت البيانات غير صحيحة
    alert("Invalid email or password. Please try again.");
  }
});
