import Vue from "vue"
import App from "./views/App.vue"


new Vue({
  el: "#app",
  // App fara da punto di ingresso per tutti i componenti scritti in html di Vue.js
  render: (renderComponent) => renderComponent(App)
  // routere deve avere come valore un istanza di VueRouter()
})