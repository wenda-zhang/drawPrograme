<template>
  <div class="admin">
    管理员页面
    <h2>这里是首页</h2>
    <router-link to="/user">user</router-link>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
  }
};
</script>

<style scoped lang="less">
</style>