---
# Liquid pretreatment required
---
// 检测滚动栏
window.onscroll = function() {
  // 是否显示回到顶部按钮
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  var top = document.querySelector(".top");  // 获取第一个绑定 top 的元素
  if(t > 300 ) { 
    top.style.display = "block";
  } else {
    top.style.display = "none";
  }

// 回到顶部滚动函数
function toScroll() {
  clearInterval(this.timer);
  this.timer = setInterval(function() {
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    window.scrollBy(0, -100);
    if (Math.ceil(scrolltop) <= 0) {  // 如果回到了顶部，就清除当前计时函数
        clearInterval(this.timer);
    };
  }, 10)  // 每 10 毫秒调用一次，这样绝对顺滑
};
