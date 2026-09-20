第一步：博客html文件转为markdown, 在线： https://codebeautify.org/html-to-markdown
第二步：转后的md文件放入posts文件夹；
3，在index中添加：

<li class="blog-item">
    <a href="blog.html?post=博客md文件名称">
        <span class="blog-title">AI 音频生成：从语音合成到 AI 作曲</span>
        <span class="blog-date">2026-09-20</span>
    </a>
</li>


在您当前的静态网页结构中，添加新的博客文章有两种主要方式：

1. **方式一：快速新增文章条目（基于现有结构）** —— 最简单直接，直接在 `index.html` 中追加新的列表项。
2. **方式二：结合单独文章页面的完整发布流程** —— 制作独立的文章 HTML 页面，并在主页进行链接（推荐用于长文写作）。

下面为您提供**详细的操作步骤指南**：

---
### 方式二：完整的博客文章创建与发布流程（推荐）
为了保证网站体验，完整的文章发布通常包含以下 4 个步骤：创建文件 -> 撰写内容 -> 主页关联 -> 校验测试。

#### 步骤 1：建立博客文件夹与文件
1. 在您的网站根目录下新建一个名为 `blog` 的文件夹（如已创建则忽略）。
2. 在 `blog` 文件夹内新建一个 HTML 文件，命名建议规范且有意义，例如：
`how-to-learn-ai.html`

#### 步骤 2：撰写博客文章页面模板
在新创建的 `.html` 文件中写入标准结构（保持与主页风格一致的样式和字体）：
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>文章标题 - CSAI 博客</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            line-height: 1.8;
            color: #0f172a;
            background-color: #f8fafc;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        .back-link {
            display: inline-block;
            margin-bottom: 20px;
            color: #0284c7;
            text-decoration: none;
        }
        .article-header {
            margin-bottom: 30px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 15px;
        }
        .article-title { font-size: 1.8rem; font-weight: 800; }
        .article-meta { font-size: 0.85rem; color: #64748b; margin-top: 8px; }
        .article-content { font-size: 1rem; }
        .article-content p { margin-bottom: 1.2em; }
        .article-content h2 { margin: 25px 0 15px; font-size: 1.3rem; }
    </style>
</head>
<body>

    <a href="../index.html" class="back-link"><i class="fa-solid fa-arrow-left"></i> 返回主页</a>

    <article>
        <header class="article-header">
            <h1 class="article-title">文章标题写在这里</h1>
            <div class="article-meta">
                <span><i class="fa-regular fa-calendar"></i> 发布日期：2026-09-05</span> | 
                <span><i class="fa-regular fa-clock"></i> 阅读时间：5 分钟</span>
            </div>
        </header>

        <main class="article-content">
            <p>这里是文章的开头引言或摘要部分...</p>
            
            <h2>一、章节标题</h2>
            <p>这里是详细的正文内容...</p>
        </main>
    </article>

</body>
</html>

```

#### 步骤 3：在主页 `index.html` 更新链接
打开 `index.html`，按照**方式一**的方法插入新的列表节点，并修改 `href` 路径指向步骤 1 创建的文件：
```
html
<li class="blog-item">
    <a href="blog/AI音频生成.html">
        <span class="blog-title">AI 音频生成：从语音合成到 AI 作曲</span>
        <span class="blog-date">2026-09-20</span>
    </a>
</li>

```

#### 步骤 4：本地测试与安全验证

1. 用浏览器打开 `index.html` 页面。
2. 点击刚添加的博客链接，验证是否能顺畅跳转至文章页，以及文章页中的“返回主页”按钮能否正确归位。
3. 如果您配置了服务器或部署在 GitHub Pages 等平台上，只需将修改后的 `index.html` 和新建的 `blog/xxx.html` 一起提交上云即可完成发布。
-----------------
---

### 方式一：直接在主页新增文章列表项（快速发布）

如果您目前只是想在首页的“个人博客”分类下展示新文章链接，按照以下步骤操作：

#### 步骤 1：定位代码区域

打开 `index.html` 文件，找到 `<h2 id="blog" class="section-title">` 对应的博客区域（或直接搜索 `blog-container` 类名）。

#### 步骤 2：判断年份分类

* **情况 A：如果属于已有年份（例如 2026 年）**
1. 找到对应的 `<div class="blog-archive">` 模块。
2. 将包含文章数量的标记 `span` +1（例如 `2 篇` 修改为 `3 篇`）。
3. 在 `<ul class="blog-list">` 中插入新的 `<li>` 结构：

----------
注意：博客文件必须是markdown文件，并放入posts文件夹中
------------
```html
<li class="blog-item">
    <!-- href 填写文章的链接或相对路径 -->
  <a href="blog.html?post=algorithms"> 
        <span class="blog-title">您的新文章标题</span>
        <span class="blog-date">2026-09-05</span>
    </a>
</li>

```
对于markdown博客的打开，需要用浏览器： http://localhost:8080
直接双击 Index.html 打开，浏览器用的是 file:// 协议，fetch() 被安全策略阻断，所以一直卡在"加载中"。
解决方法： 已为你启动本地服务器；步骤如下：
使用 VS Code 左侧的扩展商店里搜索 Live Server（作者是 Ritwick Dey），点击安装。
打开你那个报错的 HTML 文件。
右键点击 HTML 代码编辑区，选择 "Open with Live Server"。
浏览器会自动打开类似 http://127.0.0.1:5500/xxx.html 的地址，fetch 就能正常工作了。
注意：1, 正确操作：在 VS Code 菜单栏点击 文件 (File) → 打开文件夹 (Open Folder) 
2, VS Code，左下角，有一个蓝色的 Restricted Mode（受限模式），点击：trust。
3，右击选中存放 xxx.html，在弹出选择列表中选择：open with Five server
http://127.0.0.1:5500/blog.html?post=AI%E9%9F%B3%E9%A2%91%E7%94%9F%E6%88%90


* **情况 B：如果是新年份（例如 2027 年）**
在 `<div class="blog-container">` 内部最顶端，复制一整段归档结构：
```html
<div class="blog-archive">
    <details open>
        <summary>
            <span><i class="fa-regular fa-folder-open"></i> 2027 年文章</span>
            <span class="blog-date">1 篇</span>
        </summary>
        <ul class="blog-list">
            <li class="blog-item">
                <a href="./blog/2027-new-article.html">
                    <span class="blog-title">2027 年开篇第一篇文章标题</span>
                    <span class="blog-date">2027-01-01</span>
                </a>
            </li>
        </ul>
    </details>
</div>

```



---

### 💡 进阶优化建议（可选）

如果未来文章数量越来越多，纯手动修改 HTML 可能会比较繁琐。您可以考虑：

1. **配合 Docsify / Hexo** 等静态博客工具，把博客拆分为独立的 Markdown 页面。
2. 使用 **JavaScript 动态读取 JSON 数据**，自动生成主页的博客列表（无需每次修改主页 HTML 列表标签）。