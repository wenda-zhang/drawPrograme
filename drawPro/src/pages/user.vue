<template>
  <div class="admin">
    普通用户页面
    <h2>这里是普通用户</h2>
    <router-link to="/">admin</router-link>
  </div>
</template>

<script>
export default {
  name: "User",
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