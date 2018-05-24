# MandMobile
框架学习汇总

一. 构建项目----------(前提安装node,npm)

1. npm install -g @vue/cli

2. vue init webpack 项目名称


### px to rem简述

**1. .postcssrc.js中配置**

```
module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 100,
      propWhiteList: []
    })
  ]
}
```

**2.index.html 加入JS**
```
(function (window, document) {
   function resize(){
      var ww = window.innerWidth;
      if (ww > window.screen.width) {
        window.requestAnimationFrame(resize);
      }
      else {
        if (ww > 750) ww = 750;
        document.documentElement.style.fontSize = ww * 100 / 750 + 'px';
      }
   }
   if (document.readyState !== 'loading') {
      resize();
   } else {
      document.addEventListener('DOMContentLoaded', resize);
   }
   window.addEventListener('resize', resize);
})(window, document);
```

###

### 二. 全局使用ICON
**1.安装svg-sprite-loader：  npm install --save-dev svg-sprite-loader.**
**2.webpack配置**
````
const path = require('path')
module.exports = {
  module: {
    loaders: [
      {
        test: /\.svg$/i,
        loader: 'svg-sprite-loader',
        include: [
          // 将某个路径下所有svg交给 svg-sprite-loader 插件处理
          path.resolve(__dirname, 'src/my-project-svg-folder')
        ],
      }
    ]
  }
}
````
**3. 引用图标（常用）**
```
<template>
  <div>
    <md-icon name="hello"></md-icon>
    <md-icon name="world"></md-icon>
  </div>
</template>

<script>
import 'src/my-project-svg-folder/hello.svg'
import 'src/my-project-svg-folder/world.svg'
import { Icon } from 'mand-mobile'

export default {
  name: 'icon-demo',
  component: {
    [Icon.name]: Icon
  }
}
</script>

```
**4. 全局引用图标**
^在main.js中配置。即可全局使用，不需要正对SVG引用^
```
/* 全局引用SVG */
const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const req = require.context('./assets/icons', true, /\.svg$/);
requireAll(req);

```

**注：webpack.config.js中的rules配置SVG路由时，注意多个地方配置。**
```
rules: [
	{
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [
          path.resolve(__dirname, '../src/assets'),
        ],
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [
          path.resolve(__dirname, '../src/assets/icons'),
        ],
        options: {
          symbolId: 'icon-[name]'
        }
      }
]
```
^(1).第一个配置屏蔽加载添加svg的文件。exclude屏蔽不需要处理的文件^
^(2).第二个配置手动添加必须要加载的svg文件。include手动添加必须处理的文件。^

