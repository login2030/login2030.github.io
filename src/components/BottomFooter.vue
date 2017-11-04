<template>
	<v-footer color="grey darken-3" class="c-footer">
		<social data-parent="c-footer"></social>
		<v-spacer></v-spacer>
		<span class="white--text">&copy; {{date}} <a class="light-blue--text" target="_blank" href="https://vuetifyjs.com">Powered by Vuetify</a></span>
	</v-footer>
</template>

<script>
	import Social from './Social.vue';
	export default {
		components: {
			Social
		},
		data() {
			return {
				date: new Date().getFullYear(),
			}
		}
	}
</script>
