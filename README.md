# 3D_Run — 构建产物

本仓库只存放 Cocos Creator 工程的 **Web 构建产物**，不含源码。

- **线上地址**：https://hyj1351824201-ops.github.io/3D_Run/
- **发布分支**：`main` —— GitHub Pages 从该分支根目录发布
- **源码仓库**：https://github.com/hyj1351824201-ops/3D_Run_fullCode

## 部署

本仓库内容由源码工程的 `deploy.sh` 自动推送，请勿手工修改。

`.nojekyll` 必须保留，否则 GitHub Pages 会启用 Jekyll 处理，
Cocos 产物里下划线开头的文件和目录会被忽略，页面白屏。
