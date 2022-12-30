import Vue from "vue"
import App from "./App.vue"
import "./assets/style/page.css"
import Resetter from "vue-reset-data"

Vue.config.productionTip = false
Vue.use(Resetter)

new Vue({
  render: (h) => h(App),
}).$mount("#app")
