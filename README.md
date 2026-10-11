# YU HAO Portfolio

原生 HTML / CSS / JavaScript 静态站，无前端框架和新增运行时依赖。

## 运行

在本目录运行 `node build.cjs` 生成首页和七个既有案例页；运行 `python3 -m http.server 8765 --bind 127.0.0.1`，访问 http://127.0.0.1:8765 。也可以直接打开 index.html。

## 设计依据

首页继承当前 `site.css` 和上级目录最新 `DESIGN.md`：DM Sans（规范允许的 Cosmica 替代字体）、zinc 灰白色阶、1200px 版心、4px 间距基线、36px 媒体圆角、14px 按钮、12px 标签和细边框。更早的 design-style.md 与 06_Design_System 文档均保留；存在冲突时采用当前已实现的体系，不混用旧版字体及颜色。蓝色媒体占位沿用现有 `--color-placeholder: #1f5eff`，不作为新的 UI 主色。

## 源文件与组件

- `components/home.cjs`：Navbar、Hero、About、ProjectCard、SelectedWorks、Capabilities、Experience、ContactFooter，以及统一 Media 占位组件。
- `data/home.cjs`：四个精选项目、能力、经历和联系地址。LinkedIn / 小红书地址为空时显示“待补充”，不生成无效链接。
- `home.css`：首页布局和响应式样式，复用 site.css 的设计令牌。
- `home.js`：手机导航展开、关闭、Escape 和断点切换；禁用 JavaScript 后导航仍可访问。
- `build.cjs`：静态生成入口；案例内容仍读取上级 `portfolio-content.js`。
- `index.html` 和七个案例 HTML 是生成文件，不应作为日常编辑源。

首页顺序：Hero → About Snapshot → Selected Works → Capabilities → Experience → Contact Footer。首页只展示四个核心项目，财满街最大。其他案例仍可直接访问，本轮未新增 Archive。

## 替换图片

所有首页媒体都有 `data-media-slot` 属性，由 `Media()` 统一输出：

| slot | 位置 | 比例 |
| --- | --- | --- |
| hero | 首屏横幅 | 桌面自适应全宽横幅；手机 16:9 |
| portrait | About 人像 | 4:5 |
| caimanjie | 财满街主视觉 | 16:9 |
| wyeth | 惠氏会员节 | 4:3 |
| nanya | 南亚新材 | 4:3 |
| wyeth-content | 惠氏品牌作品 | 3:2 |

未来在 Media 组件中按 slot 接入本地 img / video，保留容器比例、圆角和有意义的替代文本，并删除 IMAGE PLACEHOLDER 标签。建议图片占满容器，依据真实内容决定 object-fit；包含文字的作品不要裁掉关键信息。当前首页不读取 assets 中的真实作品图片。

简历使用已有 `assets/resume.pdf`；首页和案例页原先错误的 yuhao-resume.pdf 链接已修正。

## 验证记录（2026-09-21）

- `node build.cjs` 成功生成 8 页。
- 所有 CJS / JS 文件通过 `node --check`。
- 8 个页面的本地资源、链接、锚点、重复 ID 与单一 H1 检查通过。
- 浏览器实测 320、390、768、1024、1440px，无横向溢出；手机菜单展开与点选后收起正常；桌面 About / Contact 导航正常。
- 浏览器首页无脚本错误。系统减少动态效果通过 CSS 禁用过渡；页面不依赖入场动画显示内容。
- 项目没有 TypeScript、ESLint 配置，不存在可运行的 typecheck / lint 脚本；使用语法及静态结构检查。未声称完成 Safari / 微信内置浏览器兼容性验收。
