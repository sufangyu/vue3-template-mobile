# Node 环境
FROM node:14 as builder

# 容器工作目录设置为 /app
WORKDIR /app

# 赋值文件到工作目录, 安装依赖、构建
COPY package.json /app/
COPY . /app
RUN npm config set registry "https://registry.npm.taobao.org/" && npm install && npm run build

FROM node:14-alpine

FROM nginx
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
# --from=builder 指的是从上一次 build 的结果中提取了编译结果
COPY --from=builder app/dist /usr/share/nginx/html/