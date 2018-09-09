// 入口函数
$(document).ready(function () {

  var myChart1 = echarts.init(document.getElementById('form1'));
  var option1 = {
    title: {
        text: '用户访问量排名(单位:次数)',
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
      // name: '用户',
      data:["杨静","李生盛","吴晓艳","何春雷","罗蜀章"],
    },
    yAxis: {
      name: '次数'
    },
    series: [{
        // name: '销量',
        // bar 是柱状图  pie是饼状图
        type: 'bar',
        data: [174, 428, 179, 352, 189],
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
  var myChart2 = echarts.init(document.getElementById('form2'));
  var option2 = {
    title : {
      text: '模块访问量',
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
        data: ['分行数据','滤镜数据','最新分享','资管数据','指标关注数据'], //['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
        type: 'plain',
        show: true,
        selectedMode: false
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],   // 饼状图的位置
            data: [
              {value:518, name:'分行数据'},
              {value:323, name:'滤镜数据'},
              {value:222, name:'最新分享'},
              {value:135, name:'资管数据'},
              {value:73, name:'指标关注数据'}
            ],
            itemStyle: {  // 折线快点的样式
                emphasis: { // 图形的高亮样式
                    shadowBlur: 10,  //图形阴影的模糊大小
                    shadowOffsetX: 0, // 阴影水平方向上的偏移距离。
                    shadowColor: 'rgba(0, 0, 0, 0.5)'  // 阴影颜色
                }
            }
        }
    ]
  }
  var myChart3 = echarts.init(document.getElementById('form3'));
  var option3 = {
    title : {
      text: '2018年1月~7月的访问量',
      // subtext: '纯属虚构',
      x:'center',
      textStyle: {
        color: '#fff'
      }
    },
    xAxis: {
      name: '月',
      type: 'category',
      data: [1, 2, 3, 4, 5, 6, 7]  // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      name: '访问量',
      type: 'value'
    },
    legend: {
        orient: 'horizontal', //  竖着排列
        left: 'center',
        bottom: 10,
        // data: [1, 2, 3, 4, 5, 6, 7]  // ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [{
      data: [1753,800,1630,868, 842, 1666, 1889], // [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      label: {
        show: true
      }
    }]
  }
  var myChart4 = echarts.init(document.getElementById('form4'));
  var option4 = {
    title: {
      text: '新增用户数',
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
        bottom: -30,
        selectedMode: false, // 图例选择的模式 点击隐藏响应模块
        data:['北京分行','常州','大连','福州','呼和浩特','拉萨','南昌','南京','南宁','宁波', '青岛', '苏州', '乌鲁木齐', '无锡', '武汉','西宁', '长春', '光大', '遵义']
    },
    series: [
        {
          name:'访问来源',
          type: 'pie',
          // selectedMode: 'single',
          radius: '60%',

          label: {
              normal: {  // 控制文字在饼图内属性
                position: 'inner',
                formatter: '{c}'
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data: [
            {value:2, name:'北京分行'}, // 北京分行
            {value:1, name:'常州'}, // 常州
            {value:1, name:'大连'}, // 大连
            {value:1, name:'福州'}, // 福州
            {value:2, name:'呼和浩特'}, // 呼和浩特
            {value:1, name:'拉萨'}, // 拉萨
            {value:2, name:'南昌'}, // 南昌
            {value:7, name:'南京'}, // 南京
            {value:7, name:'南宁'}, // 南宁
            {value:15, name:'宁波'}, // 宁波
            {value:1, name:'青岛'}, // 青岛
            {value:2, name:'苏州'}, // 苏州
            {value:1, name:'乌鲁木齐'}, // 乌鲁木齐
            {value:1, name:'无锡'}, // 无锡
            {value:2, name:'武汉'}, // 武汉
            {value:1, name:'西宁'}, // 西宁
            {value:1, name:'长春'}, // 长春
            {value:18, name:'光大'}, // 光大
            {value:1, name:'遵义'}, // 遵义
          ],
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
  }
  var myChart5 = echarts.init(document.getElementById('form5'));
  var option5 = {
    title: {
        text: '分行访问量排名(单位:次数)',
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
      // name: '用户',
      data:["贵阳","南京","宁波","西宁","广大"],
    },
    yAxis: {
      name: '次数'
    },
    series: [{
        // name: '销量',
        // bar 是柱状图  pie是饼状图
        type: 'bar',
        data: [446, 800, 323, 625, 1687],
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
  var myChart6 = echarts.init(document.getElementById('form6'));
  var option6 = {
    title: {
      text: '访问频度',
      x: 'center',  // 标题文字的位置
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          crossStyle: {
              color: '#999'
          }
      }
    },
    xAxis: [
        {
            type: 'category',
            data: ['10次以下','10-50次','50-100次','100-150次','150次以上'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '访问次数',
            min: 0,
            max: 30,
            interval: 5,
            axisLabel: {
                formatter: '{value}'
            }
        },
    ],
    series: [
        {
            // name:'蒸发量',
            type:'bar',
            data: [28, 29, 13, 3, 8] // [28, 29, 13, 3, 8]
        },
        {
            // name:'平均温度',
            type:'line',
            //yAxisIndex: 1,
            label: {
                show: true,
                // formatter: '{c}'
                formatter: function (p) {
                  return parseInt(p.data / 81 * 100) + '%'
                }
            },
            data: [28, 29, 13, 3, 8] // [28, 29, 13, 3, 8]
        }
    ]
  }

  var swiper = new Swiper('.swiper-container', {
    on: {
      init: function () {
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionStart () {
        // console.log(this.activeIndex)
        if (this.activeIndex == 3 || this.activeIndex == 5) {
          myChart1.clear()
          myChart3.clear()
        }else if (this.activeIndex == 4 || this.activeIndex == 6) {
          myChart2.clear()
          myChart4.clear()
        }else if (this.activeIndex == 7) {
          myChart3.clear()
          myChart5.clear()
        }else if (this.activeIndex == 8) {
          myChart4.clear()       
          myChart6.clear()       
        }else if (this.activeIndex == 9) {
          myChart5.clear()
        }
      },
      slideChangeTransitionEnd: function(){
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
        // 进入索引为1 的第二屏时触发
        if (this.activeIndex == 4) {
          // 表一
            myChart1.setOption(option1);
        }else if (this.activeIndex == 5) {
          // 表二
          myChart2.setOption(option2);
        }else if(this.activeIndex == 6) {
          // 表三
          myChart3.setOption(option3);
          // echartsForm3('form3', 'line', '2018年1月~7月的访问量', datas3);  
        } else if (this.activeIndex == 7) {
          // 表四
          myChart4.setOption(option4);
        }else if (this.activeIndex == 8) {
          // 表五
          myChart5.setOption(option5);
        }else if (this.activeIndex == 9) {
          // 表六
          myChart6.setOption(option6);
        }
        
      },
      touchMove: function(event){
        // alert('事件触发了;');
        // console.log(this.activeIndex)
        // alert('触发了滑动事件')

        var num;
        switch (this.activeIndex) {
          case 4:
          myChart1.clear();
          myChart1.setOption(option1);
          break;
          case 5:
          myChart2.clear();
          myChart2.setOption(option2);
          break;
          case 6:
          myChart3.clear();
          myChart3.setOption(option3);
          break;
          case 7:
          myChart4.clear();
          myChart4.setOption(option4);
          break;
          case 8:
          myChart5.clear();
          myChart5.setOption(option5);
          break;
          case 9:
          myChart6.clear();
          myChart6.setOption(option6);
          break;
        }
      },
    },
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      observer:true,
    },
    navigation: {
      // nextEl: '.swiper-button-bottom',
      nextEl: '.swiper-button-next',
    },
  });

})