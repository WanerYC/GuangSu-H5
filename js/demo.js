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

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main'));

  // 指定图表的配置项和数据
  var option = {
      title: {
          text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
          data:['销量']
      },
      xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  
})