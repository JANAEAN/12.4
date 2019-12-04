<template>
  <div class="home">
    <div class="header">
      <div class="top">
        <span>&</span>
        <span>客户账户</span>
        <span>&...</span>
      </div>
      <div class="bottom">
        <input type="text" placeholder="输入客户名称、手机号、备注名 搜索">
      </div>
    </div>
    <div class="content">
      <div class="luyou">
        <router-link tag="span" to="/home/all">全部</router-link>
        <router-link tag="span" to="/home/yun">云进货商</router-link>
        <router-link tag="span" to="/home/like">关注用户</router-link>
        <router-link tag="span" to="/home/cheng">成交</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  created() {
    axios.post('/api/getdata').then(res=>{
      console.log(res.data)
    })
  },

}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}

.top {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
}
.bottom {
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.bottom input {
  width: 90%;
  height: 30px;
  border-radius: 15px;
  border: none;
}

.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 100px;
  background: orange;
}
.content {
  flex: 1;
  overflow: auto;
}
.luyou {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-around;
  background: #eee;
}
</style>
<script>
export default {
  name: "home",
  components: {}
};
</script>
