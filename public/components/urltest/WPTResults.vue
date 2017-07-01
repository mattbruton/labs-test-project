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
