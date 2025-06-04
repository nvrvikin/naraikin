//import { IDefineTagLangText } from '../components/helpers/defineLangText';
import tagsList, { ITag } from './tagsList';

import ReSushiRibaImg from "/img/resushiriba_preview.png";

//import RacksThumbImg from "../public/img/projects/racks/racks-thumb.png";
//import SnowThumbImg from "../public/img/projects/snow/snow-thumb.png";
//import SushiRibaThumbImg from "../public/img/projects/other/sushiriba-thumb.png";

export interface IProject {
	id: string,
	title: string,
	description: string | React.ReactNode,
	features: string[],
	link: string,
	hasLink: boolean,
	gLink: string,
	hasGLink: boolean,
	image: string;
	tags: ITag[]
}

const ProjectsList = [
	// SUSHIRIBA
	{
		id: '0',
		title: 'RE: СушиРыба',
		description: <>Редизайн сайта компании <a target="_blank" href='https://www.sushizarinsk.com/'>СушиРыба</a>. Учебный проект в процессе обновления, в соответствии с новой версией React, и восстановления функционала.</>,
		features: [
			"Добавление товаров в корзину с помощью Context и localStorage",
			"Авторизация через код в Telegram",
			"Завершение перехода на FSD"
		],
		link: 'https://resushiriba.vercel.app',
		hasLink: true,
		gLink: 'https://github.com/nvrvikin/resushiriba',
		hasGLink: true,
		image: ReSushiRibaImg,
		tags: [
			//tagsList.fullstack,
			tagsList.sass,
			tagsList.react,
			tagsList.ts,
			tagsList.frontend,
			tagsList.fsd,
			//tagsList.axios,
			//tagsList.yandex_cloud,
			tagsList.design
		]
	},
];

export default ProjectsList;