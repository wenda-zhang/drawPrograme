<template>
  <div class="admin">
    <div class="searchList">
      <span>
        客户姓名：
        <el-input
          v-model="customerName"
          style="width:200px; margin-right:20px"
          placeholder="请输入客户姓名"
        ></el-input>
      </span>
      <span>
        类型：
        <el-input v-model="typeValue" style="width:200px;margin-right: 30px" placeholder="请输入类型"></el-input>
      </span>
      <el-button type="primary" @click="mainMethod">搜索</el-button>
      <el-button @click="resetSearch">重置</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="ID" label="ID" width="180"></el-table-column>
      <el-table-column prop="customer" label="客户姓名" width="180"></el-table-column>
      <el-table-column prop="type" label="办理类型"></el-table-column>
      <el-table-column prop="name" label="开发人员姓名"></el-table-column>
      <el-table-column prop="city" label="城市"></el-table-column>
      <el-table-column prop="number" label="数量"></el-table-column>
      <el-table-column prop="price" label="金额"></el-table-column>
    </el-table>
    <div class="footerPage">
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="pageTotal"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      tableData: [
        {
          ID: "123",
          customer: "王小虎",
          type: "办理类型",
          name: "开发员小张",
          city: "广州",
          number: "89757",
          price: "10块钱"
        },
        {
          ID: "123",
          customer: "王小虎",
          type: "办理类型",
          name: "开发员小张",
          city: "广州",
          number: "89757",
          price: "10块钱"
        },
        {
          ID: "123",
          customer: "王小虎",
          type: "办理类型",
          name: "开发员小张",
          city: "广州",
          number: "89757",
          price: "10块钱"
        }
      ],
      customerName: "",
      typeValue: "",
      pageTotal: 100
    };
  },
  methods: {
    mainMethod() {
      if (!this.customerName && !this.typeValue) {
        this.$toast("请输入要搜索的内容");
      }
    },
    resetSearch() {
      this.customerName = "";
      this.typeValue = "";
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped lang="less">
.searchList {
  margin-bottom: 25px;
}
.footerPage {
  margin-top: 20px;
  text-align: right;
}
</style>