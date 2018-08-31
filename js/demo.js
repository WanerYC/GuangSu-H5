// 入口函数
$(document).ready(function () {
  // 表一数据
  var data1 = ["高丽华","李生盛","邹华","何春雷","罗蜀章"]
  var datas1 = [784, 428, 420, 352, 189]

  // 表二数据
  var data2 = ['分行数据','滤镜数据','最新分享','资管数据','指标关注数据']
  var datas2 =
    [
      {value:518, name:'分行数据'},
      {value:323, name:'滤镜数据'},
      {value:222, name:'最新分享'},
      {value:135, name:'资管数据'},
      {value:73, name:'指标关注数据'}
    ]
  
  // 表三数据
  var data3 = [1, 2, 3, 4, 5, 6, 7]
  var datas3 = [1753, 800, 1630, 868, 842, 1666, 1889]

  // 表四数据
  var datas4 = [
      {value:2, name:'2'}, // 北京分行
      {value:1, name:'1'}, // 常州
      {value:1, name:'1'}, // 大连
      {value:1, name:'1'}, // 福州
      {value:2, name:'2'}, // 呼和浩特
      {value:1, name:'1'}, // 拉萨
      {value:2, name:'2'}, // 南昌
      {value:7, name:'7'}, // 南京
      {value:7, name:'7'}, // 南宁
      {value:15, name:'15'}, // 宁波
      {value:1, name:'1'}, // 青岛
      {value:2, name:'2'}, // 苏州
      {value:1, name:'1'}, // 乌鲁木齐
      {value:1, name:'1'}, // 无锡
      {value:2, name:'2'}, // 武汉
      {value:1, name:'1'}, // 西宁
      {value:1, name:'1'}, // 长春
      {value:20, name:'20'}, // 光大
      {value:1, name:'1'}, // 遵义
  ]

  // 表五数据
  var data5 = ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  var datas5 = [720, 100, 150, 600, 300, 150]

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
        }else if (this.activeIndex == 4) {
          // 表一
          echartsForm1('form1', 'bar', '用户访问量排名(单位:次数)', data1, datas1);
        }else if (this.activeIndex == 5) {
          echartsForm2('form2', 'pie', '模块访问量', datas2);  
        }else if(this.activeIndex == 6) {
          echartsForm3('form3', 'line', '2018年1月~7月的访问量', data3, datas3);  
        } else if (this.activeIndex == 7) {
          echartsForm4('form4', 'pie', '新增用户数', datas4); 
        }else if (this.activeIndex == 8) {
          echartsForm1('form5', 'bar', '分行访问量排名(单位:次数)',data5,  datas5); 
        }
        
      },
      slideChangeTransitionStart () {
        // alert(this.activeIndex);
        if(this.activeIndex == 2 || this.activeIndex == 0) {
          $(".section2 > .title").removeClass("animation");
          $(".section2 > .document2").removeClass("animation");
        }else if (this.activeIndex == 3 || this.activeIndex == 1) {
          // alert("第三屏的操作")
          $(".section3 > .title").removeClass("animation");
          $(".section3 > .document3").removeClass("animation");
        }else if (this.activeIndex == 4 || this.activeIndex == 3) {
          // alert("这是该第四屏的操作")
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

  // 封装echarts函数
  function echartsForm1 (name, types, textname, data1, datas) {
    var myChart = echarts.init(document.getElementById(name));
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: textname,
            x: 'center',  // 标题文字的位置
            textStyle: {
              color: '#fff'
            }
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
          name: '用户',
          data: data1 //["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {
          name: '次数'
        },
        series: [{
            // name: '销量',
            // bar 是柱状图  pie是饼状图
            type: types,
            data: datas, // [5, 20, 36, 10, 10, 20]
            itemStyle: {
              // color: ['#FEAD33']
              // 柱条颜色随机生成
              color: function(params) { 
                var colorList = ['#C33531','#EFE42A','#64BD3D','#EE9201','#29AAE3', '#B74AE5','#0AAF9F','#E89589','#16A085','#4A235A','#C39BD3 ','#F9E79F','#BA4A00','#ECF0F1','#616A6B','#EAF2F8','#4A235A','#3498DB' ]; 
                return colorList[params.dataIndex] 
              }
            },
            label: {
              color: '#fff'
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  // 封装echarts函数 表2
  function echartsForm2 (name, types, textname,  datas) {
    var myChart = echarts.init(document.getElementById(name));
    // 指定图表的配置项和数据
    var option = {
      title : {
        text: textname,
        subtext: '排名前五模块',
        x:'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'horizontal', //  竖着排列 vertical  水平排列: horizontal
          bottom: 0,
          left: 'center',
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
          type: 'plain',
          show: true
      },
      series : [
          {
              name: '访问来源',
              type: types,
              radius : '55%',
              center: ['50%', '50%'],   // 饼状图的位置
              data: datas,
              // [
              //   {value:335, name:'直接访问'},
              //   {value:310, name:'邮件营销'},
              //   {value:234, name:'联盟广告'},
              //   {value:135, name:'视频广告'},
              //   {value:1548, name:'搜索引擎'}
              // ],
              itemStyle: {  // 折线快点的样式
                  emphasis: { // 图形的高亮样式
                      shadowBlur: 10,  //图形阴影的模糊大小
                      shadowOffsetX: 0, // 阴影水平方向上的偏移距离。
                      shadowColor: 'rgba(0, 0, 0, 0.5)'  // 阴影颜色
                  }
              }
          }
      ]
    };

    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }

    // // 使用刚指定的配置项和数据显示图表。
    // myChart.setOption(option);
  }

  // 封装echarts函数 表3
  function echartsForm3 (name, types, textname, data1, datas) {
    var myChart = echarts.init(document.getElementById(name));
    // 指定图表的配置项和数据
    var option = {
      title : {
        text: textname,
        // subtext: '纯属虚构',
        x:'center',
        textStyle: {
          color: '#fff'
        }
      },
      xAxis: {
        name: '月',
        type: 'category',
        data: data1  // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        name: '访问量',
        type: 'value'
      },
      legend: {
          orient: 'horizontal', //  竖着排列
          left: 'center',
          bottom: 10,
          data: data1  // ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series : [{
        data: datas, // [820, 932, 901, 934, 1290, 1330, 1320],
        type: types
      }]
    };

    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }

    // // 使用刚指定的配置项和数据显示图表。
    // myChart.setOption(option);
  }

  // 封装echarts函数 表4
  function echartsForm4 (name, types, textname, datas) {
    var myChart = echarts.init(document.getElementById(name));
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: textname,
        // subtext: '纯属虚构',
        x:'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
          orient: 'horizontal',
          x: 'center',
          bottom: 10,
          data:['北京分行','常州','大连','福州','呼和浩特','拉萨','南昌','南京','南宁','宁波', '青岛', '苏州', '乌鲁木齐', '无锡', '武汉','西宁', '长春', '光大', '遵义']
      },
      series: [
          {
            name:'访问来源',
            type: types,
            // selectedMode: 'single',
            radius: '60%',

            label: {
                normal: {  // 控制文字在饼图内属性
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: datas,
            // [
            //   {value:335, name:'直达', selected:true},
            //   {value:679, name:'营销广告'},
            //   {value:1548, name:'搜索引擎'}
            // ]
            itemStyle: {  // 折线快点的样式
              emphasis: { // 图形的高亮样式
                  shadowBlur: 10,  //图形阴影的模糊大小
                  shadowOffsetX: 0, // 阴影水平方向上的偏移距离。
                  shadowColor: 'rgba(0, 0, 0, 0.5)'  // 阴影颜色
              }
            }
          },
      ]
    };

    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }

    // // 使用刚指定的配置项和数据显示图表。
    // myChart.setOption(option);
  }

  // // 基于准备好的dom，初始化echarts实例
  // var myChart = echarts.init(document.getElementById('form1'));

  // // 指定图表的配置项和数据
  // var option = {
  //     title: {
  //         text: '用户访问量排名(单位:次数)'
  //     },
  //     tooltip: {},
  //     legend: {
  //         data:['销量']
  //     },
  //     xAxis: {
  //         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  //     },
  //     yAxis: {},
  //     series: [{
  //         // name: '销量',
  //         // bar 是柱状图  pie是饼状图
  //         type: 'bar',
  //         data: [5, 20, 36, 10, 10, 20]
  //     }]
  // };

  // // 使用刚指定的配置项和数据显示图表。
  // myChart.setOption(option);
  
})