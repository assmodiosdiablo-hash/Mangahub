function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (!user || !pass) {
        alert("الرجاء إدخال اسم المستخدم وكلمة المرور");
        return;
    }

    // حفظ المستخدم محلياً
    localStorage.setItem("mangaUser", JSON.stringify({
        username: user,
        password: pass
    }));

    // الانتقال للبحث
    window.location.href = "search.html";
}

// التحقق في الصفحات الأخرى
function checkLogin() {
    const user = localStorage.getItem("mangaUser");
    if (!user) {
        window.location.href = "login.html";
    }
}