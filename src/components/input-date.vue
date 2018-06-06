<template>
  <div class="input-item">
    <input type="text" v-model="value" :placeholder="placeHolder">
  </div>
</template>
<script>
export default {
  name: 'input-date',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeHolder: {
      type: String,
      default: 'yyyy-mm-dd'
    }
  }
}
</script>

<style lang="stylus" scoped>
.input-item
  border: 1px solid #c7d1e4
  border-radius: 3px
  position: relative

  input
    width: 250px
    height: 20px
    padding: 4px
    font-size: 14px
    line-height: 20px
</style>
