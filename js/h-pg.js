const chatButton = document.querySelector('.chat');
const formChat = document.querySelector('.form-chat');

// إضافة حدث عند الضغط على زر الشات
chatButton.addEventListener('click', function() {
    // نقلب بين إظهار وإخفاء الـ form
    if (formChat.style.display === 'none' || formChat.style.display === '') {
        formChat.style.display = 'block'; // إظهار الفورم
    } else {
        formChat.style.display = 'none'; // إخفاء الفورم
    }
});