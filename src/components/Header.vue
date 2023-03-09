<template>
  <div class="wrapper">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-button round type="info">
          <router-link class="text-auth" to="">Đăng kí</router-link>
        </el-button>
        <el-button round type="primary">
          <router-link class="text-auth" to="">Đăng nhập</router-link>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {}
    }
  },
  methods: {}
}
</script>

<style>
.text-auth {
  color: #ffffff;
}
</style>