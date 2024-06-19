import TagsList from './tagsList';

//import RacksThumbImg from "../public/img/projects/racks/racks-thumb.png";
//import SnowThumbImg from "../public/img/projects/snow/snow-thumb.png";
//import SushiRibaThumbImg from "../public/img/projects/other/sushiriba-thumb.png";

const ProjectsList = [

	// ASCORA
	{
		id: 0,
		title: 'Ascora (Не завершен)',
		description:
			<>
				Проект сайта инди-студии Ascora (*новое название*). Разработка игр для ПК.
				<br/>
				Особенности:
				Разработка админ-панели с текстовым редактором с поддержкой RichText для создания постов и интеграция AWS S3 для загрузки медиа материалов (фото для постов, арты, видео).
			</>,
		link: '#',
		isExternalLink: false,
		//image: RacksThumbImg,
		tags: []
	},

	// SNOW LANDING
	{
		id: 1,
		title: 'Snow landing',
		description:
			<>
				Вёрстка бесплатного шаблона лендинга Snow от <a href = "http://designscrazed.org/" > Designscrazed </a>
			</>,
		link: "/projects/snow",
		isExternalLink: false,
		//image: SnowThumbImg,
		tags: [
			TagsList.frontend,
			TagsList.sass,
			TagsList.reactjs,
			TagsList.landing,
			TagsList.singlepage,
			TagsList.wowjs,
			TagsList.bootstrap,
			TagsList.fontawesome,
			TagsList.freetemplate
		]
	},

	// SOMETHING
	{
		id: 2,
		title: "Что-нибудь, что будет в будущем",
		description: "Тут я ещё даже не придумал что делать",
		link: "#",
		isExternalLink: false,
		tags: [{
				ru: {
					value: "точно",
					info: ""
				},
				eng: {
					value: "defenitely",
					info: ""
				}
			},
			TagsList.frontend,
			{
				ru: {
					value: ",",
					info: "запятая"
				},
				eng: {
					value: ",",
					info: "comma"
				}
			},
			{
				ru: {
					value: "скорее",
					info: ""
				},
				eng: {
					value: "more",
					info: ""
				}
			},
			{
				ru: {
					value: "всего",
					info: ""
				},
				eng: {
					value: "likely",
					info: ""
				}
			},
			TagsList.sass,
			{
				ru: {
					value: "и",
					info: ""
				},
				eng: {
					value: "and",
					info: ""
				}
			},
			TagsList.reactjs
		]
	},

	// SUSHIRIBA
	{
		id: 3,
		title: 'СушиРыба (Не завершен)',
		description: <>
			Редизайн сайта компании СушиРыба. (Клиент принял решение остаться на более бюджетном варианте - конструктор сайтов)
			Особенности:

			Параллакс эффекты. Админ панель с ролями доступа и возможностью редактирования акций, блюд, постов.
			Корзина без необходимости регистрации с использованием localStorage браузера, рассчёт скидок.
			Возможность создавать заказ на сайте, а не только с помощью звонка.
			Отображение созданных заказов у клиента в админ-панели в реальном времени при помощи websocket.(не реализовано)
		</>,
		link: 'https://www.sushizarinsk.com/',
		isExternalLink: true,
		//image: SushiRibaThumbImg,
		tags: [
			TagsList.fullstack,
			TagsList.sass,
			TagsList.reactjs,
			TagsList.redux,
			TagsList.django,
			TagsList.rest_api,
			TagsList.axios,
			TagsList.yandex_cloud,
			TagsList.design
		]
	}
];

export default ProjectsList;