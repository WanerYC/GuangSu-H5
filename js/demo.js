// 入口函数
$(document).ready(function () {

  var swiper = new Swiper('.swiper-container', {
    on: {
      slideChangeTransitionEnd: function(){
        // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
        // 进入索引为1 的第二屏时触发
        if (this.activeIndex == 1) {
          $(".section2 > .title").addClass("animation");
          $(".section2 > .document2").addClass("animation");
        }else if (this.activeIndex == 2) {
          $(".section3 > .document3").addClass("animation");
          $(".section3 > .title").addClass("animation");
        }else if (this.activeIndex == 3) {
          $(".section4 > .document4").addClass("animation");
          $(".section4 > .title").addClass("animation");
        }
        
      },
      slideChangeTransitionStart () {
        // alert(this.activeIndex);
        if(this.activeIndex == 2 || this.activeIndex == 0) {
          $(".section2 > .title").removeClass("animation");
          $(".section2 > .document2").removeClass("animation");
        }else if (this.activeIndex == 3 || this.activeIndex == 1) {
          $(".section3 > .document3").removeClass("animation");
        }else if (this.activeIndex == 4 || this.activeIndex == 2) {
          $(".section4 > .document4").removeClass("animation");
          $(".section4 > .title").removeClass("animation");
        }
      },
    },
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      observer:true,
    },
  });
  
})