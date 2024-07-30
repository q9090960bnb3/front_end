# vue3

## `@vue/cli` 脚手架安装

```sh
pnpm install -g @vue/cli
```

- 创建项目

```sh
vue create <project name>
# 选择vue3
```

## `vite` 脚手架安装


```sh
pnpm create vite
# 或以下按照提示操作
pnpm create vite my-vue-app --template vue
```

- 创建js项目

```sh
pnpm create vite my-vue-app --template vue
```

- 创建ts项目

```sh
pnpm create vite my-vue-app --template vue-ts
```

**最好修改 "dev": "vite --host=0.0.0.0" 否则只能本机访问**

## 相关问题

### eslint报错

- 配置此防止命名报错

```json
"rules": {
    "vue/multi-word-component-names": 0
}
```

### 定义 `src` 路径别名为 `@`

- 设置 vite.config.ts 中 alias 来指定别名

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

const alias = {
  '@': path.resolve(__dirname, './src')
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias
  },
  plugins: [vue()],
})

```

### ts项目找不到 `__dirname` 的错误

```sh
pnpm i -D @types/node
```