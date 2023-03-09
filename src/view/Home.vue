<template>
  <el-container>
    <NavBar/>
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>

import NavBar from "@/components/NavBar.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    NavBar,
    Header
  }
}
</script>

<style>
.el-header, .el-footer {
  text-align: end;
  line-height: 60px;
}

.el-aside {
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-top: 20px;
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>