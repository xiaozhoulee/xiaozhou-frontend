<template>
  <div id='menulist' style="width: 280px;">
    <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>学员管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">学员管理</template>
          <router-link to='/Student'><el-menu-item index="4-1">选项1</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>班级管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">班级管理</template>
          <router-link to='/Class' style="width: 139px;"><el-menu-item index="1-1">选项1</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>教师管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">教师管理</template>
          <el-menu-item index="2-1" style="width: 139px;">选项1</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>成绩管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">成绩管理</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>

  </div>
</template>

<script>
export default {
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
 #menulist .el-submenu .el-menu-item {
  min-width: 139px;
}
#menulist{
  position: relative;
  top: 0;
}
</style>
