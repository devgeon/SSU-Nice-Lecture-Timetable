import Vue from 'vue'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

import router from './router'

//////////bootstrapvue
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

// Multi Language
import VueI18n from 'vue-i18n'
import kr from './locales/kr.json'

import { getCurrentLanguage } from './utils'
//Vue.use(BootstrapVue)//usebootstrap
//Vue.use(IconsPlugin)

Vue.use(VueI18n);
const messages = { kr: kr }
const locale = getCurrentLanguage();
const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: 'kr',
  messages
});

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
