<template>
  <div class="input-item">
    <input type="text" v-model="value" :placeholder="placeHolder" @click.stop="handleSelect">
    <div class="select-box" v-show="isShow"  @click.stop="stopBubble">
      <div class="header">
        <span>热门城市/国家(支持汉字/拼音/英文字母)</span>
      </div>
      <ul class="tab-bar clear">
        <li :class="[selectIndex === index ? 'selected' : '']" @click.stop="handleTab(index)" v-for="(item, index) in tabContent" :key="index">
          <span>{{item}}</span>
        </li>
      </ul>
      <div class="city-list">
        <dl v-for="(item, index) in cityList[selectIndex]" :key="index">
          <dt>{{item.index}}</dt>
          <dd>
            <span @click.stop="selectItem(item)" v-for="(item, index) in item.citys" :key="index">{{item}}</span>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'input-city',
  props: {
    placeHolder: {
      type: String,
      default: '城市名'
    },
    value: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tabContent: ['热门城市', 'ABCDE', 'FGHJ', 'KLMNP', 'QRSTW', 'XYZ'],
      selectIndex: 0,
      cityList: [
        [
          {
            index: '',
            citys: ['北京', '上海', '广州', '深圳', '成都']
          },
          {
            index: '',
            citys: ['重庆', '厦门', '昆明', '杭州', '西安']
          },
          {
            index: '',
            citys: ['武汉', '长沙', '南京', '大连', '郑州']
          },
          {
            index: '',
            citys: ['青岛', '天津', '三亚', '海口', '乌鲁木齐']
          }
        ],
        [
          {
            index: 'A',
            citys: ['安庆', '阿勒泰', '安康', '阿克苏', '安顺']
          },
          {
            index: 'B',
            citys: ['包头', '北海', '北京', '百色', '保山']
          },
          {
            index: 'C',
            citys: ['长治', '长春', '常州', '昌都', '朝阳', '常德', '长白山', '成都', '重庆', '长沙', '赤峰', '潮州']
          },
          {
            index: 'D',
            citys: ['青岛', '天津', '三亚', '海口', '乌鲁木齐']
          },
          {
            index: 'E',
            citys: ['大同', '大连', '达县', '东营', '大庆', '丹东', '大理', '敦煌', '稻城', '德令哈']
          }
        ],
        [
          {
            index: 'F',
            citys: ['福州', '阜阳']
          },
          {
            index: 'G',
            citys: ['贵阳', '桂林', '广州', '广元', '格尔木', '固原']
          },
          {
            index: 'H',
            citys: ['呼和浩特', '哈密', '黑河', '海拉尔', '哈尔滨', '海口', '黄山', '杭州', '邯郸', '合肥', '汉中', '和田', '淮安', '河池']
          },
          {
            index: 'J',
            citys: ['晋江', '九寨沟', '锦州', '景德镇', '嘉峪关', '井冈山', '济宁', '九江', '佳木斯', '济南', '揭阳']
          }
        ],
        [
          {
            index: 'K',
            citys: ['喀什', '昆明', '康定', '克拉玛依', '库尔勒', '库车']
          },
          {
            index: 'L',
            citys: ['兰州', '洛阳', '丽江', '拉萨', '黎平', '连城', '连云港', '临沧', '临汾', '临沂', '林芝', '六盘水', '柳州', '泸州']
          },
          {
            index: 'M',
            citys: ['牡丹江', '芒市', '满洲里', '绵阳', '梅县', '漠河']
          },
          {
            index: 'N',
            citys: ['南京', '南充', '南宁', '南阳', '南通', '那拉提', '南昌', '宁波']
          },
          {
            index: 'P',
            citys: ['攀枝花']
          }
        ],
        [
          {
            index: 'Q',
            citys: ['衢州', '秦皇岛', '庆阳', '齐齐哈尔', '青岛']
          },
          {
            index: 'R',
            citys: ['深圳', '石家庄', '三亚', '沈阳', '上海', '思茅', '神农架', '邵阳']
          },
          {
            index: 'S',
            citys: ['牡丹江', '芒市', '满洲里', '绵阳', '梅县', '漠河']
          },
          {
            index: 'T',
            citys: ['铜仁', '塔城', '腾冲', '台州', '泰州', '天津', '通辽', '太原']
          },
          {
            index: 'W',
            citys: ['威海', '武汉', '梧州', '文山', '无锡', '潍坊', '武夷山', '乌兰浩特', '温州', '乌鲁木齐', '万州', '乌海']
          }
        ],
        [
          {
            index: 'X',
            citys: ['兴义', '西昌', '厦门', '西安', '襄阳', '西宁', '锡林浩特', '西双版纳', '忻州', '徐州']
          },
          {
            index: 'Y',
            citys: ['义乌', '永州', '榆林', '延安', '运城', '烟台', '银川', '宜昌', '宜宾', '盐城', '延吉', '玉树', '伊宁', '扬州']
          },
          {
            index: 'Z',
            citys: ['珠海', '昭通', '张家界', '舟山', '郑州', '中卫', '芷江', '湛江', '遵义', '新舟', '遵义', '茅台']
          }
        ]
      ]
    }
  },
  methods: {
    // 点击input后派发select事件, 在父组件里操作选择城市的隐藏和显示
    handleSelect () {
      this.$emit('select')
    },
    // 根据当前点击下标添加点击状态
    handleTab (index) {
      this.selectIndex = index
    },
    // 点击选择城市时, 派发city事件, 并把选中的city传到父组件
    selectItem (item) {
      this.$emit('city', item)
    },
    stopBubble () {}
  }
}
</script>
<style lang="stylus" scoped>
.input-item
  border: 1px solid #c7d1e4
  border-radius: 3px
  position: relative
  .select-box
    position: absolute
    top: 25px
    left: -1px
    width: 418px
    padding: 5px 0
    border: 1px solid #bec2c4
    z-index: 100
    background-color: #fff
    .city-list
      padding: 6px 0
      dl
        dt
          float: left
          padding-left: 3px
          color: #ff0000
          font-weight: 500
        dd
          margin-left: 15px
          span
            display: inline-block
            width: 66px
            padding-left:4px
            color: #404040
            margin-bottom: 5px
            cursor: pointer
    .tab-bar
      border-bottom: 1px solid #999
      padding: 5px 3px 0
      li
        float: left
        padding: 0 6px 2px
        margin-right: 3px
        font-weight: 500
        cursor: pointer
        margin-bottom: -2px
        border: 1px solid transparent
        &:hover
          color: #f00
        &.selected
          border: 1px solid #999
          border-bottom: 1px solid #fff
          background: #fff
    .header
      span
        color: #355976
        font-size: 12px
        padding: 3px
        font-weight: 500
  input
    width: 250px
    height: 20px
    padding: 4px
    font-size: 14px
    line-height: 20px
</style>
