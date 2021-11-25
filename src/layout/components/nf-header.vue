<template>
  <div class="page-box">
    <div class="admin-title">ALONE</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, toRefs, getCurrentInstance, provide } from 'vue'
export default defineComponent({
  name: 'nf-headers',
  setup() {}
})
</script>

<style lang="scss">
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.page-content__box{
  min-height: 100vh;
}

.admin-title{
  cursor: pointer;
  font-size: 22px;
  font-weight: 600;
  color: #fff;
}
</style>