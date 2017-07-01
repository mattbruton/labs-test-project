<template lang="html">
  <div class="seo-results">
    <div class="results-container">
      <seo-results-detail
        :key=result.test
        :resultData=result
        v-for="result in results" />
    </div>
  </div>
</template>

<script>
import SeoResultsDetail from './SeoResultDetail.vue';

export default {
  components: {
    'seo-results-detail': SeoResultsDetail
  },
  data: function() {
    return {
      results: [{
        test: 'Single H1 Element',
        passed: false,
        tip: "This test will fail if the page contains more than one H1 element."
      }, {
        test: 'Meta Description',
        passed: true,
        tip: "A good description is between 135-160 characters in length."
      }, {
        test: 'Title Length',
        passed: true,
        tip: "Titles should be 55 characters or less in length."
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .seo-results {
    background-color: #4E5A65;
    border-radius: 2.5px;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.15);
    display: grid;
    margin-bottom: 30px;
    min-height: 90%;
    width: 80%;
    @media screen and (max-width: 950px) {
      width: 95%;
    }
  }

  .results-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 40%);
    grid-gap: 20px;
    justify-content: center;
    padding: 20px 0 20px 0;
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(auto-fit, 90%);
    }
  }
</style>
