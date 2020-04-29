<template>
  <div class="admin">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>账号信息</span>
      </div>
      <!-- <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div> -->
      <div class="info-item">
        <span class="titleInfo">登陆账号：</span>
        <span>{{userInfo.account}}</span>
      </div>
      <div class="info-item">
        <span class="titleInfo">绑定手机号：</span>
        <span>{{userInfo.phoneNum}}</span>
      </div>
      <div class="info-item">
        <span class="titleInfo">姓名：</span>
        <span>{{userInfo.name}}</span>
      </div>
      <div class="info-item">
        <span class="titleInfo">激活状态：</span>
        <span>{{userInfo.status}}</span>
        <span>申请激活</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      userInfo: {
      account: 'zhangsan',
      phoneNum: '123456789',
      name: '张三',
      status: '未激活'
    },
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
.box-card {
  max-width: 1000px;
  .clearfix {
    font-size: 40px;
  }
  .titleInfo {
    width: 125px;
    display: inline-block;
    text-align: right;
  }
  .info-item {
    font-size: 20px;
    margin-top: 5px;
  }
}
</style>