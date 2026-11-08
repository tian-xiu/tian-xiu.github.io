# tian-xiu.github.io

个人主页，基于 GitHub Pages 托管。视觉模板来自开源项目
[codewithsadee/vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio)（MIT），
已改为单页作品集结构。

线上地址：<https://tian-xiu.github.io/>

## 结构

```
index.html          # 全部页面内容（About / Resume / Projects / Contact）
assets/css/style.css
assets/js/script.js
assets/images/
  avatar.svg        # 站点头像与 favicon
  covers/*.svg      # 项目封面，按分类配色自动生成
.nojekyll           # 跳过 Jekyll 构建，按静态文件直接发布
```

## 修改内容

页面是纯静态 HTML，没有构建步骤。改完直接提交即可，GitHub Pages 会在约 1 分钟内重新发布。

```bash
git add -A
git commit -m "update content"
git push
```

- 改个人介绍：`index.html` 中 `data-page="about"` 的 `<article>`
- 改项目列表：`data-page="projects"` 的 `<article>`，每个项目是一个 `<li class="project-item">`
  - `data-category` 决定筛选归类：`research` / `ai agent` / `web`
- 改技能条：搜索 `skill-progress-fill`，同时改 `style="width: NN%"` 和 `<data value="NN">`
- 换头像：替换 `assets/images/avatar.svg`，或把 `img src` 指向一张新图

## 本地预览

直接用浏览器打开 `index.html` 即可；图标来自 unpkg CDN，断网时图标不显示但布局不受影响。

## 许可

模板部分遵循原项目的 MIT 许可，见 `LICENSE`。
