# 引入

## 基础示例

{% codetab %}
@import "t00_a/src/main.js" {title: "main.js"}
@import "t00_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t00_a/src/components/School.vue"  {lang: "html", title: "School.vue"}
```txt
```
{% endcodetab %}

## ref属性

{% codetab %}
@import "t01_a/src/main.js" {title: "main.js"}
@import "t01_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t01_a/src/components/School.vue"  {lang: "html", title: "School.vue"}
```txt
```
{% endcodetab %}

## props配置

- `:` 属性带冒号，必须传入指定类型，否则抛出错误

{% codetab %}
@import "t02_a/src/main.js" {title: "main.js"}
@import "t02_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t02_a/src/components/Student.vue"  {lang: "html", title: "Student.vue"}
```txt
```
{% endcodetab %}

## 混合，共享配置

{% codetab %}
@import "t03_a/src/main.js" {title: "main.js"}
@import "t03_a/src/mixin.js" {title: "mixin.js"}
@import "t03_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t03_a/src/components/Student.vue"  {lang: "html", title: "Student.vue"}
@import "t03_a/src/components/School.vue"  {lang: "html", title: "School.vue"}
```txt
```
{% endcodetab %}

## 插件

{% codetab %}
@import "t04_a/src/plugins.js" {title: "plugins.js"}
@import "t04_a/src/main.js" {title: "main.js"}
@import "t04_a/src/App.vue" {lang: "html", title: "App.vue"}
```txt
```
{% endcodetab %}

## scoped 限制

- 限制样式为当前组件使用
- 此示例使用 less 来混入样式，需 `pnpm i -D less less-loader` 来安装依赖

{% codetab %}
@import "t05_a/src/main.js" {title: "main.js"}
@import "t05_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t05_a/src/components/Student.vue"  {lang: "html", title: "Student.vue"}
@import "t05_a/src/components/School.vue"  {lang: "html", title: "School.vue"}
```txt
```
{% endcodetab %}

## 自定义事件

{% codetab %}
@import "t06_a/src/main.js" {title: "main.js"}
@import "t06_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t06_a/src/components/Student.vue"  {lang: "html", title: "Student.vue"}
@import "t06_a/src/components/School.vue"  {lang: "html", title: "School.vue"}
```txt
```
{% endcodetab %}