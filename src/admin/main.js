import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
Vue.use(SimpleVueValidation);
import App from './App.vue'

new Vue({
    el: "#app-root",
    render: h => h(App)
});