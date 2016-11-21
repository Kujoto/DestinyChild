
## vue 多页面

## 使用方法
``` bash
# 安装
npm install

# 调试环境 serve with hot reload at http://localhost:8083/views/index.html
npm run dev

# 生产环境 build for production with minification
npm run build

```

### 目录结构
开发环境
``` 
webpack
  |---src
    |---assets                全局资源
      |---img/                  全局图片
      |---font/                 字体图标
      |---lib/                  js模块
      |---base.css              基础样式
    |---components            Vue组件
      |---module-head           module-head组件
        |---img/                  组件图片
        |---module-head.vue       组件
    |---views                 页面
      |---index                 主页
        |---img/                  页面图片
        |---index.html            index页面
        |---index.js              主入口js
        |---app.vue               页面组件
```
编译之后的生成环境
``` 
webpack
  |---dist
    |---static                全局资源
      |---img/                  全局图片
      |---font/                 字体图标
      |---views/                页面js
        |---index.js               index.js
      |---vendors.js            公共js
    |---views                 页面
      |---index                 主页
```
## 其他
具体如何使用请参照文件内的注释。