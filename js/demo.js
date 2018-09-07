// 入口函数
$(document).ready(function () {
  // 表一数据 用户访问排名 柱状图
  var data1 = ["杨静","李生盛","吴晓艳","何春雷","罗蜀章"]
  var datas1 = [174, 428, 179, 352, 189]

  // 表二数据 模块访问量 饼状图
  var data2 =[] //['分行数据','滤镜数据','最新分享','资管数据','指标关注数据']
  var datas2 = []
  
  // 表三数据 1-7月访问量   折线图
  var data3 = [1, 2, 3, 4, 5, 6, 7]
  var datas3 = [1753,800,1630,868, 842, 1666, 1889]

  // 表四数据 新增用户数  饼状图
  var datas4 = [
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
      {value:20, name:'光大'}, // 光大
      {value:1, name:'遵义'}, // 遵义
  ]

  // 表五数据 分行访问排名 柱状图
  var data5 = ["贵阳","南京","宁波","西宁","广大"]
  var datas5 = [446, 800, 323, 625, 1687]

  var data6 = []
  var data6s = []


  var swiper = new Swiper('.swiper-container', {
    on: {
      init: function () {
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionStart () {
        console.log(this.activeIndex)
        if (this.activeIndex == 4) {
          datas2 = []
          data2 = []
        }else if (this.activeIndex == 4 || this.activeIndex == 6) {
          datas2 = []
        }else if (this.activeIndex == 8) {
          data6 = []
          data6s = []
          // $('')
          console.log(data6);
        }
      },
      slideChangeTransitionEnd: function(){
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
        // 进入索引为1 的第二屏时触发
        if (this.activeIndex == 4) {
          // 表一
          echartsForm1('form1', 'bar', '用户访问量排名(单位:次数)', data1, datas1);
        }else if (this.activeIndex == 5) {
          data2 =['分行数据','滤镜数据','最新分享','资管数据','指标关注数据']
          datas2 =
            [
              {value:518, name:'分行数据'},
              {value:323, name:'滤镜数据'},
              {value:222, name:'最新分享'},
              {value:135, name:'资管数据'},
              {value:73, name:'指标关注数据'}
            ]
          echartsForm2('form2', 'pie', '模块访问量', data2, datas2);  
        }else if(this.activeIndex == 6) {
          echartsForm3('form3', 'line', '2018年1月~7月的访问量', datas3);  
        } else if (this.activeIndex == 7) {
          echartsForm4('form4', 'pie', '新增用户数', datas4); 
        }else if (this.activeIndex == 8) {
          echartsForm1('form5', 'bar', '分行访问量排名(单位:次数)',data5,  datas5); 
        }else if (this.activeIndex == 9) {
          data6 = [28, 29, 13, 3, 8]
          data6s = [28, 29, 13, 3, 8]
          console.log(data6);
          echartsForm5('form6', data6, data6s);
        }
        
      },
      touchStart: function(event){
        // alert('事件触发了;');
        // console.log(this.activeIndex)
        if (this.activeIndex == 4) {
          // 表一
          echartsForm1('form1', 'bar', '用户访问量排名(单位:次数)', data1, datas1);
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
          // name: '用户',
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
  function echartsForm2 (name, types, textname,data2,  datas) {
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
          data: data2, //['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
          type: 'plain',
          show: true,
          selectedMode: false
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
  function echartsForm3 (name, types, textname, datas) {
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
          data: data1  // ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series : [{
        data: datas, // [820, 932, 901, 934, 1290, 1330, 1320],
        type: types,
        label: {
          show: true
        }
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
          bottom: -30,
          selectedMode: false, // 图例选择的模式 点击隐藏响应模块
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
                  position: 'inner',
                  formatter: '{c}'
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

  // 封装echarts函数 表5
  function echartsForm5 (name, data1, data2) {
    var myChart = echarts.init(document.getElementById(name));//form6
    // 指定图表的配置项和数据
    option = {
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
              data:data1 // [28, 29, 13, 3, 8]
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
              data:data2 // [28, 29, 13, 3, 8]
          }
      ]
    };
  

    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }

    // // 使用刚指定的配置项和数据显示图表。
    // myChart.setOption(option);
  }


})