// --- 主题切换逻辑 ---
console.log("=== main.js 文件已加载 ===");
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
// ==========================================
// 添加在 main.js 最末尾：联系我们点击弹窗 (事件委托写法)
// ==========================================
document.addEventListener('click', function(e) {
    // 使用 closest 寻找点击目标
    var contactLink = e.target.closest('#footer-contact-email');
    
    if (contactLink) {
        e.preventDefault(); // 阻止默认跳转
        
        // 动态拼接邮箱
        var email = 'ai' + '@' + 'csai' + '.' + 'top'; // 替换为你真实的邮箱
        
        alert('联系我们：' + email);
    }
});
