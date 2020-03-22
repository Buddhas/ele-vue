#!/usr/bin/env bash
image_version=`date +%Y%m%d%H%M`;
# 关闭ele_index_vue容器
docker stop ele_index_vue || true;
# 删除ele_index_vue容器
docker rm ele_index_vue || true;
# 删除ele/index/vue镜像
docker rmi --force $(docker images | grep ele/index/vue | awk '{print $3}')
# 构建ele/index/vue:$image_version镜像
docker build . -t ele/index/vue:$image_version;
# 查看镜像列表
docker images;
# 基于ele/index/vue 镜像 构建一个容器 ele_index_vue
docker run -p 9527:8080 -d --name ele_index_vue ele/index/vue:$image_version;
# 查看日志
docker logs ele_index_vue;
#删除build过程中产生的镜像    #docker image prune -a -f
docker rmi $(docker images -f "dangling=true" -q)
# 对空间进行自动清理
docker system prune -a -f