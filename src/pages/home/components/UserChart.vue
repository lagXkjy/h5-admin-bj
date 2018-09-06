<template>
  <div id="userChart"></div>
</template>

<script>
// var echarts = require('echarts/lib/echarts'); // 主模块

// require('echarts/lib/chart/line'); // 折线图
// require('echarts/lib/component/tooltip');  // 提示框
// require('echarts/lib/component/title'); // 标题
export default {
  props: {
    chartData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    let _this = this;
    return {
      options: null,
      userChart: null,
    };
  },
  methods: {
    initChart() {
      this.setChartOptions(this.chartData);
      this.userChart = echarts.init(document.getElementById('userChart'));
      this.userChart.setOption(this.options);
    },
    resetChart(data) {
      this.userChart.clear();
      this.setChartOptions(data)
      this.userChart.setOption(this.options);
    },
    setChartOptions(chartData) {
      let curoptions = {
        title: {
          text: '新用户增长',
          top: 20,
          left: 10
        },
        grid: {
          left: '10%',
          top: '15%',
          right: '4%',
          bottom: '10%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          data: JSON.parse(chartData.getStatisticsNewUserStr),
          axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
          axisLabel: {
            interval: 1,
            formatter: function(value) {
              var str = value.substr(4);
              var mon = str.substr(0, 2);
              var date = str.substr(2);
              var format = mon + '/' + date;
              return format;
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
        },
        series: [
          {
            name: '新用户量',
            data: JSON.parse(chartData.getStatisticsNewUserNum),
            type: 'line',
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'red' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'white' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              },
            },
          }
        ],
        dataZoom: [
          {
            type: 'inside',
            filterMode: 'empty',
            start: 0,
            end: 100
          }
        ]
      };
      this.options = curoptions;
    }
  },
  watch: {
    chartData(value) {
      this.resetChart(value);
    }
  },  
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  }
};
</script>

<style lang="scss" scoped>
#userChart {
  width: 100%;
  height: 100%;
}
</style>
