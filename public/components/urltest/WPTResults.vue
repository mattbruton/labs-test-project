<template lang='html'>
  <div v-if='wptData' class='container__wpt-results'>
    <div v-for='(value, key) in wptData'>
      <h3>{{key}}</h3>
      <h4>{{value}}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['wptData']
  }
</script>

<style lang='scss' scoped>
  .container__wpt-results {
    width: 80%;
    background-color: #4E5A65;
    border-radius: 2.5px;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 600px) {
      width: 95%;
    }
  }

  h3,h4 {
    color: snow;
    font-family: 'Lato', sans-serif;
    text-align: center;
  }

  h3 {
    border-bottom: 2px solid snow;
  }
</style>
