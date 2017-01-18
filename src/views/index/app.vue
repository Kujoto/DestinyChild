<template>
<div class="container">
  <module-head title="Vue"></module-head>	
  <h1>{{de}}<i class="icon iconfont">&#xe6df;</i></h1>
  <input type="text" class="g_input">
  <a class="g_button">手气不错</a>
  <a class="g_button red">手气不错</a>
</div>
</template>

<script>
import 'assets/base.css'
import moduleHead from 'components/module-head/module-head'
import test from 'assets/lib/test.js'

export default {
  data() {
    return {
      de:'多页面'	
    }
  },
  components: {
    moduleHead
  },
  ready(){
    test()
  },
  methods: {
  
  }
}
</script>

<style lang="less" scoped>
h1{
background: url(img/blue.jpg) repeat;
text-align: center;
color: white;
}
</style>