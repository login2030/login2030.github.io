import selectDeviceUrl from '../helpers/selectDeviceUrl.js';
import newWindow from '../helpers/getNewWindow.js';
export default [
	{
		img: 'ekipazas',
		header: 'UAB "Ekipažas"',
		desc: 'Сайт для компании такси и пассажирских перевозок г. Вильнюс, Литва',
		link: 'http://www.ekipazastaksi.lt/?lang=ru'
	},
	{
		img: 'svoidom',
		header: 'Свой дом',
		desc: 'Свой дом - сайт с каталогом проектов домов из дерева',
		link: 'http://svoidom.2rabbits.ru/'
	},
	{
		img: 'gorobzor',
		header: 'Горобзор - новостной портал',
		desc: 'Сайт для новостного портала, г.Уфа',
		link: 'http://www.gorobzor.ru/'
	},
	{
		img: 'ufakomfort',
		header: 'Окна Комфорт',
		desc: 'Сайт по изготовлению и установке пластиковых окон "Окна Комфорт" г. Уфа',
		link: 'http://ufakomfort.ru/'
	},
	{
		img: 'dvernoi-standart',
		header: 'Дверной стандарт',
		desc: 'Сайт входных дверей производства "Дверной стандарт" г.Пермь',
		link: 'http://dvernoistandart.2rabbits.ru/'
	},
	{
		img: 'akcentufa',
		header: 'Акцент',
		desc: 'Сайт рекламного агентства "Акцент" г. Уфа',
		link: 'http://akcentufa.ru/'
	},
	{
		img: 'martial-arts',
		header: 'Маршал Артс',
		desc: 'Сайт фитнес-клуба "Маршал Артс" г. Уфа',
		link: 'http://martial-arts.ru/'
	},
	{
		img: 'fuelcomplex',
		header: 'Fuelcomplex',
		desc: 'Сайт учета и контроля топлива "Fuelcomplex" г. Москва',
		link: 'http://fuelcomplex.ru/'
	},
	{
		img: 'ssd-86',
		header: 'Service Design',
		desc: 'Сайт дизайна интерьера и ремонта под ключ "Service Design" г. Сургут',
		link: 'https://ssd-86.ru/'
	},
	{
		img: 'riofitness',
		header: 'RIO',
		desc: 'Сайт фитнес-клуба "RIO" г. Новый Уренгой',
		link: 'http://riofitness.ru/'
	},
	{
		mobile: 'true',
		img: 'mriofitness',
		header: 'RIO',
		desc: 'Мобильная версия сайта фитнес-клуба "RIO" г. Новый Уренгой',
		link: selectDeviceUrl({
			desktopUrl: newWindow({url:'http://m.riofitness.ru/', width: '400', height: '700'}),
			tabletUrl: 'http://m.riofitness.ru/',
			mobileUrl: 'http://m.riofitness.ru/'
		})
	},
	{
		img: 'diloreto',
		header: 'Diloreto',
		desc: 'Сайт дизайна интерьера и ремонта под ключ "Diloreto" г. Новый Уренгой',
		link: 'http://diloreto.ru/'
	},
];