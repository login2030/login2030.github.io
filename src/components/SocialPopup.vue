<template>
	<v-dialog v-model="socialPopup" max-width="350px">
		<v-card> 
			<v-card-title>
				<h5 class="mb-0">В сети<v-icon color="green">fiber_manual_record</v-icon></h5>
			</v-card-title>
			<v-card-text class="pt-0">
				<social></social>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>
<script>
import bus from '../bus';
import Social from './Social.vue';
export default {
	components: {
		Social
	},
	data() {
		return {
			socialPopup: false
		}
	},
	created() {
		bus.$on('openSocialPopup', ()=> {
			this.socialPopup = true;
		});
	}
}
</script>

