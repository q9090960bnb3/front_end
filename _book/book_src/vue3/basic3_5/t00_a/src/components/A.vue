<template>
    <div>
        mycountis {{ count2 }}
        myCount is {{ myCount }}
    </div>
</template>
<script setup>

import { computed, watchEffect } from 'vue';
const {count2} = defineProps({
    count2: Number
})

const myCount = computed(() => {
    return count2 + 100
})

watchEffect(() => {
    console.log('count2 触发了:', count2)
})

</script>
<style lang="">
    
</style>