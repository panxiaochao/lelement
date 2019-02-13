
<template>
<div class="demetable" v-loading="listLoading" element-loading-text="加载中...">
  <div class="tools">
    <el-row>
      <el-button type="primary" size="small" @click="dialogFormVisible = true">新 增</el-button>
    </el-row>
  </div>
  <el-table ref="multipleTable" size="medium" :data="tableData" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column prop="user_name" label="姓名" width="150">
    </el-table-column>
    <el-table-column prop="ipaddr" label="IP地址" width="150">
    </el-table-column>
    <el-table-column prop="createtime" label="时间" width="150">
    </el-table-column>
    <el-table-column prop="remark" label="信息" show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <el-pagination background layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNumber" :page-sizes="pageSizes" :page-size="pageSize" :total="total">
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
      // 基础数据
      total: 10,
      pageSize: 10,
      pageSizes: [10, 20, 30, 40],
      pageNumber: 1,
      listLoading: false,
      formLabelWidth: '80px',
      dialogFormVisible: false,
      // 动态数据
      tableData: [],
      multipleSelection: [],
      form: {
        name: '',
        region: ''
      }
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const that = this
      // 打开loading
      this.listLoading = true
      getList({
        pageNumber: that.pageNumber,
        pageSize: that.pageSize
      }).then(data => {
        that.tableData = []
        let map = JSON.parse(data);
        //console.log(map)
        that.total = map.totalrecord
        that.tableData = map.list
        // 关闭loading
        this.listLoading = false
      })
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.fetchData()
    },
    handleCurrentChange(val) {
      this.pageNumber = val
      this.fetchData()
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
