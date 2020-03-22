#!/usr/bin/env bash
echo "开始执行docker命令"
image_version=`date +%Y%m%d%H%M`;
# 关闭ele-vue容器
docker stop ele-vue || true;
# 删除ele-vue容器
docker rm ele-vue || true;
# 删除ele/vue镜像
docker rmi --force $(docker images | grep ele/vue | awk '{print $3}')
# 构建ele/vue:$image_version镜像
echo "开始docker build命令"
docker build . -t ele/vue:$image_version;
# 查看镜像列表
echo "开始查看镜像列表"
docker images;
# 基于ele/vue 镜像 构建一个容器 ele-vue
docker run -p 9528:8080 -d --name ele-vue ele/vue:$image_version;
# 查看日志
docker logs ele-vue;
#删除build过程中产生的镜像    #docker image prune -a -f
docker rmi $(docker images -f "dangling=true" -q)
# 对空间进行自动清理
docker system prune -a -f