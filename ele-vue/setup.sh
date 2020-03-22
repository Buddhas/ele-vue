#!/usr/bin/env bash
image_version=`date +%Y%m%d%H%M`;
# 关闭shop_admin容器
docker stop shop_admin || true;
# 删除shop_admin容器
docker rm shop_admin || true;
# 删除shop/admin镜像
docker rmi --force $(docker images | grep shop/admin | awk '{print $3}')
# 构建shop/admin:$image_version镜像
docker build . -t shop/admin:$image_version;
# 查看镜像列表
docker images;
# 基于shop/admin 镜像 构建一个容器 shop_admin
docker run -p 9529:8080 -d --name shop_admin shop/admin:$image_version;
# 查看日志
docker logs shop_admin;
#删除build过程中产生的镜像    #docker image prune -a -f
docker rmi $(docker images -f "dangling=true" -q)
# 对空间进行自动清理
docker system prune -a -f