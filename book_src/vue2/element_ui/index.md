# element ui

```sh
pnpm i element-ui
```

## 全量引入

{% codetab %}
@import "t00/src/main.js" {title: "main.js"}
@import "t00/src/App.vue" {lang: "html", title: "App.vue"}
```txt
```
```txt
```
{% endcodetab %}

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

{% codetab %}
@import "t01/src/main.js" {title: "main.js"}
@import "t01/src/App.vue" {lang: "html", title: "App.vue"}
```txt
```
```txt
```
{% endcodetab %}