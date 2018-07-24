
import Vue from 'vue';

import App from './App.vue';

import './scss/common.scss';

import './scss/app.scss';

new Vue({
  el: '#app',
  render: (createElement) => {
    return createElement(App);
  }
});
