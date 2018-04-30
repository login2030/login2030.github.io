<template>
	<v-app class="c-app">
		<top-menu></top-menu>
		<main>
			<v-content>
				<section class="mt-3 mb-4">
					<intro></intro>
				</section>
				<section class="mb-5">
					<skills-slider></skills-slider>
				</section>
				<section class="mb-5">
					<scripts></scripts>
				</section>
				<section class="mb-5">
					<sites></sites>
				</section>
			</v-content>
		</main>
		<bottom-footer></bottom-footer>
		<social-popup></social-popup>
	</v-app>
</template>

<script>
import TopMenu from "./components/TopMenu.vue";
import BottomFooter from "./components/BottomFooter.vue";
import Intro from "./components/Intro.vue";
import Scripts from "./components/Scripts.vue";
import Sites from "./components/Sites.vue";
import SocialPopup from "./components/SocialPopup.vue";
import SkillsSlider from "./components/SkillsSlider.vue";

export default {
	components: {
		TopMenu,
	BottomFooter,
	Intro,
	Scripts,
	Sites,
	SocialPopup,
	SkillsSlider
	},
	data() {
		return {};
	},
	computed: {}
};
</script>
