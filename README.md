# 3D_Run — 构建产物

本仓库只存放 Cocos Creator 工程的 **Web 构建产物**，不含源码。

- **线上地址**：https://hyj1351824201-ops.github.io/3D_Run/
- **发布分支**：`main` —— GitHub Pages 从该分支根目录发布
- **源码仓库**：https://github.com/hyj1351824201-ops/3D_Run_fullCode

## 部署

在源码工程执行 Cocos 构建（web-desktop），再把 `build/web-desktop/` 的内容
推送到本仓库 `main` 分支根目录。

`.nojekyll` 必须保留，否则 GitHub Pages 会用 Jekyll 处理，下划线开头的
目录和文件会被忽略。
