# vuex

## 求和案例

### vue 版本

{% codetabs %}
@import "../../vuex/t00_a/src/main.js" {title="main.js"}
@import "../../vuex/t00_a/src/App.vue" {as="html" title="App.vue"}
@import "../../vuex/t00_a/src/components/Count.vue"  {as="html" title="Count.vue"}
{% endcodetabs %}

### vuex 基础版本

- store

  - actions 响应组件动作，可以用 dispatch 分发
  - mutations 直接操作数据，可以commit 直接操作
  - state 存储数据

{% codetabs %}
@import "../../vuex/t01_a/src/main.js" {title="main.js"}
@import "../../vuex/t01_a/src/store/index.js" {title="store/index.js"}
@import "../../vuex/t01_a/src/App.vue" {as="html" title="App.vue"}
@import "../../vuex/t01_a/src/components/Count.vue"  {as="html" title="Count.vue"}
{% endcodetabs %}

### vuex 使用 getter 

- 增加10倍计数功能

- getter 便于处理有依赖数据

{% codetabs %}
@import "../../vuex/t02_a/src/main.js" {title="main.js"}
@import "../../vuex/t02_a/src/store/index.js" {title="store/index.js"}
@import "../../vuex/t02_a/src/App.vue" {as="html" title="App.vue"}
@import "../../vuex/t02_a/src/components/Count.vue"  {as="html" title="Count.vue"}
{% endcodetabs %}

### vuex 使用 vuexmap 

- mapState 将 store 数据通过 mapState 映射到组件中，可以设置别名来避免冲突， 分为 对象形式 和 数组形式
- mapGetters 将 store getter 数据通过 mapGetters 映射到组件中，可以设置别名来避免冲突， 分为 对象形式 和 数组形式

{% codetabs %}
@import "../../vuex/t03_a/src/main.js" {title="main.js"}
@import "../../vuex/t03_a/src/store/index.js" {title="store/index.js"}
@import "../../vuex/t03_a/src/App.vue" {as="html" title="App.vue"}
@import "../../vuex/t03_a/src/components/Count.vue"  {as="html" title="Count.vue"}
@import "../../vuex/t03_a/src/components/Count.vue"  {as="html" title="MapCount.vue"}
{% endcodetabs %}

### vuex 使用 vuexmap 2

- mapMutations 将 store mutations 数据通过 mapMutations 映射到组件中，可以设置别名来避免冲突， 分为 对象形式 和 数组形式
- mapActions 将 store actions 数据通过 mapActions 映射到组件中，可以设置别名来避免冲突， 分为 对象形式 和 数组形式

{% codetabs %}
@import "../../vuex/t04_a/src/main.js" {title="main.js"}
@import "../../vuex/t04_a/src/store/index.js" {title="store/index.js"}
@import "../../vuex/t04_a/src/App.vue" {as="html" title="App.vue"}
@import "../../vuex/t04_a/src/components/Count.vue"  {as="html" title="Count.vue"}
@import "../../vuex/t04_a/src/components/Count.vue"  {as="html" title="MapCount.vue"}
{% endcodetabs %}