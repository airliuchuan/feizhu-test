<template>
  <div class="searcher-bd tab-content">
    <div class="select-mode">
      <label @click="selectSingle">
        <span :class="[isSingle ? 'selected' : 'unselected']"></span>
        <input type="radio" v-model="mode" value="single">
        单程
      </label>
      <label @click="selectRound">
        <span :class="[isSingle ? 'unselected' : 'selected']"></span>
        <input type="radio" v-model="mode" value="round">
        往返
      </label>
    </div>
    <div class="city-date clear">
      <div class="city fl">
        <div class="start-city select-wrap">
          <label>出发城市:</label>
          <input-city :value="startCity" :isShow="isStartShow" @select="startHandle" @city="handleStartCity"></input-city>
        </div>
        <div class="arrive-city select-wrap">
          <label>到达城市:</label>
          <input-city :value="arriveCity" :isShow="isArriveShow" @select="arriveHandle" @city="handleArriveCIty"></input-city>
        </div>
      </div>
      <div class="change" :class="[changeSelected ? 'change-select' : '']" @click="changeCity" @mouseenter="changeEnterHandle" @mouseleave="changeLeaveHandle"></div>
      <div class="date fl">
        <div class="start-date select-wrap">
          <label>出发日期:</label>
          <input-date :value="startDate" placeHolder="yyyy-mm-dd"></input-date>
        </div>
        <div class="arrive-date select-wrap">
          <label :class="[isSingle ? 'grey' : '']">返程日期:</label>
          <input-date :value="roundDate" placeHolder="yyyy-mm-dd"></input-date>
        </div>
      </div>
    </div>
    <div class="footer">
      <img src="@/assets/images/baozhang.png" alt="平台保障先行赔付">
      <button class="search-btn">搜索</button>
    </div>
  </div>
</template>
<script>
import InputCity from '@/components/input-city.vue'
import InputDate from '@/components/input-date.vue'
export default {
  name: 'selectCityDate',
  components: {
    InputCity,
    InputDate
  },
  /**
   * data:
   * startCIty: 选择的出发地点
   * arriveCIty: 选择的到达地点
   * startDate: 选择的出发日期
   * roundDate: 选择的返回日期
   * mode: 单程还是往返
   * changeSelected: 判断换字在鼠标滑入的情况下的selected效果
   * isStartShow: 选择出发地点的下拉框是否显示
   * isArriveShow: 选择到达地点的下拉框是否显示
   */
  data () {
    return {
      startCity: '北京',
      arriveCity: '',
      startDate: '',
      roundDate: '',
      mode: 'single',
      changeSelected: false,
      isStartShow: false,
      isArriveShow: false
    }
  },
  computed: {
    isSingle () {
      return this.mode === 'single'
    }
  },
  methods: {
    // 点击选择单程
    selectSingle () {
      this.mode = 'single'
    },
    // 点击选择往返
    selectRound () {
      this.mode = 'round'
    },
    // 换字selected和unselected效果
    changeEnterHandle () {
      this.changeSelected = true
    },
    changeLeaveHandle () {
      this.changeSelected = false
    },
    // 交换出发和到底地点
    changeCity () {
      const _startCity = this.startCity
      this.startCity = this.arriveCity
      this.arriveCity = _startCity
    },
    // 点击选择出发input的时候, 让出发的下拉框出现, 到达的下拉框隐藏
    startHandle () {
      this.isStartShow = !this.isStartShow
      this.isArriveShow = false
    },
    // 拿到子组件input-city中的选中的出发city, 将city赋给this.startCity, 并以value的形式传回子组件
    handleStartCity (city) {
      this.startCity = city
      this.isStartShow = false
    },
    // 点击选择到达input的时候, 让到达的下拉框出现, 出发的下拉框隐藏
    arriveHandle () {
      this.isStartShow = false
      this.isArriveShow = !this.isArriveShow
    },
    // 拿到子组件input-city中的选中的到达city, 将city赋给this.startCity, 并以value的形式传回子组件
    handleArriveCIty (city) {
      this.arriveCity = city
      this.isArriveShow = false
    }
  },
  updated () {
    document.addEventListener('click', () => {
      console.log('click')
      this.isArriveShow = false
      this.isStartShow = false
    }, false)
  }
}
</script>
<style lang="stylus" scoped>
.grey
  color: grey
.searcher-bd
  width: 548px
  margin: 50px auto
  border: 1px solid #ccc
  padding: 10px
  .footer
    .search-btn
      width: 160px
      border: 0
      padding: 4px 0
      font-size: 16px
      color: #3d3d3d
      border-radius: 3px
      background-color: #FFC300
      box-shadow: 0 2px 0 #EEB600
      margin-top: 5px
      float: right
  .city-date
    position: relative
    margin-bottom: 20px
    .change
      position: absolute
      left: 260px
      top: 32px
      width: 25px
      height: 65px
      background: url(../assets/images/huan.png) no-repeat
      cursor: pointer
    .change-select
      background: url(../assets/images/huan.png) no-repeat -28px 0
    .city
      margin-right: 28px
    .city, .date
      // width: 260px
      .select-wrap
        padding: 4px 0
      .input-item
        border: 1px solid #c7d1e4
        border-radius: 3px
        input
          width: 250px
          height: 20px
          padding: 4px
          font-size: 14px
          line-height: 20px
  .select-mode
    label
      padding-right: 15px
      cursor: pointer
      .selected
        display: inline-block
        width: 13px
        height: 13px
        vertical-align: -2px
        background: url(../assets/images/select.png) no-repeat 0 0
      .unselected
        display: inline-block
        width: 13px
        height: 13px
        vertical-align: -2px
        background: url(../assets/images/select.png) no-repeat 0 -50px
</style>
