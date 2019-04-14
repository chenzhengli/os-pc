<template>
    <div class="os-catalogList-wrapper">
        <div class="os-catalogList-header">
            <div class="os-breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>菜品列表</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="os-title">
                <h1>查询表格</h1>
            </div>
        </div>
        <div class="os-catalogList-table">
            <el-form :inline="true" :model="formInline" class="os-form-inline" size="small">
                <el-form-item label="菜品名称">
                    <el-input v-model="formInline.user" placeholder="菜品名称"></el-input>
                </el-form-item>
                <el-form-item label="菜品ID">
                    <el-select v-model="formInline.region" placeholder="菜品ID">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查 询</el-button>
                    <el-button  @click="onSubmit">重 置</el-button>
                </el-form-item>
                <el-row class="add">
                    <el-col :span="24"><el-button type="primary" icon="el-icon-plus" size="small">新建</el-button></el-col>
                </el-row>
            </el-form>
            <div class="table">
                <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="地址">
                    </el-table-column>
                </el-table>
            </div>
            <div class="os-page">
                <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
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
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, 
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
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
        }]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
