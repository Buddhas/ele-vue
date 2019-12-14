<template>
  <span class="bubble">
    {{ num }}
  </span>
</template>

<script>
export default {
  name: 'Bubble',
  props: {
    num: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .bubble {
    display: inline-block;
    padding: 0 5px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 16px;
    font-family: Helvetica;
    font-weight: 700;
    font-size: 10px;
    color: #fff;
    background: linear-gradient(90deg,#fc9153,#f01414);
  }
</style>
