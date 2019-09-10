<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">学生管理</router-link> |
      <router-link to="/Class">班级管理</router-link> |
      <router-link to="/Teacher">教师管理</router-link> |
      <router-link to="/achievement">成绩管理</router-link> |
      <router-link to="/user">用户管理</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>
