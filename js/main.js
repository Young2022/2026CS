// --- 主题切换逻辑 ---
var themeToggleBtn = document.getElementById('themeToggleBtn');
var themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

function applyThemeIcon() {
    var current = document.documentElement.getAttribute('data-theme');
    if (themeIcon) {
        themeIcon.className = (current === 'dark') ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

// 根据当前主题初始化图标
applyThemeIcon();

// 绑定切换按钮点击事件
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        var next = (current === 'dark') ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) { }
        applyThemeIcon();
    });
}
