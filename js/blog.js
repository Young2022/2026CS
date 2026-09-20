// CSAI 博客文章渲染脚本
// 根据 URL 参数 ?post=文件名 从 posts/ 目录加载并渲染 Markdown 文章。
// 抽为外部文件的原因：blog.html 的 CSP 为 script-src 'self'，内联 <script> 会被浏览器拦截，
// 导致页面一直停留在"文章加载中..."；外部脚本符合同源策略，可正常执行。
(function () {
    'use strict';

    function ready(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            fn();
        }
    }

    ready(function () {
        var container = document.getElementById('markdown-container');
        if (!container) return;

        var params = new URLSearchParams(window.location.search);
        var postName = params.get('post');

        if (!postName) {
            container.innerHTML = '<p style="color:#ef4444;">未指定文章参数。</p>';
            return;
        }

        if (typeof marked === 'undefined' || typeof marked.parse !== 'function') {
            container.innerHTML = '<p style="color:#ef4444;">Markdown 渲染库加载失败，请刷新重试。</p>';
            return;
        }

        var mdFile = 'posts/' + postName + '.md';
        container.innerHTML = '<p style="color:#64748b;">正在加载：' + mdFile + ' ...</p>';

        fetch(mdFile)
            .then(function (response) {
                if (!response.ok) throw new Error('HTTP ' + response.status + ' — ' + mdFile);
                return response.text();
            })
            .then(function (md) {
                container.innerHTML = marked.parse(md);
            })
            .catch(function (err) {
                var hint = (window.location.protocol === 'file:')
                    ? '<p style="color:#64748b;font-size:0.85rem;">检测到以 file:// 协议打开：浏览器会拦截本地文件的 fetch 请求。请用 VS Code Live Server（或 python -m http.server）启动后通过 http:// 访问。</p>'
                    : '<p style="color:#64748b;font-size:0.85rem;">请确认文件路径正确且服务器支持 fetch。</p>';
                container.innerHTML = '<p style="color:#ef4444;">加载失败：' + err.message + '</p>' + hint;
            });
    });
})();
