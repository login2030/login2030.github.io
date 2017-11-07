<template>
	<div>
		<h3 class="text-xs-center">Использую в работе</h3>
		<v-container grid-list-md text-xs-center>
			<v-layout row wrap>
				<v-flex sm6 xs10 offset-sm3 offset-xs1>
					<carousel
						:perPage="2"
						:perPageCustom="perPageCustom"
						:autoplay="true"
						:paginationEnabled="false"
						:autoplayHoverPause="true"
						:autoplayTimeout="10000"
						:navigationEnabled="true"
						:navigationPrevLabel="`<i class='material-icons'>keyboard_arrow_left</i>`"
						:navigationNextLabel="`<i class='material-icons'>keyboard_arrow_right</i>`"
						:loop="true">
						<slide v-for="item in carousel" :key="item.name">
							<img class="c-skill-img" :src="'/images/carousel/' + item.name + '.jpg'" :alt="item.name">
						</slide>
					</carousel>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
	components: {
		Carousel,
		Slide
	},
	data() {
		return {
			perPageCustom: [
				[960, 3],
				[1264, 4],
				[1920, 6],
			],
			carousel: [{
				name: 'html5'
			}, {
				name: 'css3'
			}, {
				name: 'js'
			}, {
				name: 'php-mysql'
			}, {
				name: 'wordpress'
			}, {
				name: 'es6'
			}, {
				name: 'nodejs'
			}, {
				name: 'jquery'
			}, {
				name: 'vuejs'
			}, {
				name: 'vuetify'
			}, {
				name: 'materializecss'
			}, {
				name: 'webpack'
			}, {
				name: 'gulp'
			}, {
				name: 'stylus'
			}, {
				name: 'sass'
			}, {
				name: 'less'
			}, {
				name: 'svg'
			}, {
				name: 'leaflet'
			}, {
				name: 'bem'
			}]
		}
	}
}
</script>

