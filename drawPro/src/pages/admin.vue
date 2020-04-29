<template>
  <div class="admin">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>账号信息</span>
      </div>
      <!-- <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div> -->
      <div>
        登陆账号：
        <span>{{userInfo.account}}</span>
      </div>
      <div>
        绑定手机号：
        <span>{{userInfo.phoneNum}}</span>
      </div>
      <div>
        姓名：
        <span>{{userInfo.name}}</span>
      </div>
      <div>
        激活状态：
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
}
</style>