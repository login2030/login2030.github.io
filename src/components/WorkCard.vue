<template>
	<v-card>
    	<v-card-media :src="dataImage" height="200px">
    	</v-card-media>
    	<v-card-title primary-title>
        	<div>
        		<h3 class="headline mb-0">
					{{dataHeader}}
					<v-icon v-if="dataMobile" white class="c-icon is_small">phone_iphone</v-icon>
				</h3>
        		<div v-html="dataDesc" class="c-description"></div>
        	</div>
    	</v-card-title>
    	<v-card-actions>
			<a v-if="dataLink" :href="dataLink" class="c-link is_block" target="_blank">
    			<v-btn flat tag="div" :color="themeBtn">Посмотреть сайт <v-icon right :color="themeIcon" class="c-icon is_small">open_in_new</v-icon></v-btn>
			</a>
			<div v-else>
    			<v-btn flat :color="themeBtn">Посмотреть <v-icon right :color="themeIcon" class="c-icon is_small">call_made</v-icon></v-btn>
			</div>
    	</v-card-actions>
    </v-card>
</template>
<script>
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
		}
	},
	data() {
		return {
			themeBtn: 'green darken-2 white--text',
			themeIcon: 'green darken-2'
		}
	}
}
</script>

