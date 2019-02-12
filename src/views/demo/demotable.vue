
<template>
<div class="demetable" v-loading="listLoading" element-loading-text="加载中...">
  <div class="tools">
    <el-row>
      <el-button size="small">默认按钮</el-button>
      <el-button type="primary" size="small">主要按钮</el-button>
      <el-button type="success" size="small">成功按钮</el-button>
      <el-button type="info" size="small">信息按钮</el-button>
      <el-button type="warning" size="small">警告按钮</el-button>
      <el-button type="danger" size="small">危险按钮</el-button>
    </el-row>
  </div>
  <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column label="日期" width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120">
    </el-table-column>
    <el-table-column prop="address" label="地址" show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <el-pagination background layout="prev, pager, next" :total="1000">
  </el-pagination>
</div>
</template>

<style scope="scss">
.tools {
  margin-bottom: 10px;
  text-align: right;
  border-bottom: 1px solid #ebeef5;
  padding-bottom: 10px;
}
</style>

<script>
import {
  getList
}
from '@/api/table'
export default {
  name: 'demotable',
  data() {
    return {
      tableData: [],
      listLoading: false,
      multipleSelection: []
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      //this.listLoading = true
      const that = this
      setTimeout(function() {
        that.tableData = [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
        that.listLoading = false
      }, 500);
      /*getList(this.listQuery).then(response => {
          this.list = response.data.items
          this.listLoading = false
      })*/
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>
