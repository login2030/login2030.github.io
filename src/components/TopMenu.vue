<template>
	<v-toolbar dark fixed color="grey darken-3">
		<v-badge overlap bottom class="c-avatar-icon" color="white">
			<span slot="badge">
				<v-icon color="green">fiber_manual_record</v-icon>
			</span>
			<v-avatar @click="openSocialPopup" size="50px">
				<img src="/images/avatar-fake-2.jpg" alt="">
			</v-avatar>
		</v-badge>
		<v-spacer></v-spacer>
		<v-tooltip left color="blue darken2">
			<v-btn @click="openSocialPopup" icon slot="activator">
				<v-icon>phone_in_talk</v-icon>
			</v-btn>
			<span>Контакты</span>
		</v-tooltip>
		<v-tooltip left color="green darken2">
			<v-btn @click="openSocialPopup" icon slot="activator">
				<v-icon color="green darken2">battery_charging_full</v-icon>
			</v-btn>
			<span>Готов к работе!</span>
		</v-tooltip>
	</v-toolbar>
</template>

<script>
import bus from '../bus';
export default {
	data() {
		return {
			
		};
	},
	computed: {
		
	},
	methods: {
		openSocialPopup() {
			bus.$emit('openSocialPopup');
		}
	}
};
</script>