<template>
    <div class="os-foodlist-wrapper">
        <div class="os-foodlist-header">
            <div class="os-breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>菜品列表</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="os-title">
                <h1>卡片列表</h1>
            </div>
        </div>
        <div class="os-foodcard-list">
            <div class="os-foodcard-body">
                <div class="card-add card">
                    <el-button icon="el-icon-plus" size="small">新增产品</el-button>
                </div>
                <div class="card card-food" v-for="item in 20" :key="item">
                    <div class="card-body">
                        <div class="card-logo">
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" alt="">
                        </div>
                        <div class="card-title">
                            <h1>Apply</h1>
                            <p>在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。</p>
                        </div>
                    </div>
                    <ul class="card-action">
                        <li><span>编辑</span></li>
                        <li><span>删除</span></li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
</template>
