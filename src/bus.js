import Vue from 'vue';
export default new Vue();
// в методе компонента A
// bus.$emit('id-selected', 1)
// в обработчике created компонента B
// bus.$on('id-selected', function (id) {
	// ...
// })