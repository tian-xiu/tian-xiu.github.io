# 王红臣 · 计算机视觉工程师

> Computer Vision · LLM Agents

从计算机视觉到 Agent，我做的事基本都在一条链路上：模型怎么训、怎么导出、怎么实时推理，最后怎么接进一个真能用的产品。检测模型改过结构，虚拟主播和运营后台也是从零搭到能跑。

我的习惯是先让整条链路跑通，再一段段抠细节。能用只是起点，好用才算做完。

线上地址：<https://tian-xiu.github.io/> · GitHub：<https://github.com/tian-xiu>

## Projects · 项目

按视觉检测、Agent、Web 三类整理，向下滚动即可看全部；每一条都配了仓库里的真实截图或架构图。

### 1. AdaS-Net

![AdaS-Net 网络结构图](https://tian-xiu.github.io/assets/images/projects/adas-net.png)

**Detection · 2026 · PyTorch** — [查看仓库](https://github.com/tian-xiu/AdaS-Net)

目标检测，聚焦目标与背景高度相似的困难场景。Swin Transformer 主干建立长程语义表示，结构感知金字塔解码器（SAPD）与感受野上下文聚合（RCA）补回被下采样抹掉的边界细节，按「看—增强—重建」三阶段推进。

`Swin Transformer · SAPD · RCA`

### 2. FGMNet

![FGMNet 网络结构图](https://tian-xiu.github.io/assets/images/projects/fgmnet.png)

**Detection · 2026 · PyTorch** — [查看仓库](https://github.com/tian-xiu/FGMNet)

频域引导的门控 Mamba 网络。用离散小波变换抽取多尺度高频分量，把主干下采样过程中丢失的边界信息重新注入；FAM 模块自适应捕捉各向同性与各向异性空间线索。

`Mamba · DWT · 频域先验`

### 3. STD-YOLO

![STD-YOLO 框架图](https://tian-xiu.github.io/assets/images/projects/std-yolo.png)

**Detection · 2026 · PyTorch** — [查看仓库](https://github.com/tian-xiu/STD)

目标检测，面向遥感图像中的小目标舰船。改进 YOLOv8，新增小目标检测层、改造 SPPF、引入 CARAFE 上采样，用增强的信息关联机制缓解深层特征丢失，降低复杂背景下的漏检与误检。

`YOLOv8 · CARAFE · 多尺度关联`

### 4. VirtualStreamer-Agent

![虚拟主播主界面截图](https://tian-xiu.github.io/assets/images/projects/virtualstreamer-ui.png)

**AI Agent · 2026 · Python** — [查看仓库](https://github.com/tian-xiu/VirtualStreamer-Agent)（⭐ 4）

虚拟主播 AI 助手：直播弹幕实时采集 → LangGraph 状态机做意图路由与决策 → 情感语音播报，另配一套运营后台管理场次、人设与算法看板。上图是实际运行的桌面端。

`LangGraph · Qwen · 情感 TTS`

### 5. LiveStream-Agent

![实时直播链路示意图](https://tian-xiu.github.io/assets/images/projects/livestream-agent.png)

**AI Agent · 2025 · Python** — [查看仓库](https://github.com/tian-xiu/LiveStream-Agent)

上一代实时虚拟主播实现，也是 VirtualStreamer 的链路原型：弹幕理解、模型决策与语音合成被串成一条低延迟闭环，先把「能实时响应」跑通，再谈效果优化。

`Python · LLM · Speech`

### 6. huanlemajiang

![麻将牌面识别示意图](https://tian-xiu.github.io/assets/images/projects/huanlemajiang.png)

**AI Agent · 2026 · Python** — [查看仓库](https://github.com/tian-xiu/huanlemajiang)

实时麻将助手。PyAutoGUI 抓屏幕画面，YOLOv8 识别牌面并用模板匹配兜底，策略模块根据手牌给出打牌建议，customtkinter 做桌面 GUI。

`YOLOv8 · OpenCV · customtkinter`

### 7. LLM-Driven-Dialogue-System

![对话状态机示意图](https://tian-xiu.github.io/assets/images/projects/dialogue-system.png)

**AI Agent · 2026 · Python** — [查看仓库](https://github.com/tian-xiu/LLM-Driven-Dialogue-System)

面向任务的对话框架。用 LangGraph 组织状态流转，Qwen 做意图路由，把 chat / robot / query 三类请求拆到独立分支处理，FastAPI 对外提供服务。

`LangGraph · FastAPI · Qwen`

### 8. 云枢运营后台

![云枢运营后台仪表盘截图](https://tian-xiu.github.io/assets/images/projects/admin-dashboard-cover.png)

**Web · 2026 · Python** — [查看仓库](https://github.com/tian-xiu/admin-platform)

FastAPI + Jinja2 服务端渲染的零构建管理后台，覆盖仪表盘、经营分析、订单与用户管理、渠道归因。图表以内联 SVG 手写，不依赖前端工程链，可直接在内网部署。

`FastAPI · Jinja2 · SQLite`

还有一些早期学习项目没放进来，可以去 [GitHub 仓库列表](https://github.com/tian-xiu?tab=repositories) 看全部 14 个公开仓库。

## Resume · 经历与技术栈

### Vision & Detection

- **目标检测**（AdaS-Net · FGMNet）：面向边界模糊、目标与背景高度相似等困难场景，分别从结构感知与频域引导两个角度改进检测模型，提升边界定位与结构完整性。
- **计算机视觉工程**（STD-YOLO · YOLOv8）：遥感图像小目标检测与实时视觉推理，涉及多尺度特征融合、上采样模块替换与复杂背景下的漏检、误检抑制。
- **实时交互系统**（Virtual Streamer · LiveStream）：把弹幕理解、模型决策与情感语音串成低延迟闭环，并配套运营侧的管理与任务调度。

### Engineering

- **LLM Agent 工程化**（LangGraph · Qwen）：以 LangGraph 状态机组织对话流程，结合 Qwen 做意图路由，把对话、工具调用与语音播报拆成可观测的节点。
- **服务端渲染后台**（FastAPI · Jinja2）：云枢运营后台零前端构建，图表以内联 SVG 手写，便于在内网环境直接部署。
- **视觉模型部署**（YOLOv8 · PyTorch）：从训练、导出到实时推理的完整链路，覆盖 GPU 环境配置与推理性能调优。

### Tech stack

| 类别 | 技术 |
| --- | --- |
| Languages | Python · SQL · Bash · JavaScript |
| Vision & Models | PyTorch · YOLOv8 · OpenCV · Transformers · Swin Transformer · Mamba |
| Agents & Backend | LangGraph · FastAPI · Jinja2 · SQLite · Redis · Docker |
| Speech | ASR · 情感 TTS · 音频处理 |

## Publications · 论文

目标检测方向的三篇工作，均附可运行的 PyTorch 实现，代码与训练配置全部开源。

1. **AdaS-Net: Adaptive Structure-aware Network for Camouflaged Object Detection**
   Hongchen Wang, Shuzhen Xu, Cuicui Lv, Qiang Zheng, Kaile Su
   以「看—增强—重建」三阶段统一全局语义与局部结构，Swin Transformer 主干配合结构感知金字塔解码器（SAPD），补回被下采样抹掉的边界细节。
   [Code](https://github.com/tian-xiu/AdaS-Net)

2. **FGMNet: Frequency-Guided Gated Mamba Network for Camouflaged Object Detection**
   把频域先验引入状态空间建模，用离散小波变换提取多尺度高频信息注入解码层级，缓解边界模糊与结构恢复不完整的问题。
   [Code](https://github.com/tian-xiu/FGMNet)

3. **STD-YOLO: A Small Ship Target Detection Model with Enhanced Information Association Mechanism**
   面向遥感图像中的小目标舰船检测，改进 YOLOv8 的小目标检测层、SPPF 与上采样方式，增强多尺度信息关联，降低复杂背景下的漏检与误检。
   [Code](https://github.com/tian-xiu/STD)

## Writing · 技术笔记

CSDN 上从大一的课程笔记写到现在的模型拆解，共 **83 篇 / 8.6 万阅读**，站内按年份倒序归档：
[blog.csdn.net/qq_45688164](https://blog.csdn.net/qq_45688164)

与项目直接对应的几篇（机器鸭仿真、LiveStream-Agent、欢乐麻将、GraphOmni-Agent、工业视觉巡检、PyQt6 课程表）在页面上带 `项目` 标记。

## Contact · 联系

- **Email**：[3197939577@qq.com](mailto:3197939577@qq.com)
- **GitHub**：[@tian-xiu](https://github.com/tian-xiu)
- **CSDN**：[@qq_45688164](https://blog.csdn.net/qq_45688164)
- **Focus**：Computer Vision · Object Detection

---

© 2026 王红臣. 本站基于开源模板 [vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio) 改造 · [站点源码](https://github.com/tian-xiu/tian-xiu.github.io)

---

## 维护说明（技术）

页面是纯静态 HTML，没有构建步骤。改完提交，Pages 约 1 分钟内重新发布。

```
index.html                     # 全部内容：About / Projects / Resume / Publications / Writing / Contact
assets/css/style.css           # 全站样式（深色主题，单文件）
assets/js/script.js            # 滚动进度、导航高亮、入场动画、回到顶部
assets/images/projects/*.png   # 项目配图（仓库真实截图 / 生成的示意图）
.nojekyll                      # 跳过 Jekyll 构建，按静态文件直接发布
```

- **改项目**：`index.html` 里搜 `class="post reveal"`，每条 `<article class="post">` 是一个项目；
  分类标签用 `chip-research`（青绿）/ `chip-agent`（紫）/ `chip-web`（琥珀）
- **改文章列表**：搜 `class="year-row"`，每个年份一个 `<div class="year-row">`，内部
  `<ul class="wlist">` 的每个 `<li>` 是一篇；左侧年份旁的篇数在 `<em>` 里，增删条目后要同步改
  - 数据来自 CSDN 接口：
    `https://blog.csdn.net/community/home-api/v1/get-business-list?page=1&size=100&businessType=blog&username=qq_45688164`
    （请求需带 Cookie，否则会被安全验证页拦截）
- **改论文**：搜 `class="pub reveal"`
- **改主题色**：`style.css` 顶部 `:root` 里的 `--orange-yellow-crayola` / `--vegas-gold`

本地预览直接双击 `index.html` 即可；字体走 Google Fonts，断网时回退到系统字体，布局不受影响。
