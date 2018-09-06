<template>
  <div id="payChart" v-if="chartData.getStatisticsRechargedateStr"></div>
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
      payChart: null,
      options: {}
    };
  },
  methods: {
    initChart() {
      this.setChartOptions(this.chartData);
      this.payChart = echarts.init(document.getElementById('payChart'));
      this.payChart.setOption(this.options);
    },
    resetChart(data) {
      this.payChart.clear();
      this.setChartOptions(data)
      this.payChart.setOption(this.options);
    },
    setChartOptions(chartData) {
      let curoptions = {
        title: {
          text: '充值统计',
          top: 20,
          left: 10
        },
        grid: {
          left: '17%',
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
          data: JSON.parse(chartData.getStatisticsRechargedateStr),
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
            name: '充值金额',
            data: JSON.parse(chartData.getStatisticsRechargeorderNum).map(item => item/100),
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
    'chartData'(value) {
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
#payChart {
  width: 100%;
  height: 100%;
}
</style>
