import 'tether';
import 'jquery';
import 'bootstrap';
import 'lodash';

import Vue from 'vue';
import Hello from './components/Hello.vue';
import Goodbye from './components/Goodbye.vue';
const APPS = {
  Hello,
  Goodbye
};

function renderAppInElement(el) {
  var App = APPS[el.id];
  if (!App) return;

  // const props = Object.assign({}, el.dataset);
  // console.log('Props: ',props)

  let vm = new Vue({
    el,
    render: h => h(App)
  })


}



document.querySelectorAll('.__vue-root').forEach(renderAppInElement)
