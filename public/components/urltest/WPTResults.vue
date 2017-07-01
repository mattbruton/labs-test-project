<template lang="html">
  <div class="container__wpt-results">
    <div v-for="item in content">
      <h3>{{item.name}}</h3>
      <h4>{{item.value}}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        content: [{
          name: "TTFB",
          value: "1000ms"
        },{
          name: "Speed Index",
          value: "1500"
        }, {
          name: "Page Size",
          value: "4999kb"
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container__wpt-results {
    width: 65%;
    background-color: #4E5A65;
    color: snow;
    border-radius: 2.5px;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.15);
    height: 50%;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 1400px) {
      width: 70%;
    }
    @media screen and (max-width: 1000px) {
      width: 80.5%;
    }
    @media screen and (max-width: 600px) {
      width: 95%;
    }
  }

  h3,h4 {
    text-align: center;
    font-family: 'Lato', sans-serif;
  }

  h3 {
    border-bottom: 2px solid snow;
  }
</style>
