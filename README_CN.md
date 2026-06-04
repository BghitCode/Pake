<h4 align="right"><a href="README.md">English</a> | <strong>简体中文</strong></h4>
<p align="center">
    <img src=https://gw.alipayobjects.com/zos/k/fa/logo-modified.png width=138/>
</p>
<h1 align="center">BghitApp</h1>
<p align="center"><strong>一键打包网页生成轻量桌面应用，支持 macOS、Windows 和 Linux</strong></p>
<div align="center">
    <a href="https://github.com/BghitCode/bghitapp/releases" target="_blank">
    <img alt="GitHub downloads" src="https://img.shields.io/github/downloads/BghitCode/Pake/total.svg?style=flat-square"></a>
    <a href="https://github.com/BghitCode/bghitapp/commits" target="_blank">
    <img alt="GitHub commit" src="https://img.shields.io/github/commit-activity/m/BghitCode/Pake?style=flat-square"></a>
    <a href="https://github.com/BghitCode/bghitapp/issues?q=is%3Aissue+is%3Aclosed" target="_blank">
    <img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/BghitCode/Pake.svg?style=flat-square"></a>
</div>

## 特征

- 🎐 **体积小巧**：相比 Electron 应用小近 20 倍，通常只有 5M 左右
- 🚀 **性能优异**：基于 Rust Tauri，比传统 JS 框架更快，内存占用更少
- ⚡ **使用简单**：命令行一键打包，或在线构建，无需复杂配置
- 📦 **功能丰富**：支持快捷键透传、沉浸式窗口、拖拽、样式定制、去广告

## 快速开始

