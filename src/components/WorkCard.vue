<template>
	<v-card :title="dataHeader">
    	<v-card-media :src="dataImage" height="200px">
    	</v-card-media>
    	<v-card-title primary-title>
        	<div class="is-full-width">
        		<h3 class="headline mb-0 is-short-text-no-mobile">
					<v-icon v-if="dataMobile" white class="c-icon is_small">phone_iphone</v-icon>
					{{dataHeader}}
				</h3>
        		<div v-html="dataDesc" class="c-description"></div>
        	</div>
    	</v-card-title>
    	<v-card-actions>
			<a v-if="dataStatic" :href="dataStatic" class="c-link is_block is-full-after" target="_blank">
    			<v-btn flat tag="div" :color="themeBtn">Посмотреть <v-icon right :color="themeIcon" class="c-icon is_small">open_in_new</v-icon></v-btn>
			</a>
			<a v-if="dataLink" :href="dataLink" class="c-link is_block is-full-after" target="_blank">
    			<v-btn flat tag="div" :color="themeBtn">Посмотреть сайт <v-icon right :color="themeIcon" class="c-icon is_small">open_in_new</v-icon></v-btn>
			</a>
			<div class="is-full-after" v-if="dataComponent" @click.stop="openPopupScript($event, dataComponent, dataHeader)">
    			<v-btn flat :color="themeBtn">Посмотреть <v-icon right :color="themeIcon" class="c-icon is_small">call_made</v-icon></v-btn>
			</div>
    	</v-card-actions>
    </v-card>
</template>
<script>
import bus from '../bus';
export default {
	props: {
		dataHeader: {
			required: true
		},
		dataImage: {
			required: true
		},
		dataLink: {
			required: false
		},
		dataDesc: {
			required: true
		},
		dataMobile: {
			required: false
		},
		dataComponent: {
			required: false
		},
		dataStatic: {
			required: false
		}
	},
	data() {
		return {
			themeBtn: 'green darken-2 white--text',
			themeIcon: 'green darken-2'
		}
	},
	methods: {
		openPopupScript(e, comp, header) {
			bus.$emit('openPopupScript', comp, header);
		}
	}
}
</script>

