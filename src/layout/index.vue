<template>
  <div class="page-box">
    <el-container class="page-content__box">
      <el-header>
        <nf-header></nf-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <nf-aside></nf-aside>
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import NfHeader from './components/nf-header.vue'
import NfAside from './components/nf-aside.vue'
import { ref, defineComponent, reactive, toRefs, provide } from 'vue'
export default defineComponent({
  name: 'layout',
  components: {
    NfHeader,
    NfAside
  },
  setup() {}
})
</script>

<style lang="scss">
.el-header, .el-footer {
  background-color: #3b4772;
  color: #333;
}

.el-aside {
  background-color: #2E3759;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #f2f5fb;
  color: #333;
  text-align: left;
  line-height: 20px;
  padding: 10px;
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
</style>