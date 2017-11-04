<template>
	<div>
		<div>
			<h3 class="text-xs-center">Скрипты и компоненты</h3>
			<v-container grid-list-md>
				<v-layout row wrap>
					<v-flex xl3 lg4 md6 sm6 xs12 v-for="script in scripts" :key="script.img">
						<work-card
							:data-image="'/images/scripts/'+script.img+'.jpg'"
							:data-header="script.header"
							:data-desc="script.desc"
							:data-component="script.component">
						</work-card>
				    </v-flex>
				</v-layout>
			</v-container>
		</div>
		<div>
			<v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" scrollable>
				<v-card class="c-script-popup">
					<v-toolbar style="flex: 0 0 auto;" dark class="primary">
						<v-btn icon @click.native="closeScriptPopup" dark>
							<v-icon>close</v-icon>
						</v-btn>
						<v-toolbar-title>{{headerPopup}}</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<riofitness-svg-map v-if="component === 'RiofitnessSvgMap'"></riofitness-svg-map>
					</v-card-text>
				</v-card>
			</v-dialog>
		</div>
	</div>
</template>
<script>
import bus from '../bus';
import scripts from '../data/scripts';
import WorkCard from './WorkCard.vue';
import RiofitnessSvgMap from './scripts/RiofitnessSvgMap.vue';

export default {
	components: {
		WorkCard,
		RiofitnessSvgMap
	},
	data() {
		return {
			scripts,
			dialog: false,
			component: '',
			headerPopup: ''
		}
	},
	created() {
		bus.$on('openPopupScript', (comp, header) => {
			this.dialog = true;
			this.component = comp;
			this.headerPopup = header;
		});
	},
	methods: {
		closeScriptPopup() {
			this.dialog = false;
		}
	}
}
</script>

