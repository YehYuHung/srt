<template>
  <div>
    <div>
      <h1>i123456789</h1>
    </div>
    <h3>{{ data }}</h3>
  </div>
</template>

<style scoped>
</style>

<script>
function getQueryName(queryStr) {
  console.log(queryStr);
  return queryStr;
}

export default {
  name: "PassArray",
  data() {
    return {
      data: null,
    };
  },
  props: {},
  method: {},
  beforeMount() {
    this.data = getQueryName(this.$route.query.Item);
  },
};
</script>