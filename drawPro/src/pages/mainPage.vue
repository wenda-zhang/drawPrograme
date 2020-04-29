<template>
  <el-container>
    <el-header>
      <el-menu
        class="el-menu-header"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item class="outWeb">
          <i class="el-icon-switch-button" style="color:#fff;"></i>
        </el-menu-item>
        <el-menu-item class="homeStyle">
          <router-link :to="'/'"><i class="el-icon-s-home" style="color:#fff;"></i></router-link>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="this.$route.path"
          router
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/">
            <i class="el-icon-s-custom"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
          <el-menu-item index="/user">
            <i class="el-icon-menu"></i>
            <span slot="title">业务管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      activeIndex: "/",
      activeIndex2: "2"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="less">
@bgc: #b3c0d1;
.el-container {
  height: 100%;
  .el-menu-header {
    // text-align: center;
    // padding-left: 200px;
    .homeStyle {
      float: right;
    }
    .outWeb {
      float: right;
    }
  }
  .el-header {
    padding: 0px;
    background-color: @bgc;
  }
  .el-aside {
    background-color: rgb(84, 92, 100);
  }
  .el-main {
    background-color: #e9eef3;
  }
}
</style>
