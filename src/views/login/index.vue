<template>
  <div class="login-page_box">
    <div class="login-content_box">
      <h1>后台管理系统</h1>
      <div class="content-center_box">
        <div class="center-left_box">
          <el-carousel :interval="5000">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="center-right_box">
          <h3>账号登录</h3>
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Activity name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Activity name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button>Cancel</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, toRefs, getCurrentInstance, provide } from 'vue'
export default defineComponent({
  name: 'login',
  setup() {
    return {
      form: {}
    }
  }
})
</script>

<style lang="scss">
.login-page_box {
  width: 100%;  
  min-height: 100vh;
  background: #2b2b2b; 
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-content_box {
  width: 1100px;
  min-height: 700px;
  background: #fff;
  h1 {
    margin: 40px auto;
    font-size: 30px;
    text-align: center;
    font-weight: 600;
    color: #3370ff;
  }
}
.content-center_box{
  display: flex;
  justify-content: flex-start;
}
.center-left_box {
  width: 600px;
  height: 700px;
}
.el-carousel__container {
  height: 600px;
  border-radius: 10px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  height: 700px;
  margin: 0;
  text-align: center;
  overflow: hidden;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.center-right_box {
  font-size: 20px;
  
  color: #3370ff;
}
</style>