- **新手用户**：直接下载现成的 [常用包](#常用包下载)，或通过 [在线构建](docs/github-actions-usage_CN.md) 无需环境配置即可打包
- **开发者**：安装 [CLI 工具](docs/cli-usage_CN.md) 后一行命令打包任意网站，支持自定义图标、窗口等参数
- **高级用户**：本地克隆项目进行 [定制开发](#定制开发)，或查看 [高级用法](docs/advanced-usage_CN.md) 实现样式定制、功能增强
- **遇到问题**：查看 [常见问题](docs/faq_CN.md) 获取常见问题的解决方案

## 常用包下载

<table>
    <tr>
        <td>WeRead
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/WeRead.dmg">Mac</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/WeRead_x64.msi">Windows</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/WeRead_x86_64.deb">Linux</a>
        </td>
        <td>Twitter
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/Twitter.dmg">Mac</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/Twitter_x64.msi">Windows</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/Twitter_x86_64.deb">Linux</a>
        </td>
    </tr>
    <tr>
        <td><img src=https://raw.githubusercontent.com/tw93/static/main/pake/WeRead.jpg width=600/></td>
        <td><img src=https://raw.githubusercontent.com/tw93/static/main/pake/Twitter.jpg width=600/></td>
    </tr>
    <tr>
        <td>Grok
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/Grok.dmg">Mac</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/Grok_x64.msi">Windows</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/Grok_x86_64.deb">Linux</a>
        </td>
        <td>DeepSeek
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/DeepSeek.dmg">Mac</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/DeepSeek_x64.msi">Windows</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/DeepSeek_x86_64.deb">Linux</a>
        </td>
    </tr>
    <tr>
        <td><img src=https://raw.githubusercontent.com/tw93/static/main/pake/Grok.png width=600/></td>
        <td><img src=https://raw.githubusercontent.com/tw93/static/main/pake/DeepSeek.png width=600/></td>
    </tr>
    <tr>
        <td>ChatGPT
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/ChatGPT.dmg">Mac</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/ChatGPT_x64.msi">Windows</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/ChatGPT_x86_64.deb">Linux</a>
        </td>
        <td>Gemini
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/Gemini.dmg">Mac</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/Gemini_x64.msi">Windows</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/Gemini_x86_64.deb">Linux</a>
        </td>
    </tr>
    <tr>
        <td><img src=https://raw.githubusercontent.com/tw93/static/main/pake/ChatGPT.png width=600/></td>
        <td><img src=https://raw.githubusercontent.com/tw93/static/main/pake/Gemini.png width=600/></td>
    </tr>
    <tr>
      <td>YouTube Music
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/YouTubeMusic.dmg">Mac</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/YouTubeMusic_x64.msi">Windows</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/YouTubeMusic_x86_64.deb">Linux</a>
      </td>
      <td>YouTube
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/YouTube.dmg">Mac</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/YouTube_x64.msi">Windows</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/YouTube_x86_64.deb">Linux</a>
      </td>
    </tr>
    <tr>
        <td><img src=https://raw.githubusercontent.com/tw93/static/main/pake/YouTubeMusic.png width=600 /></td>
        <td><img src=https://raw.githubusercontent.com/tw93/static/main/pake/YouTube.jpg width=600 /></td>
    </tr>
    <tr>
        <td>LiZhi
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/LiZhi.dmg">Mac</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/LiZhi_x64.msi">Windows</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/LiZhi_x86_64.deb">Linux</a>
        </td>
        <td>ProgramMusic
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/ProgramMusic.dmg">Mac</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/ProgramMusic_x64.msi">Windows</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/ProgramMusic_x86_64.deb">Linux</a>
        </td>
    </tr>
    <tr>
        <td><img src=https://raw.githubusercontent.com/tw93/static/main/pake/LiZhi.jpg width=600/></td>
        <td><img src=https://raw.githubusercontent.com/tw93/static/main/pake/ProgramMusic.jpg width=600/></td>
    </tr>
    <tr>
        <td>Excalidraw
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/Excalidraw.dmg">Mac</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/Excalidraw_x64.msi">Windows</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/Excalidraw_x86_64.deb">Linux</a>
        </td>
        <td>XiaoHongShu
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/XiaoHongShu.dmg">Mac</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/XiaoHongShu_x64.msi">Windows</a>
            <a href="https://github.com/BghitCode/bghitapp/releases/latest/download/XiaoHongShu_x86_64.deb">Linux</a>
        </td>
    </tr>
    <tr>
        <td><img src=https://raw.githubusercontent.com/tw93/static/main/pake/Excalidraw.png width=600/></td>
        <td><img src=https://raw.githubusercontent.com/tw93/static/main/pake/XiaoHongShu.png width=600/></td>
    </tr>
</table>

<details>

<summary>🏂 更多应用可去 <a href="https://github.com/BghitCode/bghitapp/releases">Release</a>下载，<b>此外点击可展开快捷键说明</b></summary>

<br/>

| Mac                                                       | Windows/Linux                                       | 功能                |
| --------------------------------------------------------- | --------------------------------------------------- | ------------------- |
| <kbd>⌘</kbd> + <kbd>[</kbd>                               | <kbd>Ctrl</kbd> + <kbd>←</kbd>                      | 返回上一个页面      |
| <kbd>⌘</kbd> + <kbd>]</kbd>                               | <kbd>Ctrl</kbd> + <kbd>→</kbd>                      | 去下一个页面        |
| <kbd>⌘</kbd> + <kbd>↑</kbd>                               | <kbd>Ctrl</kbd> + <kbd>↑</kbd>                      | 自动滚动到页面顶部  |
| <kbd>⌘</kbd> + <kbd>↓</kbd>                               | <kbd>Ctrl</kbd> + <kbd>↓</kbd>                      | 自动滚动到页面底部  |
| <kbd>⌘</kbd> + <kbd>r</kbd>                               | <kbd>Ctrl</kbd> + <kbd>r</kbd>                      | 刷新页面            |
| <kbd>⌘</kbd> + <kbd>w</kbd>                               | <kbd>Ctrl</kbd> + <kbd>w</kbd>                      | 隐藏窗口,非退出     |
| <kbd>⌘</kbd> + <kbd>-</kbd>                               | <kbd>Ctrl</kbd> + <kbd>-</kbd>                      | 缩小页面            |
| <kbd>⌘</kbd> + <kbd>=</kbd>                               | <kbd>Ctrl</kbd> + <kbd>=</kbd>                      | 放大页面            |
| <kbd>⌘</kbd> + <kbd>0</kbd>                               | <kbd>Ctrl</kbd> + <kbd>0</kbd>                      | 重置页面缩放        |
| <kbd>⌘</kbd> + <kbd>L</kbd>                               | <kbd>Ctrl</kbd> + <kbd>L</kbd>                      | 复制当前页面网址    |
| <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>⌥</kbd> + <kbd>V</kbd> | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd>   | 粘贴并匹配样式      |
| <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>H</kbd>                | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd>   | 回到首页            |
| <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>                | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>   | 开启调试 (仅开发版) |
| <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>⌫</kbd>                | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Del</kbd> | 清除缓存并重启      |

此外还支持双击头部全屏切换，拖拽头部移动窗口，Mac 用户支持手势返回和前进，新菜单也提供了导航、缩放和窗口控制等选项。

</details>

## 命令行一键打包

![BghitApp](https://raw.githubusercontent.com/tw93/static/main/bghitapp/bghitapp1.gif)

```bash
# 安装 BghitApp CLI
pnpm install -g @bghitcode/bghitapp

# 基础用法 - 自动获取网站图标
bghitapp https://github.com --name GitHub

# 高级用法：自定义选项
bghitapp https://example.com --name MyApp --width 1200 --height 800 --hide-title-bar
```

首次打包需要安装环境会比较慢，后续很快。完整参数说明查看 [CLI 使用指南](docs/cli-usage_CN.md)，不想用命令行可以试试 [GitHub Actions 在线构建](docs/github-actions-usage_CN.md)。

## 定制开发

需要 Rust `>=1.85` 和 Node `>=22`（推荐 LTS，较旧的 `>=18` 也可使用），详细安装指南参考 [Tauri 文档](https://tauri.app/start/prerequisites/)。不熟悉开发环境建议直接使用命令行工具。

```bash
# 安装依赖
pnpm i

# 本地开发[右键可打开调试模式]
pnpm run dev

# 打包应用
pnpm run build
```

想要样式定制、功能增强、容器通信等高级玩法，查看 [高级用法文档](docs/advanced-usage_CN.md)。

## 开发者

BghitApp 的发展离不开这些优秀的贡献者 ❤️

<a href="https://github.com/BghitCode/bghitapp/graphs/contributors">
  <img src="./CONTRIBUTORS.svg?v=2" alt="Contributors" width="1000" />
</a>

## 支持

- 如果你喜欢 BghitApp，可以在 Github Star，或分享给朋友使用。
- 由 <a href="https://bghitcode.com" target="_blank">BghitCode</a> 构建，联系：contact@bghitcode.com
