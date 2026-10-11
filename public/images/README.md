# Portfolio Image Asset Rules

This directory is the single source for portfolio imagery. Keep the existing page references unchanged while adding or replacing assets gradually.

## 文件命名规范

统一使用：

`项目-模块-内容-序号.ext`

例如：

- `caimanjie-hero-main-01.webp`
- `caimanjie-ui-home-01.webp`
- `caimanjie-ui-event-card-02.webp`
- `wyeth-festival-kv-main-01.webp`
- `nanya-brochure-cover-01.webp`

禁止：

- `IMG_001.png`
- `截图1.png`
- `最终版2.jpg`
- `新建文件夹.png`

## 图片格式

优先级：

1. WebP
2. AVIF
3. JPG
4. PNG

PNG 仅用于透明背景、Logo，以及需要透明区域的 UI 素材。不要把超大尺寸 PNG 直接用于网站。

## 图片尺寸建议

- 首页项目封面：2400px 左右宽度
- 项目 Hero：2400–3000px 宽度
- 普通 Case Study 图片：1600–2000px 宽度
- 移动端图片：可根据实际需要单独导出
- 人物照片：建议 1200–1600px 宽度

## 图片比例建议

- Hero：16:9 / 3:2
- 项目封面：16:9 / 4:3
- 人物：4:5
- UI 单屏：保持原始设备比例

## 使用规则

- 网站页面中只引用 `public/images` 中的素材。
- 不允许使用桌面临时路径。
- 不允许使用绝对本地路径。
- 不允许直接引用 Downloads 或 Desktop 文件。
- 缺少真实素材时继续使用 Placeholder。
- 不自动寻找 Unsplash 或其他网络图片。
- 不自动生成假作品素材。

## 路径引用示例

```text
/images/caimanjie/hero/caimanjie-hero-main-01.webp
/images/wyeth-member-festival/key-visual/wyeth-festival-kv-main-01.webp
/images/nanya-new-material/brochure/nanya-brochure-cover-01.webp
```

## 目录用途

目录按页面区域和项目用途划分。`hero` 存放项目开场视觉，`brand`、`visual`、`ui`、`process`、`mockups` 等目录分别存放对应阶段或展示用途的素材。`archive` 只收纳暂不出现在首页的作品。
