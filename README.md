# 单词记忆卡片演示网站 附带调用API文档

一个基于 [Protocol 模板](https://tailwindcss.com/plus) 构建的单词记忆卡片演示网站，使用 [Tailwind CSS](https://tailwindcss.com) 和 [Next.js](https://nextjs.org) 开发。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFiftonb%2Fwordapi)

## 项目简介

本项目主要用于演示对接 [api.keykey.cc](https://api.keykey.cc) 单词记忆卡片 API 另外附带API调用文档，提供：

- 🔍 **单词搜索和查询** - 直观的搜索界面，快速查找单词
- 📚 **详细的记忆卡片** - 包含例句、词组、助记技巧、词根词缀等
- 📖 **完整的 API 文档** - 面向开发者的详细技术文档
- 💡 **丰富的使用示例** - JavaScript、Python、PHP 等多语言示例
- 🎨 **精美的 UI 设计** - 保持 Protocol 模板的优雅风格

## 快速开始

### 方式 1: 一键部署到 Vercel（推荐）

点击上方的 "Deploy with Vercel" 按钮，即可快速将项目部署到 Vercel 平台。Vercel 会自动完成构建和部署流程。

### 方式 2: 本地开发

#### 安装依赖

```bash
npm install
```

#### 启动开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

#### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
src/
├── app/
│   ├── page.mdx                    # 首页
│   ├── quickstart/page.mdx         # 快速开始
│   ├── api-reference/page.mdx      # API 参考
│   ├── examples/page.mdx           # 使用示例
│   ├── rate-limits/page.mdx        # 限速规则
│   └── word/[word]/page.tsx        # 单词详情页（动态路由）
├── components/
│   ├── WordSearch.tsx              # 单词搜索组件
│   ├── MemoryCard.tsx              # 记忆卡片展示组件
│   └── ...                         # 其他 UI 组件
├── lib/
│   └── api.ts                      # API 服务层
└── types/
    └── memory-card.ts              # TypeScript 类型定义
```

## 核心功能

### 1. 单词搜索

在首页或任意页面输入单词即可查询：

- 支持实时搜索
- 自动跳转到单词详情页
- 提供示例单词快速访问

### 2. 单词详情页

展示完整的记忆卡片内容：

- 音标和发音
- 多个例句（带翻译和用法说明）
- 词组搭配
- 助记技巧
- 词根词缀分析
- 同义词辨析
- 使用场景

### 3. API 文档

完整的技术文档：

- 端点说明和参数
- 响应格式和字段说明
- 错误代码和处理
- 限速规则和配额管理

### 4. 代码示例

多语言示例代码：

- JavaScript/TypeScript
- Python
- PHP
- React Hook
- 缓存策略
- 错误处理

## 技术栈

- **框架**: Next.js 15
- **样式**: Tailwind CSS 4.1
- **UI 组件**: Headless UI
- **动画**: Framer Motion
- **文档**: MDX
- **搜索**: FlexSearch
- **语言**: TypeScript

## Vercel 部署优化

项目已针对 Vercel 免费版进行优化配置：

### 配置文件

- **`vercel.json`** - 部署配置
  - 安全头部设置（XSS、CSRF 防护）
  - 静态资源缓存优化
  - 自动重定向规则

- **`.vercelignore`** - 构建优化
  - 排除不必要的文件
  - 加快部署速度
  - 减少构建体积

- **`next.config.mjs`** - 构建优化
  - 启用 SWC 压缩
  - 图片格式优化（WebP）
  - 禁用 source map（节省时间）
  - Gzip 压缩
  - 字体加载优化

### 性能优化

- 📦 自动代码分割
- 🖼️ 图片自动优化为 WebP 格式
- ⚡ 静态资源长期缓存（1年）
- 🗜️ Gzip/Brotli 自动压缩
- 🚀 Edge CDN 全球加速

## 全局搜索

网站内置全局搜索功能，由 [FlexSearch](https://github.com/nextapps-de/flexsearch) 驱动：

- 点击搜索框或按 `⌘K` (Mac) / `Ctrl+K` (Windows) 激活
- 自动索引所有文档页面
- 实时搜索结果
- 可在 `/src/mdx/search.mjs` 调整搜索参数

## API 集成

本网站调用 `https://api.keykey.cc/api/public/memory-card` 公开 API：

- **无需认证** - 完全公开访问
- **每日限额** - 每个 IP 150 次请求
- **自动缓存** - 实现了客户端缓存策略
- **错误处理** - 完善的错误提示和处理
- **数据来源** - 单词数据大部份由gemini-2.5-flash-lite生成

## 自定义

### 修改 API 地址

编辑 `src/lib/api.ts`：

```typescript
const API_BASE_URL = 'https://your-api-domain.com'
```

### 调整样式

所有样式使用 Tailwind CSS，主题色为 `emerald-500`。可在组件中直接修改类名来自定义样式。

### 添加新页面

1. 在 `src/app/` 下创建新的 `.mdx` 或 `.tsx` 文件
2. 在 `src/components/Navigation.tsx` 中添加导航链接
3. 页面会自动被全局搜索索引

## 开源协议

本项目基于 Protocol 模板开发，模板本身是商业产品，受 [Tailwind Plus license](https://tailwindcss.com/plus/license) 约束。

项目源码用于展示和学习目的。

## 相关资源

- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Next.js 文档](https://nextjs.org/docs)
- [Headless UI 文档](https://headlessui.dev)
- [Framer Motion 文档](https://www.framer.com/docs/)
- [MDX 文档](https://mdxjs.com/)
- [FlexSearch 文档](https://github.com/nextapps-de/flexsearch)

## 联系方式

如有问题或建议，欢迎：

- 提交 GitHub Issue
- 发送邮件

---

**Made with ❤️ using Protocol template**
