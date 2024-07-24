<template>
  <input type="text" v-model="keyWord" />
  <h3>keyWord is: {{ keyWord }}</h3>
  <hr />
  <input type="text" v-model="keyWord2" />
  <h3>keyWord is: {{ keyWord2 }}</h3>
</template>

<script>
import { customRef, ref } from "@vue/reactivity";
export default {
  name: "App",
  setup() {
    // 自定义Ref
    function myRef(value) {
      return customRef((track, trigger) => {
        return {
          get() {
            track() // 通知 vue 追踪数据变化
            return value;
          },
          set(newValue) {
            value = newValue;
            trigger() // 通知vue 重新解析模板
          },
        };
      });
    }

    return {
      keyWord: ref("hello"), //使用vue 内置ref
      keyWord2: myRef("hello")
    };
  },
};
</script>

