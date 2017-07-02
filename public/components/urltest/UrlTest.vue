<template lang="html">
  <div class="container__url-test">
    <div class="container__input">
      <h1>Enter a URL to test:</h1>
      <url-input @emitUrlInput="getUrlData"></url-input>
    </div>
    <wpt-results :wptData='wptData' />
    <seo-results :seoData='seoData'></seo-results>
  </div>
</template>

<script>
  import axios from 'axios';
  import SeoResults from './SeoResults.vue';
  import UrlInput from './UrlInput.vue';
  import WPTResults from './WPTResults.vue';

  export default {
    name: 'url-test',
    components: {
      'seo-results': SeoResults,
      'url-input': UrlInput,
      'wpt-results': WPTResults
    },
    data: function() {
      return {
        wptData: null,
        seoData: null
      }
    },
    methods: {
      getUrlData(url) {
        axios.get(`./api/testUrl/${url}`)
        .then((response) => {
          this.setDataObjects(response.data);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })
      },
      setDataObjects(res) {
        this.wptData = res.wptData;
        this.seoData = res.seoData;
      }
    }
  }
</script>

<style lang="scss" scoped>

  .container__url-test {
    background-color: slategrey;
    display: grid;
    grid-gap: 20px;
    grid-template-rows: 27.5% 13.5% minmax(20%, 60%);
    min-height: 100vh;
    justify-items: center;
    overflow: hidden;
    @media screen and (max-width: 600px) {
      overflow: auto;
    }
  }

  .container__input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 80%;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }

  h1 {
    text-align:center;
    font-family: 'Lato', sans-serif;
    color: snow;
  }
</style>
