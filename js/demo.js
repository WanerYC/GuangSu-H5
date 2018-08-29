// 入口函数
$(document).ready(function () {

  var swiper = new Swiper('.swiper-container', {
    on: {
      slideChangeTransitionEnd: function(){
        // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
        // 进入索引为1 的第二屏时触发
        if (this.activeIndex == 1) {
          $(".section2 > .title").addClass("animation");
          // $(".section2 > .document2").css("opacity","1");
        }
        
      },
      slideChangeTransitionStart () {
        // alert(this.activeIndex);
        if(this.activeIndex == 2 || this.activeIndex == 0) {
          $(".section2 > .title").removeClass("animation");
        
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