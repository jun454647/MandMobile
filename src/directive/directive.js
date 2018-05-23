
// 指令
import Vue from 'vue'

Vue.directive('drag', function (element) {
  let touch = {}
  element.addEventListener('touchstart', function (e) {
    // 获取第一个手指点击的偏移量
    let x = e.touches[0].pageX - e.target.offsetLeft
    let y = e.touches[0].pageY - e.target.offsetTop
    touch.x = x
    touch.y = y
    // 拖动元素绝对定位
  })
  element.addEventListener('touchmove', function (e) {
    let parent = e.target.parentElement
    let eWidth = e.target.clientWidth
    let eHeight = e.target.clientHeight
    let parentWidth = e.target.parentElement.clientWidth
    let parentHeight = e.target.parentElement.clientHeight

    let top = e.touches[0].clientY - touch.y
    let left = e.touches[0].clientX - touch.x
    if (left <= parent.offsetLeft) {
      left = parent.offsetLeft
    }
    if (left + eWidth + parent.offsetLeft >= parentWidth) {
      left = parentWidth - eWidth + parent.offsetLeft
    }
    if (top <= parent.offsetTop) top = parent.offsetTop
    if (top + eHeight + parent.offsetTop >= parentHeight) {
      top = parentHeight - eHeight + parent.offsetTop
    }
    e.target.style.left = left + 'px'
    e.target.style.top = top + 'px'
    e.target.style.position = 'absolute'
    e.target.style.transition = 'all .2s linear'
  })
  element.addEventListener('touchend', function (e) {
    e.onmousemove = null
    e.onmouseup = null
  })
})
