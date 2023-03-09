<template>
  <el-row>
    <el-col>
      <img :src="image" alt="" width="100px"/>
      <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @close="handleClose"
          @open="handleOpen">
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <span>Trang chủ</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-search"></i>
          <span>Tìm kiếm</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-files"></i>
          <span>Thư viện</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-folder-add"></i>
          <span>Tạo playlist</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-folder"></i>
          <span>Bài hát yêu thích</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import logo from "@/assets/Spotify_Logo.png";

export default {
  data: function () {
    return {
      image: logo
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu {
  border: none;
}
img {
  margin-left: 10px;
}
</style>