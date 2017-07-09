<template lang="html">
  <div>
    <input type="text"
      autofocus=autofocus
      :class="{error: isInvalidInput}"
      @keyup="clearError"
      spellcheck="false"
      v-model="urlInput"/>
    <button @click="emitUrlInput">{{buttonText}}</button>
  </div>
</template>

<script>
  import isUrl from 'validator/lib/isURL';

  export default {
    data: function() {
      return {
        buttonText: "Test Url",
        urlInput: "",
        isInvalidInput: false
      }
    },
    methods: {
      clearError() {
        this.isInvalidInput = false;
        this.buttonText = "Test Url";
      },
      displayError() {
        this.isInvalidInput = true;
        this.buttonText = "Invalid Url";
      },
      emitUrlInput() {
        isUrl(this.urlInput.toLowerCase(), { protocols: ['http', 'https'], require_protocol: true})
          ? this.$emit('emitUrlInput', this.formatUrl(this.urlInput.toLowerCase()))
          : this.displayError();
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

  .error {
    border: 2px solid red;
  }
</style>
