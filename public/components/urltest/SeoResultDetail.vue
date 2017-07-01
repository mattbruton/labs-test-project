<template lang="html">
  <div class="result">
    <div class="result__header">
      <h3>{{resultData.test}}</h3>
    </div>
    <span><i :class="symbol" aria-hidden="true"></i></span>
    <p>{{resultData.tip}}</p>
  </div>
</template>

<script>
  export default {
    props: ['resultData'],
    data: function() {
      return {
        symbol: this.getSymbol(this.resultData.passed)
      }
    },
    methods: {
      getSymbol (bool) {
        return bool ? "fa fa-check-circle-o" : "fa fa-times-circle-o"
      }
    }
  }
</script>

<style lang="scss" scoped>
  h3 {
    color: snow;
  }

  h3, p {
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    text-align: center;
  }

  p {
    margin: 0;
    @media screen and (max-width: 580px) {
      padding-bottom: 20px;
    }
  }

  span {
    border-radius: 2.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      font-size: 3.25rem;
    }
  }

  .fa-check-circle-o {
    color: #11BF11;
  }

  .fa-times-circle-o {
    color: red;
  }

  .result {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 3px 15px rgba(0,0,0,0.2);
    display: grid;
    grid-gap: 10px;
    grid-template-rows: 35% 30% 35%;
  }

  .result__header {
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: #908070;
    border-radius: 5px 5px 0 0;
  }
</style>
