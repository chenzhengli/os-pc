<template>
  <div class="container">
   <el-container>
    <el-aside width="245px" class="left-wrapper">
      <Aside></Aside>
    </el-aside>
    <el-container class="header-main">
      <el-header class="os-header">
        <Header></Header>
      </el-header>
      <el-main class="os-main">
        <Main></Main>
         <!-- <router-view></router-view> -->
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>
<script>
// @ is an alias to /src
import Aside from "@/components/layout/Aside.vue";
import Header from "@/components/layout/Header.vue";
import Main from "@/components/layout/Main.vue";

export default {
  name: "home",
  components:{
    Aside,
    Header,
    Main
  },
  data(){
    return {
      
    }
  },
  methods: {
      
  },
  computed: {
    
  }
};
</script>

