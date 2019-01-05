// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import Mint from 'mint-ui'
// Vue.use(Mint)
import 'mint-ui/lib/style.css'
import {Navbar, TabContainer, TabContainerItem, TabItem, Button, Swipe, SwipeItem} from 'mint-ui'

import axios from 'axios'
import Qs from 'qs'

Vue.prototype.$axios = axios;
Vue.prototype.qs = Qs;

Vue.component(Navbar.name, Navbar);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(TabItem.name, TabItem);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import './style/reset.scss';


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
