<template>
	<div>
		<h3 class="text-xs-center">Скрипты и компоненты</h3>
		<v-container grid-list-md>
			<v-layout row wrap>
				<v-flex xl3 lg4 md6 sm6 xs12 v-for="script in scripts" :key="script.img">
					<work-card
						:data-image="'/images/scripts/'+script.img+'.jpg'"
						:data-header="script.header"
						:data-desc="script.desc">
					</work-card>
			    </v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
import scripts from '../data/scripts';
import WorkCard from './WorkCard.vue';
export default {
	components: {
		WorkCard
	},
	data() {
		return {
			scripts
		}
	}
}
</script>

