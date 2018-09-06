<template>
  <div class="homePage protalPage">
    <div class="homeHeader">
      <!-- <div class="title">平台整体概览</div> -->
      <div class="cards">
        <card title="营业额"
              unity="(元)"
              :value="overview.orderMoney ? parseFloat((overview.orderMoney/100).toFixed(2)): 0"></card>
        <card title="总订单量"
              unity="(单)"
              :value="overview.orderTimes ? parseFloat(overview.orderTimes) : 0"></card>
        <card title="总用户量"
              unity="(人)"
              :value="overview.userNum ? parseFloat(overview.userNum) : 0"></card>
        <card title="门店数量"
              unity="(间)"
              :value="overview.storeNum ? parseFloat(overview.storeNum) : 0"></card>
      </div>
    </div>
    <cards></cards>
  </div>
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

import Card from './components/Card';

import Cards from './components/Cards';

export default {
  data() {
    return {
      title1: '营业额(元)',
      value1: '6666'
    };
  },
  computed: {
    ...mapState({
      overview: state => state.home.overview
    })
  },
  watch: {

  },
  components: {
    Card,
    Cards
  },
  methods: {
    ...mapActions(['getHomeOverview', 'getChartDatas']),
  },
  beforeRouteEnter(to, from, next) {
    next( vm => {
      vm.$nextTick( () => {
        vm.getHomeOverview();
      });
    })
  },
  mounted() {
    this.$nextTick(() => {
      // console.log(this.$route)
      this.getHomeOverview();
      // this.getChart('2018-01-01','2019-01-01');
    });
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/style/utils';
.homePage {
  box-sizing: border-box;
  padding: 20px;
}
.homeHeader {
  // background-color: #ffffff;
  box-sizing: border-box;
  padding: {
    top: 15px;
    bottom: 15px;
  }
  margin: {
    bottom: 20px;
  }
  .title {
    font-size: 30px;
  }
  .cards {
    @include flexbox;
    @include justify-content(space-between);
    width: 100%;
  }
}
.orderChart {
  box-sizing: border-box;
  padding: 10px;
  background-color: #ffffff;
  margin: {
    bottom: 20px;
  }
}

.twoCharts {
  width: 100%;
  height: 500px;
  // box-sizing: border-box;
  @include flexbox;
  @include justify-content(space-around);
  .chart-left, .chart-right {
    width: 45%;
    height: 100%;
    background-color: #ffffff;
  }
}
</style>
