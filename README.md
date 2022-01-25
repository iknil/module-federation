# 模块联邦事例

## 准备&启动

```shell
# 安装依赖
yarn install

# 启动主项目
yarn workspace main run start

# 启动hub项目
yarn workspace hub run start

# 启动module-a项目
yarn workspace module-a run start

# 启动module-b项目
yarn workspace module-b run start
```

## 测试

浏览器打开`http://localhost:3000/`

## 项目结构

```text
.
├── LICENSE
├── README.md
├── package.json
├── packages
│   ├── hub
│   ├── main
│   ├── module-a
│   └── module-b
└── yarn.lock

```