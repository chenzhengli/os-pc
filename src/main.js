import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Select ,Table,Input} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'
//导入的css样式
import './css/reset.css';
import './css/index.scss';
import './css/aside.scss';
import './css/header.scss';
import './css/cataloglist.scss';
import './css/main.scss';
import './css/foodlist.scss';

Vue.use(Button)
Vue.use(Select)
Vue.use(Table)
Vue.use(Input)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
