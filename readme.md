# 用户信息管理

React + tailwindcss + Go

## Features

- 用户信息的增删查
- 根据用户姓名 Fuzzy 查询
- 分页

## Blink

![img](docs/imgs/img.png)
### Fuzzy
![img_1](docs/imgs/img_1.png)
### 新建用户
![img_2](docs/imgs/img_2.png)
![img_3](docs/imgs/img_3.png)

## TODO

1. 鉴权
2. Toast 提示优化
3. 用户信息、tags 增改
4. 迁移到 Vite 和 ts

## 结构

- mock: 后端数据
- public: 前端用到的静态资源
- src: 前端页面源码

## 食用方式

在项目根目录执行:

```shell
make site
```