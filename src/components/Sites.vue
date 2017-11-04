<template>
	<div>
		<h3 class="text-xs-center">Верстка сайтов</h3>
		<v-container grid-list-md>
			<v-layout row wrap>
				<v-flex xl3 lg4 md6 sm6 xs12 v-for="site in sites" :key="site.img">
					<work-card
						:data-mobile="site.mobile"
						:data-image="'/images/sites/'+site.img+'.jpg'"
						:data-header="site.header"
						:data-desc="site.desc"
						:data-link="site.link">
					</work-card>
			    </v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import sites from '../data/sites';
import WorkCard from './WorkCard.vue';
export default {
	components: {
		WorkCard
	},
	data() {
		return {
			sites
		}
	}
}
</script>