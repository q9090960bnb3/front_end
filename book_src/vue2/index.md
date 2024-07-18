# vue2

## 脚手架安装

```sh
pnpm install -g @vue/cli
```

- 创建项目

```sh
vue create <project name>
# 选择vue2
```

## 相关问题

### eslint报错

- 配置此防止命名报错

```json
"rules": {
    "vue/multi-word-component-names": 0
}
```