#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:qinran0423/qinran0423.github.io.git gh-pages
cd -