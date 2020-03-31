<template>
  <el-form>
    <el-form-item label="用户名">
      <el-input v-model.trim="user.name" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model.trim="user.password" />
    </el-form-item>
    <el-form-item label="联系方式">
      <el-input v-model.trim="user.phoneNumber" />
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model.trim="user.email" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">Update</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: ''
        }
      }
    }
  },
  methods: {
    submit() {
      this.$message({
        message: '修改成功',
        type: 'success',
        duration: 5 * 1000
      })
    }
  }
}
</script>
