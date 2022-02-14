import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import 'normalize.css/normalize.css'
import '@/assets/styles/global.css'
import '@/assets/styles/home.css'
import '@/assets/styles/font/fontsize.css'
import 'element-ui/lib/theme-chalk/index.css'

import router from '@/router'

Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    // store,
    render: h => h(App)
})
