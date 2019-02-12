
<template>
<div class="demetable" v-loading="listLoading" element-loading-text="加载中...">
  <div class="tools">
    <el-row>
      <el-button type="primary" size="small" @click="dialogFormVisible = true">新 增</el-button>
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

  <el-dialog title="新增" width="30%" :close-on-click-modal="false" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleClose">保 存</el-button>
    </div>
  </el-dialog>
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
      multipleSelection: [],
      dialogFormVisible: false,
      form: {
        name: '',
        region: ''
      },
      formLabelWidth: '80px'
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      //this.listLoading = true
      const that = this
      //setTimeout(function() {
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
      //}, 500);
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
    },
    handleClose(done) {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success',
        duration: 800
      });
      this.dialogFormVisible = false
    }
  }
}
</script>
