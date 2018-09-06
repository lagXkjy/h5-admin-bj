<template>
  <div class="charts" v-if="consumAndOrder && consumAndOrder.dateStr">
    <div class="timeSelect">
      <el-date-picker v-model="time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd">
      </el-date-picker>
    </div>
    <div class="orderChart" v-loading="isFetchChartDatas">
      <order-chart :chartData="consumAndOrder"></order-chart>
    </div>
    <div class="twoCharts">
      <div class="chart-left"  v-loading="isFetchChartDatas">
        <pay-chart :chartData="recharge"></pay-chart>
      </div>
      <div class="chart-right"  v-loading="isFetchChartDatas">
        <user-chart :chartData="newUser"></user-chart>
      </div>
    </div>
  </div>
  <div class="empty" v-else>暂无图表数据</div>
</template>

<script>
import OrderChart from './OrderChart';

import PayChart from './PayChart';

import UserChart from './UserChart';

import { mapActions, mapState } from 'vuex';

// import moment from 'moment';

const today = moment().format('YYYY-MM-DD HH:mm:ss');

export default {
  data() {
    return {
      time: [],
      today: today,
      start: moment(today).add(-15, 'days').format('YYYY-MM-DD HH:mm:ss'),
    };
  },
  props: {
  },
  computed: {
    ...mapState({
      consumAndOrder: state => state.home.consumAndOrder,
      newUser: state => state.home.newUser,
      recharge: state => state.home.recharge,
      isFetchChartDatas: state => state.home.isFetchChartDatas
    })
  },
  watch: {
    time(value) {
      let bTime = value[0] + ' 00:00:00';
      let endTime = value[1] + ' 23:59:59';
      let limitTime = moment(endTime).subtract(1, "years").format("YYYY-MM-DD"); // 一年前
      if ( moment(bTime).isBefore(moment(limitTime)) ) { // 选择的时间超出一年
        this.$notify.error('选择时间段不能超过一年');
        return;
      }
      this.fetchData(bTime, endTime);
    }
  },
  methods: {
    ...mapActions(['getChartDatas']),
    fetchData(beginTime, endTime) {
        let obj = {
          beginTime: beginTime,
          endTime: endTime
        }
        this.getChartDatas(obj);
    },
  },
  mounted() {
    this.$nextTick(() => {
      // console.log(this.today, this.start)
      this.time.push(this.start)
      this.time.push(this.today)
      this.fetchData(this.start, this.today);
    });
  },
  components: {
    OrderChart,
    PayChart,
    UserChart
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/style/utils';

.charts {
  width: 100%;

}

.empty {
  width: 100%;
  height: 100px;
  background-color: #ffffff;
}
.orderChart {
  box-sizing: border-box;
  padding: 10px;
  background-color: #ffffff;
  margin: {
    bottom: 20px;
  }
}
.timeSelect {
  background-color: #ffffff;
  @include flexbox;
  @include justify-content(center);
  padding: {
    top: 20px;
  }
}
.twoCharts {
  width: 100%;
  height: 500px;
  // box-sizing: border-box;
  @include flexbox;
  @include justify-content(space-between);
  .chart-left, .chart-right {
    width: 48%;
    height: 100%;
    background-color: #ffffff;
  }
}
</style>
