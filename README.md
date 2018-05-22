# MandMobile
框架学习汇总

构建项目----------(前提安装node,npm)

1. npm install -g @vue/cli

2. vue init webpack 项目名称

构建项目完成

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
