<template>
  <div class="home-page_box">
    首页1
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, toRefs, getCurrentInstance, provide } from 'vue'
export default defineComponent({
  name: 'nf-headers',
  setup() {
    const { proxy }: any = getCurrentInstance()
    console.log(proxy.$api)
  }
})
</script>

<style lang="scss">
.home-page_box {
  width: 100%;
  min-height: 90vh;
}
</style>