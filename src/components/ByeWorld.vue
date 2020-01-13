<template>
  <div>
    <a :href="`${publicPath}files/2015-16535 박용훈_국내현장학습 계획서.hwp`" target="_self" download="sample.hwp">not found</a>
    <router-link :to="{name: 'home'}">go home</router-link>
  </div>
</template>

<script>
export default {
  name: 'ByeWorld',
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    downloadFile () {
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>

</style>
