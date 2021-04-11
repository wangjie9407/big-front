import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import './styles/theme.less';
import './styles/global.less';
import changeBreadcrumb from './router/breadcrumb';

Vue.config.productionTip = false
Vue.use(Antd);
// 设置面包屑
changeBreadcrumb(router, store);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
