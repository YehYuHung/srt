<template>
  <div class="outer-box">
    <h3>測試測試</h3>
    <div class="box1 box-style">
      <span>測試區1號</span>
      <button id="btn1" :click="ajax1">哈哈</button>
    </div>
    <div class="box2 box-style">
      <span>測試區2號</span>
      <button id="btn2" :click="ajax2">拉拉</button>
    </div>
    <div class="box3 box-style">
      <span>測試區3號</span>
      <button id="btn3" :click="ajax3">西西</button>
    </div>
    <div class="box4 box-style">
      <span>測試區4號</span>
      <button id="btn4" :click="ajax4">嘿嘿</button>
    </div>
  </div>
</template>

<style scoped>
.box-style {
  display: flex;
  width: 30vw;
  justify-content: space-between;
}
.outer-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>


<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>
