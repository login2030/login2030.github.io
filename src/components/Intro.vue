<template>
	<v-container fluid>
		<v-layout row wrap>
			<v-flex xm6 xs12 offset-xm3>
				<v-layout column align-center>
					<v-avatar size="150px">
						<img src="/images/avatar.jpg" class="mb-2" />
					</v-avatar>
					<blockquote class="c-intro-block">
						<div>Логинов-Солоницын Александр Олегович</div>
						<small>
							<div>Занимаюсь web программированием c 2014 года.</div>
							<div>Регулярно пополняю свой багаж знаний.</div>
							<div>Всегда открыт для новых предложении и интересных проектов.</div>
							<br>
							<div>Больше информации:</div>
							<div>
								<a href="http://prog-blog.ru/about/" target="_blank" class="c-link">
									<v-tooltip top>
										<v-btn icon tag="span" slot="activator" color="green">
											<v-icon color="white">fa-rss</v-icon>
										</v-btn>
										<span>В блоге</span>
									</v-tooltip>
								</a>
								<a href="https://freelance.ru/arias2030" target="_blank" class="c-link">
									<v-tooltip top>
										<v-btn icon tag="span" slot="activator" color="green">
											<span class="is-color-white">ru</span>
										</v-btn>
										<span>На фрилансе</span>
									</v-tooltip>
								</a>
								<a href="https://freelance.ru/reviews/arias2030" target="_blank" class="c-link">
									<v-tooltip top>
										<v-btn icon tag="span" slot="activator" color="green">
											<v-icon color="white">speaker_notes</v-icon>
										</v-btn>
										<span>Отзывы</span>
									</v-tooltip>
								</a>
							</div>
						</small>
					</blockquote>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
export default {}
</script>

