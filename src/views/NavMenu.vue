<template>
<el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span>Demo样式</span>
    </template>
    <el-menu-item-group>
      <template slot="title">表格类型</template>
      <router-link to="/example/table">
        <el-menu-item index="1-1">table</el-menu-item>
      </router-link>
      <router-link to="/example/table1">
        <el-menu-item index="1-2">table1</el-menu-item>
      </router-link>
    </el-menu-item-group>
    <el-menu-item-group title="表单类型">
      <router-link to="/example/form">
        <el-menu-item index="1-3">表单</el-menu-item>
      </router-link>
    </el-menu-item-group>
    <el-menu-item-group title="分组3">
      <el-menu-item index="1-4">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <template slot="title">选项4</template>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
</el-menu>
</template>

<script>
export default {
  name: 'navmenu',
  data() {
    return {}
  },
  methods: {
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    }
  }
}
</script>
