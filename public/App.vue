<template lang="html">
  <div>
    <url-test></url-test>
  </div>
</template>

<script>
  import UrlTest from './components/urltest/UrlTest.vue';

  export default {
    name: 'app',
    components: {
      'url-test': UrlTest
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="css">
</style>
