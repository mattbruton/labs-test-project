<template lang="html">
  <div>
    <input type="text" spellcheck="false" v-model="urlInput" autofocus=autofocus/>
    <button @click="emitUrlInput">{{buttonText}}</button>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        buttonText: "Test",
        urlInput: ""
      }
    },
    methods: {
      emitUrlInput() {
        this.$emit('emitUrlInput', this.formatUrl(this.urlInput));
      },
      formatUrl(url) {
        return encodeURIComponent(url.trim());
      }
    }
  }
</script>

<style lang="scss" scoped>

  * {
    background-color: #908070;
    font-family:Lato, sans-serif;
  }

  div {
    border-radius: 2.5px;
    border-width: inherit;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.15);
    display:grid;
    grid-template-columns: 75% 25%;
    margin:auto;
    margin-top: 0;
    min-height: 60px;
    width: 40%;
    @media screen and (max-width: 1400px) {
      width: 50%;
    }
    @media screen and (max-width: 1000px) {
      width: 62.5%;
    }
    @media screen and (max-width: 600px) {
      width: 90%;
    }
  }

  button {
    border-radius: 0 2.5px 2.5px 0;
    border-style: none;
    color: snow;
    font-size: 1.25em;
    min-height: 65px;
  }

  input {
    background-color: snow;
    border-radius: 2.5px 0 0 2.5px;
    border-style: none;
    min-height: 65px;
    padding-left: 5px;
    &:focus {
      outline-style: none;
    }
    &[type=text] {
      font-size: 1.75em;
    };
  }
</style>
