# element ui

```sh
pnpm i element-ui
```

## 全量引入

{% codetabs %}
@import "t00/src/main.js" {title="main.js" code_block=true}
@import "t00/src/App.vue" {as="html" title="App.vue" code_block=true}
{% endcodetabs %}

## 按需引入

```sh
pnpm i babel-plugin-component
```

- babel.config.js 增加

```js
plugins: [
[
    "component",
    {
    "libraryName": "element-ui",
    "styleLibraryName": "theme-chalk"
    }
]
]
```

{% codetabs %}
@import "t01/src/main.js" {title="main.js" code_block=true}
@import "t01/src/App.vue" {as="html" title="App.vue" code_block=true}
{% endcodetabs %}