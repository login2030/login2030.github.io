<template>
	<div>
		<h3 class="text-xs-center">Скрипты и компоненты</h3>
		<v-container grid-list-md>
			<v-layout row wrap>
				<v-flex xl3 lg4 md6 sm6 xs12 v-for="i in 6" :key="i">
			    	<v-card>
				    	<v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
				    	</v-card-media>
				    	<v-card-title primary-title>
				        	<div>
				        		<h3 class="headline mb-0">Kangaroo Valley Safari</h3>
				        		<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
				        	</div>
				    	</v-card-title>
				    	<v-card-actions>
				    		<v-btn flat color="orange">Share</v-btn>
				    		<v-btn flat color="orange">Explore</v-btn>
				    	</v-card-actions>
				    </v-card>
			    </v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
export default {
	
}
</script>

