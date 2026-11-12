# 留学生生活支援ウェブサイト / International Student Life Guide

京都情報大学院大学（KCGI）Leadership Theory 第39组的 SDGs 目标10学生项目。为初到京都的留学生提供日语、简体中文、英语生活信息。本站不是学校、京都市或其他机构的官方网站。

## 本地运行

建议 Node.js 22.12+（Vite 7 要求 Node 20.19+ 或 22.12+）与 npm。

```sh
npm ci
npm run dev
```

打开终端显示的本地地址，通常为 http://127.0.0.1:5173 。无需后端、密钥或账号，初始语言为日语。

```sh
npm test          # 三语言内容完整性、正文搜索测试
npm run build    # 生成 dist/
npm run preview  # 预览生产构建，通常为 http://127.0.0.1:4173
```

## 项目结构

```text
src/
  components/    # 主题卡片、清单、原创京都SVG插画、来源链接
  pages/         # 首页、可复用指南页、关于项目、404
  layouts/       # 公共导航、页脚、手机菜单、返回顶部
  hooks/         # i18n上下文、容错localStorage
  locales/       # ja.json / zh.json / en.json，全部主要正文及UI文案
  data/          # 官方来源、日期、问卷URL配置
  utils/         # 全文搜索逻辑
  styles/        # Tailwind CSS入口、响应式样式与主题
 tests/          # Node内置测试，无额外测试框架
 .github/workflows/deploy.yml
```

路由为 `/#/`、`/#/guide/bank`、`/#/guide/health`、`/#/guide/transport`、`/#/guide/work`、`/#/guide/living`、`/#/about`。未知路由显示404。关于页面的 `/#/about#feedback` 是反馈入口。

## 已实现功能

- 7个主要页面，三语言导航、正文、FAQ、提示和按钮；语言选择保存在localStorage。
- 首页搜索标题、摘要、章节正文与FAQ；支持多个关键词、不区分英文大小写和无结果提示。
- 响应式卡片、手机折叠菜单、指南目录锚点、原生键盘可操作FAQ、返回顶部。
- 五项新生活Checklist，可勾选/取消、显示进度并持久保存。稳定的任务ID使语言切换不丢失进度。
- Google Forms外部入口；未配置或不合法时显示对应语言的“アンケート準備中”，不会模拟提交成功。
- 官方来源链接、信息核对日期、非官方网站声明、无虚构评价或成果数字。
- 本地原创SVG京都插画，无学校Logo、第三方图片、外部字体或图片请求。
- 可见键盘焦点、跳转正文链接、原生表单标签、减少动态效果设置、浏览器存储不可用提示。

## 修改内容

1. 修改 `src/locales/ja.json`、`zh.json`、`en.json` 中相同键的内容。不要只改一种语言。
2. `guides` 每项包含稳定的 `id`、标题、摘要、章节与FAQ。章节的 `source` 对应 `src/data/sources.js` 的来源键。
3. 官方来源名称也支持三语言，链接集中存放在 `src/data/sources.js`。新增指南时同时更新三语言内容、图标映射和测试预期数量。
4. `src/data/config.js` 中的 `reviewedAt` 为编辑核对日期，不是政策生效日期；实际复核后再更新。
5. 修改配色和布局请编辑 `src/styles/index.css`；项目通过 `@tailwindcss/vite` 集成Tailwind v4，无须旧版tailwind.config.js。

法律、医疗、费用、资格等信息只是一般导览，个别适用条件以官方说明为准。上线后应定期复核官方资料；避免把自动生成的当前日期当成已完成复核。

## 设置反馈问卷

将 `.env.example` 复制为 `.env.local`：

```dotenv
VITE_BASE_PATH=./
VITE_FEEDBACK_URL=https://forms.gle/你的真实问卷标识
```

只允许HTTPS的 `forms.gle` 或 `docs.google.com/forms/` 链接。示例标识不能用作真实链接；没有问卷时保持空白。环境变量会公开在前端构建中，不能放入密钥。修改后重启开发服务器或重新构建。

GitHub Actions部署可在仓库 Settings → Secrets and variables → Actions → Variables 中新增公开变量 `VITE_FEEDBACK_URL`。不设置时保持“问卷准备中”。

## GitHub Pages部署

1. 将项目（包括 `package-lock.json`）推送到GitHub仓库的 `main` 分支。
2. 在 Settings → Pages → Build and deployment 中选择 **GitHub Actions**。
3. 推送或手动运行 `Deploy to GitHub Pages` 工作流，依次执行安装、测试、构建、部署。
4. 工作流成功后，访问部署步骤给出的网址，例如 `https://用户名.github.io/仓库名/`。

默认 `base: './'` 使静态资源相对于部署目录加载，兼容仓库子路径及独立域名。React Router使用HashRouter，所以刷新 `仓库名/#/guide/bank` 不会请求不存在的服务器路由，不需要404重定向脚本。不要改成 `/guide/bank` 形式的服务器路径。

如需要固定base，可设置 `VITE_BASE_PATH=/仓库名/`。部署到其他静态托管平台时上传 `dist/` 的全部文件即可。不要用 `file://` 直接打开产物，须通过HTTP服务访问。

此交付包含部署配置和生产产物，未创建远程仓库或实际发布到GitHub。

## 隐私与存储

网站只在当前来源的浏览器localStorage中保存 `kyoto-guide-language` 与 `kyoto-guide-checklist-v1`，不上传、不采集身份信息、不使用分析SDK。用户清除站点数据后会恢复默认。不同设备、浏览器或域名间不会同步。外部Google Forms遵循其自身隐私与收集设置。

## 内容来源与维护

主要核对来源包括京都市国民健康保险指南、京都市交通局、出入国在留管理厅、京都府交通安全信息与日本邮政银行官方FAQ。每个指南章节均可直接跳转对应官方来源。部分租房、面试等内容为一般生活建议，并非行政机构强制规定。
