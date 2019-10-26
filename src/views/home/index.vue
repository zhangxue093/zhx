<template>
  <el-container class="container">
    <el-aside :width="isOpen?'200px':'64px'">
      <!-- logo -->
      <div class="logina"  :class="{smallLogo:!isOpen}"></div>
      <!-- 导航菜单 -->
      <!-- default-active="2" 默认激活那个菜单项 default-active的值是index的值
      open是一级菜单 close是二级菜单 active-text-color="#ffd04b"激活文字颜色-->
      <!-- el-submenu  拥有二级菜单的菜单项目 el-menu-item没有二级菜单的菜单项-->
      <!-- index的作用 当前菜单唯一标识 -->
      <el-menu
        style="border-right:none"
        default-active="/"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="!isOpen"
        :collapse-transition="false"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-postcard"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-tickets"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-s-tools"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <!-- 图标 -->
        <span class="el-icon-s-fold" @click="toggleMenu"></span>
        <!-- 文字 -->
        <span class="toutext">江苏传智播客科技教育有限公司</span>
        <el-dropdown class="dropdown">
          <span class="el-dropdown-link">
            <img class="headIcon" src="../../assets/luwana.jpg" alt />
            <span class="userName">鹿丸</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
           <!-- 二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isOpen: true
    }
  },
  methods: {
    toggleMenu () {
      // 切换左菜单 展开与收起
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.el-aside {
  background: #002033;
}
.el-header {
  line-height: 60px;
  border-bottom: 1px solid #ddd;
}
.icon {
  font-size: 30px;
  vertical-align: middle;
}
.text {
  margin-left: 10px;
  vertical-align: middle;
}
.logina {
  width: 100%;
  height: 60px;
  background: #002244 url(../../assets/logo_admin.png) no-repeat center / 140px
    auto;
}

.dropdown {
  float: right;
}
.headIcon {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.userName {
  font-weight: bold;
  vertical-align: middle;
  margin-left: 5px;
}
.el-icon-s-fold{
  font-size: 22px;
  vertical-align: middle;
  margin-right: 10px;
}
.toutext{
    font-size: 20px;
}
 .smallLogo {
      background-image: url(../../assets/logo_admin_01.png);
      background-size: 36px auto;
    }
</style>
