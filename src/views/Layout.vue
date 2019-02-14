<template>
<el-container :style="elContainer">
  <el-header height="80px">
    <h2>LELement-管理系统</h2>
  </el-header>
  <el-container>
    <el-aside width="220px">
      <nav-menu />
    </el-aside>
    <el-main>
      <app-main />
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import AppMain from './AppMain'
//import DemoTable from '@/views/demo/demotable'
import NavMenu from './NavMenu'


export default {
  name: 'App',
  components: {
    AppMain,
    NavMenu
  },
  data() {
    return {
      elContainer: {
        height: '500px'
      }
    }
  },
  created: function() {
    // `this` 指向 vm 实例
    const that = this;
    //console.log(that.$children);
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    that.elContainer.height = h + 'px';
    //console.log(h)
  },
  methods: {

  }
}
</script>
