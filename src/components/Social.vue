<template>
	<div>
		<a v-for="item in social" :href="item.link" :key="item.id" :class="['c-social', {[parent + '__c-social']: parent}]" target="_blank">
			<v-tooltip top :color="item.theme" :class="['c-social__item', 'is_' + item.id]">
					<v-btn icon tag="span" slot="activator" color="grey lighten-3">
						<v-icon :color="item.theme">{{item.icon}}</v-icon>
					</v-btn>
				<span>{{item.name}}</span>
			</v-tooltip>
		</a>
	</div>
</template>

<script>
	export default {
		props: {
			dataParent: {
				required: false
			}
		},
		data() {
			return {
				parent: this.dataParent,
				social: [{
					id: 0,
					name: 'Телеграм',
					link: 'https://t.me/login2030',
					icon: 'fa-telegram',
					theme: 'light-blue darken-1',
				}, {
					id: 1,
					name: 'Вконтакте',
					link: 'https://vk.com/write15760394',
					icon: 'fa-vk',
					theme: 'light-blue darken-4',
				}, {
					id: 2,
					name: 'Ватсап',
					link: 'https://api.whatsapp.com/send?phone=79173832987',
					icon: 'fa-whatsapp',
					theme: 'green accent-4',
				}, {
					id: 3,
					name: 'Скайп',
					link: 'skype:loginov-88?chat',
					icon: 'fa-skype',
					theme: 'light-blue darken-1',
				}, {
					id: 4,
					name: 'Яндекс',
					link: 'mailto:loginov-solonitsyn@yandex.ru',
					icon: 'fa-envelope',
					theme: 'amber accent-4',
				}, {
					id: 5,
					name: 'Gmail',
					link: 'mailto:login2030@gmail.com',
					icon: 'fa-envelope',
					theme: 'deep-orange darken-4',
				}]
			}
		}
	}
</script>