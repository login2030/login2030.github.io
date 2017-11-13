<template>
<a href="https://codedojo.ru/" target="_blank" class="c-link">
	<v-tooltip top>
		<v-btn icon tag="span" slot="activator" color="green">
			<img src="/images/codedojo.png" alt="">
		</v-btn>
		<span>{{dataTitle}}</span>
	</v-tooltip>
</a>
</template>
<script>
export default {
	props: {
		dataTitle: {
			type: String,
			required: false,
			default: 'CodeDojo'
		}
	}
}
</script>

