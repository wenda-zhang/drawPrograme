<template>
  <el-container>
    <el-header>
      <el-menu
        class="el-menu-header"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item class="outWeb">
          <router-link :to="'/login'"><i class="el-icon-switch-button" style="color:#fff;"></i></router-link>
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
        <span v-for="(item, index) of meanue" :key="index">
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </span>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import meanue from '../utils/meanue';

export default {
  name: "MainPage",
  components: {},
  data() {
    return {
      activeIndex: "/",
      activeIndex2: "2",
      testValue: 'testOrigin',
      otherValue: 'otherOrigin',
      fatherValue: 'fatherValue',
      // meanueList: [],
      meanue: []
    };
  },
  mounted() {
    // console.log(this.meanue);
    this.meanue = meanue;
  },
  methods: {
    testClick() {
      this.testValue == 'testOrigin' ? this.testValue = 'clickValue' : this.testValue = 'testOrigin';
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // outValue(e) {
    //   console.log(e);
    // },
    childEvent(data) {
      this.fatherValue == 'fatherValue' ? this.fatherValue = data : this.fatherValue = 'fatherValue';
      this.otherValue == 'otherOrigin' ? this.otherValue = data : this.otherValue = 'otherOrigin';
    },
  },

  watch: {},
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
