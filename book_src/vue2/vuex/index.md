# vuex

## 求和案例

### vue 版本

{% codetab %}
@import "t00_a/src/main.js" {title: "main.js"}
@import "t00_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t00_a/src/components/Count.vue"  {lang: "html", title: "Count.vue"}
```txt
```
```txt
```
{% endcodetab %}

### vuex 基础版本

- store

  - actions 响应组件动作，可以用 dispatch 分发
  - mutations 直接操作数据，可以commit 直接操作
  - state 存储数据

{% codetab %}
@import "t01_a/src/main.js" {title: "main.js"}
@import "t01_a/src/store/index.js" {title: "store/index.js"}
@import "t01_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t01_a/src/components/Count.vue"  {lang: "html", title: "Count.vue"}
```txt
```
```txt
```
{% endcodetab %}

### vuex 使用 getter 

- 增加10倍计数功能

- getter 便于处理有依赖数据

{% codetab %}
@import "t02_a/src/main.js" {title: "main.js"}
@import "t02_a/src/store/index.js" {title: "store/index.js"}
@import "t02_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t02_a/src/components/Count.vue"  {lang: "html", title: "Count.vue"}
```txt
```
```txt
```
{% endcodetab %}

### vuex 使用 vuexmap 

- mapState 将 store 数据通过 mapState 映射到组件中，可以设置别名来避免冲突， 分为 对象形式 和 数组形式
- mapGetters 将 store getter 数据通过 mapGetters 映射到组件中，可以设置别名来避免冲突， 分为 对象形式 和 数组形式

{% codetab %}
@import "t03_a/src/main.js" {title: "main.js"}
@import "t03_a/src/store/index.js" {title: "store/index.js"}
@import "t03_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t03_a/src/components/Count.vue"  {lang: "html", title: "Count.vue"}
@import "t03_a/src/components/MapCount.vue"  {lang: "html", title: "MapCount.vue"}
```txt
```
```txt
```
{% endcodetab %}

### vuex 使用 vuexmap 2

- mapMutations 将 store mutations 数据通过 mapMutations 映射到组件中，可以设置别名来避免冲突， 分为 对象形式 和 数组形式
- mapActions 将 store actions 数据通过 mapActions 映射到组件中，可以设置别名来避免冲突， 分为 对象形式 和 数组形式

{% codetab %}
@import "t04_a/src/main.js" {title: "main.js"}
@import "t04_a/src/store/index.js" {title: "store/index.js"}
@import "t04_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t04_a/src/components/Count.vue"  {lang: "html", title: "Count.vue"}
@import "t04_a/src/components/MapCount.vue"  {lang: "html", title: "MapCount.vue"}
```txt
```
```txt
```
{% endcodetab %}

### vuex 组件通信

{% codetab %}
@import "t05_a/src/main.js" {title: "main.js"}
@import "t05_a/src/store/index.js" {title: "store/index.js"}
@import "t05_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t05_a/src/components/Count.vue"  {lang: "html", title: "Count.vue"}
@import "t05_a/src/components/Person.vue"  {lang: "html", title: "MapCount.vue"}
```txt
```
```txt
```
{% endcodetab %}

### vuex 模块化

{% codetab %}
@import "t06_a/src/main.js" {title: "main.js"}
@import "t06_a/src/store/index.js" {title: "store/index.js"}
@import "t06_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t06_a/src/components/Count.vue"  {lang: "html", title: "Count.vue"}
@import "t06_a/src/components/Person.vue"  {lang: "html", title: "MapCount.vue"}
```txt
```
```txt
```
{% endcodetab %}

### vuex 模块化最终版

{% codetab %}
@import "t06_a/src/main.js" {title: "main.js"}
@import "t06_a/src/store/index.js" {title: "store/index.js"}
@import "t06_a/src/store/count.js" {title: "store/count.js"}
@import "t06_a/src/store/person.js" {title: "store/person.js"}
@import "t06_a/src/App.vue" {lang: "html", title: "App.vue"}
@import "t06_a/src/components/Count.vue"  {lang: "html", title: "Count.vue"}
@import "t06_a/src/components/Person.vue"  {lang: "html", title: "MapCount.vue"}
```txt
```
```txt
```
{% endcodetab %}