// 过滤 -- 陈军强 -- 2018.5.22

// {{ message | filterA }} -- message值作为参数

import Vue from 'vue'

// 过滤字符串
Vue.filter('empty', function (value) {
  if (!value || value === 'null' || value.length === 0) {
    return ''
  }
  return value
})

// 时间戳->日期格式
Vue.filter('toFormatDate', function (temp, format) {
  if (typeof temp === 'undefined') { return '' }
  let date = new Date(parseInt(temp.toString().replace('/Date(', '').replace(')/', ''), 10))
  date.format = function (format) {
    var o = {
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'h+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      'S': this.getMilliseconds()
    }
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
      }
    }
    return format
  }
  if (!format || format.length === 0) {
    format = 'yyyy-MM-dd hh:mm:ss'
  }
  return date.format(format)
})
