import Vue from 'vue';
import app from './app.vue';
import Vuetify from 'vuetify';
// import VueRouter from 'vue-router';
import VueCarousel from 'vue-carousel';
import './stylus/main.styl';

// Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueCarousel);

new Vue({
	el: '#app',
	render: h => h(app)
});
