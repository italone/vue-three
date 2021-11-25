<template>
  <div class="page-box">
    <el-menu :collapse="isCollapse" :default-active="activeMenu" unique-opened >
      <el-menu-item index="/" @click="handleSelect('/home')">
        <i class="iconfont icon-shouye1"></i>
        <span>首页</span>
      </el-menu-item>
      <template v-for="(item, index) in menus">
        <el-menu-item
          v-if="!item.children"
          :index="item.path"
          :key="index"
          @click="handleSelect(item.path)"
        >
          <i class="iconfont" :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </el-menu-item>
        <el-submenu
          class="nf-submenu"
          v-if="item.children"
          :index="item.name"
          :key="index"
        >
          <template #title>
            <i class="iconfont" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="(child, index1) in item.children">
            <template
              v-if="!child.children"
            >
              <el-menu-item
                :key="index1"
                :index="child.path"
                @click="
                  handleSelect(child.path)
                "
              >
                <span>{{ child.name }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, toRefs, getCurrentInstance, provide } from 'vue'
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'nf-menus',
  props: {
    activeMenu: {
      type: String,
      default: "/"
    },
    isCollapse: {
      type: Boolean,
      default: false
    },
    asideMenus: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      defaultMenus: '1',
      menus: [
        {
          name: "商家中心",
          icon: "icon-shangjiaguanli2",
          id: 'business',
          children: [
            {
              name: "品牌管理",
              path: "/user",
              id: 'brand'
            }
          ]
        },
        {
          id:'shop',
          name: "门店中心",
          icon: "icon-mendianguanli2",
          children: [
            {
              name: "门店管理",
              path: "/role",
              id: 'store'
            }
          ]
        }
      ]
    }
  },
  setup() {
    let router=useRouter();
    const handleSelect = (name:string)=> {
      router.push({path: name});
    }
    return { handleSelect }
  }
})
</script>

<style lang="scss" scoped>
.page-box{
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  z-index: 1500;
  box-sizing: border-box;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}
.el-menu {
  border-right: 0;
  background-color: #2e3759;
  padding-bottom: 60px;
  min-height: 100vh;
  &:not(.el-menu--collapse) {
    width: 200px;
  }
  .iconfont {
    margin-right: 18px;
    text-align: center;
    font-size: 16px;
    vertical-align: middle;
  }
}
.rightMenuBox {
  padding: 0 10px;
  text-align: center;
  .rightMenu {
    cursor: pointer;
  }
}
</style>