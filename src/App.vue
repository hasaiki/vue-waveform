<template>
  <div id="app">
    <div v-show="isshow">
      <vue-waveplayer  @ready=ready ref="mycom" :range="0.1" :WIDTH="rangeV" :HEIGHT="60" bgColor="#fff" :type="type" :playType="playtype" :URL="URL"  ></vue-waveplayer>
    </div>
    <h1>1111</h1>
     <h1>1111</h1>
      <h1>1111</h1>
       <h1>1111</h1>
        <h1>1111</h1>
         <h1>1111</h1>
    <select v-model="web">
      <option value ="./static/1.aac">./static/1.aac</option>
      <option value ="./static/3.aac">./static/3.aac</option>
      <option value ="./static/4.aac">./static/4.aac</option>
      <option value ="./static/2866.aac">./static/2866.aac</option>
    </select>
    <button @click="attack">点击切换音频地址</button>
    <button @click="stop">点击关闭音频地址</button>
    <input type="range" v-model="inputV" @change="change" max=1500 min=500>
    <button @click="click">点击显示音频插件</button>
    <div>
      <wsy></wsy>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import wsy from './ws'
export default {
  name: 'app',
  components: {
    wsy
  },
  data() {
    return {
      isshow: true,
      selectid: 8082,
      web: '',
      arraybuffer: undefined,
      type: 'line',
      rangeV: 1500,
      inputV: 0,
      playtype: 2,
      URL: ''
    }
  },
  methods: {
    attack() {
      this.URL = this.web
    },
    stop() {
      this.$refs.mycom.stop()
    },
    change(e) {
      this.rangeV = this.inputV
      this.$nextTick(() => {
        this.$refs.mycom.init()
      })
    },
    click() {
      this.isshow = true
      this.web = './static/1.aac'
    },
    ready() {
      // this.$refs.mycom.seekTo(this.timeline)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
