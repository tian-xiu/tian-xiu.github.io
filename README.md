# tian-xiu.github.io

个人主页，GitHub Pages 托管。视觉模板来自开源项目
[codewithsadee/vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio)（MIT），
已改造为**单页滚动 + 博客式项目流**：不再分页点击，向下滚动即可看完全部内容。

线上地址：<https://tian-xiu.github.io/>

## 结构

```
index.html                     # 全部内容：About / Projects / Resume / Contact
assets/css/style.css           # 全站样式（深色主题，单文件）
assets/js/script.js            # 滚动进度、导航高亮、入场动画、回到顶部
assets/images/
  avatar.svg                   # 头像 + favicon
  projects/*.png               # 项目配图（仓库真实截图 / 生成的示意图）
.nojekyll                      # 跳过 Jekyll 构建，按静态文件直接发布
```

## 页面结构

- **顶部导航**：`About / Projects / Resume / Contact` 锚点跳转，滚动时自动高亮当前区块
- **About**：头像、简介、四个统计数字
- **Projects**：博客式纵向列表，每条 = 左图 + 右侧标题/摘要/技术标签。8 个项目按
  `Research / AI Agent / Web` 分类，全部在一屏滚动内，没有分页也没有筛选器
- **Resume**：研究 / 工程两条时间线 + 技术栈标签
- **Contact**：邮箱、GitHub、方向

## 改内容

页面是纯静态 HTML，没有构建步骤。改完提交，Pages 约 1 分钟内重新发布。

```bash
git add -A
git commit -m "update content"
git push
```

- **改项目**：`index.html` 里搜 `class="post reveal"`，每条 `<article class="post">` 是一个项目。
  顺序即页面顺序，删除或新增整块即可
  - 分类标签：`chip-research`（青绿）/ `chip-agent`（紫）/ `chip-web`（琥珀）
  - 配图放在 `assets/images/projects/`，改 `<img src>` 指向新文件
  - 缩略图统一按 `16 / 10` 比例裁切（`object-fit: cover`），原图比例不必强求
- **改简介**：搜 `class="lead"`
- **改统计数字**：搜 `class="facts"`
- **换头像**：替换 `assets/images/avatar.svg`（同时作为 favicon）
- **改主题色**：`style.css` 顶部 `:root` 里的 `--orange-yellow-crayola` / `--vegas-gold`

## 配图说明

| 项目 | 图片来源 |
|---|---|
| AdaS-Net / FGMNet / STD-YOLO | 各仓库 README 中的论文结构图 |
| VirtualStreamer-Agent | 仓库 `docs/images/ui-main-desktop.png` 实际运行截图 |
| 云枢运营后台 | 仓库 `docs/images/ui-dashboard.png` 顶部区域 |
| LiveStream-Agent / huanlemajiang / LLM-Dialogue | 仓库无图，按项目内容绘制的**示意图**（非截图） |

## 本地预览

直接用浏览器打开 `index.html` 即可。字体走 Google Fonts，断网时回退到系统字体，布局不受影响。
