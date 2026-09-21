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
// 在 js/main.js 文件末尾添加以下代码：
document.addEventListener('DOMContentLoaded', function() {
    var contactLink = document.getElementById('footer-contact-email');
    
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认跳转
            
            // 动态拼接邮箱，防止爬虫抓取
            // 注意：请将 'contact' 换成你真实的邮箱前缀
            var email = 'contact' + '@' + 'csai' + '.' + 'top'; 
            alert('联系我们：' + email);
        });
    }
});
