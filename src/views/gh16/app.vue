<template>
    <div style="height:233px;margin-top:89px" id="lga">
      <span style="display:none" id="hplogoved" data-ved="0ahUKEwiDqN-j2ITQAhXKvrwKHcyjBE0QNwgE"></span>
        <div id="hplogo" tabindex="0" title="万圣节快乐" dir="ltr">
          <canvas width="640" height="360" dir="ltr"></canvas>
      </div>
  </div>
</template>

<style lang="less" scoped>
#hplogo{height:230px;outline:none;overflow:hidden;position:relative;margin: 0 auto; width:408px;-moz-user-select:-moz-none;-ms-user-select:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none}#fpdoodle #hplogo{height:360px;width:640px}#hplogo canvas{background:url(img/cta_bg.png) no-repeat center;background-size:contain;height:100%;width:100%}#dood #hplogo canvas{background:url(img/cta_bg.png) no-repeat;background-size:contain;cursor:pointer;height:100%;width:100%}#fpdoodle,#sadoodle{background:#000}</style>
</style>
<script>
import Lib from 'assets/Lib.js'

export default {
  data() {
    return {
    }
  },
  components: {
  },
  ready(){
      window.google || (window.google = {});
      google.doodle || (google.doodle = {});
      google.doodle.url = "/search?q=%E4%B8%87%E5%9C%A3%E8%8A%82&oi=ddle&ct=halloween-2016-5643419163557888&hl=zh-CN";
      google.doodle.alt = "万圣节快乐";
      google.doodle.share = "万圣节快乐 #GoogleDoodle";
      google.doodle.shortlink = "//g.co/doodle/sjvuh5";
      google.doodle.gallery = "http://www.google.com/doodles/halloween-2016?hl=zh-CN";
      google.doodle.large_image = "/logos/doodles/2016/halloween-2016-5643419163557888.4-hp.png";
      google.doodle.hl = "zh-CN";
      google.doodle.msgs = {
          "Continue": "\u7ee7\u7eed",
          "End Screen - New Game": "\u65b0\u6e38\u620f",
          "End Screen - Replay": "\u518d\u73a9\u4e00\u6b21",
          "Found A Spell": "\u4f60\u627e\u5230\u4e86\u4e00\u9053\u9b54\u5492\uff01",
          "Found A Spell Tutorial": "\u753b\u4e0b\u9b54\u6cd5\u4e4b\u7b26",
          "Game Over": "\u6e38\u620f\u7ed3\u675f",
          "Happy Halloween!": "\u4e07\u5723\u8282\u5feb\u4e50\uff01",
          "High Score": "\u9ad8\u5206",
          "Level Complete": "\u606d\u559c\u8fc7\u5173\uff01",
          "Level Start - Draw!": "\u5f00\u59cb\uff01",
          "Level Start - Level 1": "\u7b2c 1 \u5173",
          "Level Start - Level 2": "\u7b2c 2 \u5173",
          "Level Start - Level 3": "\u7b2c 3 \u5173",
          "Level Start - Level 4": "\u7b2c 4 \u5173",
          "Level Start - Level 5": "\u7b2c 5 \u5173",
          "Level Start - Ready": "\u51c6\u5907",
          "Level Start - Set": "\u5c31\u4f4d",
          "Score": "\u5f97\u5206",
          "Search - Halloween": "\u4e07\u5723\u8282",
          "Search - Icon": "\u641c\u7d22",
          "Share": "\u5206\u4eab",
          "Share - E-mail": "\u901a\u8fc7\u7535\u5b50\u90ae\u4ef6\u5206\u4eab",
          "Share - Facebook": "\u5206\u4eab\u5230 Facebook",
          "Share - G+": "\u5206\u4eab\u5230 Google+",
          "Share - Twitter": "\u5206\u4eab\u5230 Twitter",
          "Share Message": "\u7545\u73a9 #Halloween #GoogleDoodle \u6e38\u620f\uff0c\u51fb\u9000 \ud83d\udc7b\ud83d\udc7b\ud83d\udc7b \u5f97\u5206\uff1a[POINTS]",
          "Tutorial": "\u5728\u4efb\u610f\u5730\u65b9\u753b\u51fa\u9b3c\u9b42\u5934\u4e0a\u7684\u7b26\u53f7\uff0c\u5c31\u80fd\u8f7b\u677e\u5c06\u5176\u51fb\u9000"
      };
      google.doodle.doodle_args = {};
      if (!google.doodle || !google.doodle.loaded) {
          var a = ["google", "doodle", "loaded"],
              b = this;
          a[0] in b || !b.execScript || b.execScript("var " + a[0]);
          for (var c; a.length && (c = a.shift());) {
              var d;
              if (d = !a.length) d = !0;
              d ? b[c] = !0 : b[c] ? b = b[c] : b = b[c] = {}
          }
          var e = document.createElement("script");
          e.src = "../static/gh16/halloween16.js";
          e.async = !0;
          document.body.appendChild(e)
      };
  },
  methods: {
  }  
}
</script>







