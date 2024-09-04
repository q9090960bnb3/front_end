<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++" ref="count_btn">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <!-- 3. defineProps 获取就是响应式的了 -->
    <A :count2="count"></A>
  </div>

</template>

<script setup>
import A from './A.vue'

import { ref } from 'vue'
const count = ref(0)

// vue3.5 新特性
// 1. usdId 可以获取一个唯一的id
import { useId } from 'vue'

const id1 = useId()
const id2 = useId()

console.log('id1:', id1)
console.log('id2:', id2)

// 2. useTemplateRef 替换 ref 变量名称可以任意指定了
import { useTemplateRef, onMounted } from 'vue'
const count1 = useTemplateRef('count_btn')

const { msg}  = defineProps({
  msg: String,
})

console.log('msg:', msg)

onMounted(() => {
  console.log('count1:', count1.value)
})

// 4. 优化了内存和大数据操作

</script>



