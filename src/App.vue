<template>
  <el-container>
    <el-aside :width="sildeWidth">
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical"
        router
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-row justify="center" type="flex" aligin="middle">
          <el-col> <div style="height: 20px"></div> </el-col>
          <el-col>
            <el-row justify="center" type="flex" aligin="middle">
              <el-avatar
                :size="!isCollapse ? 80 : 50"
                :src="
                  userInfo.avatar
                    ? userInfo.avatar
                    : 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
                "
              ></el-avatar>
            </el-row>
          </el-col>
          <el-col v-if="!isCollapse">
            <el-row v-if="!userInfo.id" justify="center" type="flex" aligin="middle">
              <div style="margin-top: 10px">
                <span style="color: #409eff; cursor: pointer" @click="login">请登录</span>
              </div>
            </el-row>
            <el-row v-if="userInfo.id" justify="center" type="flex" aligin="middle">
              <div style="margin-top: 10px">
                <span @click="login">{{ userInfo.id }}</span>
              </div>
            </el-row>
          </el-col>
        </el-row>
        <div class="split"></div>
        <el-menu-item>
          <i @click="collapseStatus" class="el-icon-menu"></i>
        </el-menu-item>
        <el-submenu index="data">
          <template v-slot:title>
            <i class="el-icon-news"></i>
            <span>微信公众号</span>
          </template>

          <el-menu-item @click="linkClick('gold', '/data/gold')" index="/data/gold">
            广告金
          </el-menu-item>
          <el-menu-item
            @click="linkClick('channel', '/data/channel')"
            index="/data/channel"
          >
            MP渠道
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="2" disabled>
          <i class="el-icon-document"></i>
          <span>辅助</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-setting"></i>
          <span>设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main v-loading="loading" element-loading-text="加载中...">
        <!-- <router-view :key="$route.path" /> -->
        <div id="container" v-show="!loading"></div>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    createTime: {
      type: Number,
    },
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    activeMenu() {
      return window.location.pathname.split("/").slice(0, 3).join("/");
    },
    sildeWidth() {
      return this.isCollapse ? "auto" : "300px";
    },
  },
  methods: {
    login() {
      history.pushState({}, "/login", "/login?redirect=" + window.location.href);
    },
    linkClick(title, url) {
      history.pushState({}, title, url);
    },
    handleOpen(key, keyPath) {
      console.log(this);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    collapseStatus() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style>
#rootApp {
  font-family: Helvetica, sans-serif;
  height: 100%;
}
html,
body,
.el-container {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
#container {
  height: 100%;
}

.el-header,
.el-footer {
  /* background-color: #b3c0d1; */
  color: #333;
  /* text-align: center; */
  /* line-height: 60px; */
}
.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  /* text-align: center; */
}
.el-menu-vertical {
  height: 100%;
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  /* text-align: center; */
}

body > .el-container {
  /* height: 100%; */
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  /* line-height: 260px; */
}

.el-container:nth-child(7) .el-aside {
  /* line-height: 320px; */
}
a {
  text-decoration: none;
  color: #303133;
}
.router-link-active {
  color: #9cf;
}
.split {
  height: 20px;
}
</style>
