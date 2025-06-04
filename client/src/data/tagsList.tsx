const tags = {
    frontend: {
		id: '0',
        ru: {
        	value: 'Фронтенд',
        	info: 'Фронтальная веб-разработка - практика преобразования данных в графический интерфейс с использованием HTML, CSS и JavaScript, чтобы пользователи могли просматривать и взаимодействовать с этими данными'
        },
        en: {
        	value: 'Frontend',
        	info: 'Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data'
        }
    },
    fullstack: {
		id: '1',
        ru: {
        	value: 'Бэкэнд',
        	info: 'Бэкэнд разработка - это веб-программирование, целью которого является реализация серверной стороны сайта, интеграция базы данных и связь ее с пользовательской (front-end) стороной. '
        },
        en: {
        	value: 'Backend',
    		info: 'Backend development is the practice of implementing the server side of a website.'
        }
    },
    sass:  {
		id: '2',
        ru: {
        	value: 'SASS',
        	info: 'SASS (Syntactically Awesome Stylesheets) — это метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS кода и упрощения файлов каскадных таблиц стилей.'
        },
        en: {
        	value: 'SASS',
        	info: 'Syntactically Awesome Style Sheets is a style sheet language initially designed by Hampton Catlin and developed by Natalie Weizenbaum'
        }
    },
    react:  {
		id: '3',
        ru: {
        	value: 'React',
        	info: '— JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.'
        },
        en: {
        	value: 'React',
        	info: 'is an open-source JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and companies.'
        }
    },
    redux:  {
		id: '4',
    	ru: {
    	  	value: 'Redux',
    	  	info: 'Redux — библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части.'
    	},
    	en: {
    	  	value: 'Redux',
    	  	info: 'Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.'
    	}
	},
	django:  {
		id: '5',
    	ru: {
    	  	value: 'Django',
    	  	info: 'Django — фреймворк для разработки веб-приложений на языке Python, использующий шаблон проектирования Model-Template-View (MVC).'
    	},
    	en: {
    	  	value: 'Django',
    	  	info: 'Django is a Python-based open-source web framework, which follows the Model-Template-View (MTV) architectural pattern.'
    	}
	},
	rest_api:  {
		id: '6',
    	ru: {
    	  	value: 'REST',
    	  	info: 'REST (от англ. Representational State Transfer — «передача состояния представления») — архитектурный стиль взаимодействия компонентов распределённого веб-приложения. REST представляет собой согласованный набор ограничений, учитываемых при проектировании распределённой гипермедиа-системы.'
    	},
    	en: {
    	  	value: 'REST',
    	  	info: 'Representational state transfer (REST) is a software architectural style that defines a set of constraints to be used for creating Web services.'
    	}
	},
	axios:  {
		id: '7',
    	ru: {
    	  	value: 'Axios',
    	  	info: 'HTTP клиент для браузера и node.js, работа которого основана на промисах.'
    	},
    	en: {
    	  	value: 'Axios',
    	  	info: 'Promise based HTTP client for the browser and node.js.'
    	}
	},
	yandex_cloud:  {
		id: '8',
    	ru: {
    	  	value: 'Яндекс.Облако',
    	  	info: ''
    	},
    	en: {
    	  	value: 'Yandex.Cloud',
    	  	info: ''
    	}
	},
	design:  {
		id: '9',
    	ru: {
    	  	value: 'Дизайн',
    	  	info: ''
    	},
    	en: {
    	  	value: 'Design',
    	  	info: ''
    	}
    },
    landing:  {
		id: '10',
        ru: {
        	value: 'Лендинг',
        	info: 'Целевая страница (англ. landing page, также «посадочная страница») — веб-страница, основной задачей которой является сбор контактных данных целевой аудитории. Используется для усиления эффективности рекламы, увеличения аудитории. Главной задачей таких страниц является конвертация посетителя в покупателя или клиента компании, побуждение к целевому действию.'
        },
        en: {
        	value: 'Landing Page',
        	info: 'In online marketing, a landing page, sometimes known as a "lead capture page", "static page", or a "destination page", is a single web page that appears in response to clicking on a search engine optimized search result, marketing promotion, marketing email, or an online advertisement.'
        }
      },
    singlepage:  {
		id: '11',
        ru: {
        	value: 'Одностраничное приложение',
        	info: 'Одностраничное приложение (англ. single page application, SPA) — это веб-приложение или веб-сайт, использующий единственный HTML-документ как оболочку для всех веб-страниц и организующий взаимодействие с пользователем через динамически подгружаемые HTML, CSS, JavaScript, обычно посредством AJAX.'
        },
        en: {
        	value: 'SPA',
        	info: 'A single-page application (SPA) is a web application or web site that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. This approach avoids interruption of the user experience between successive pages, making the application behave more like a desktop application. In an SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions. The page does not reload at any point in the process, nor does control transfer to another page, although the location hash or the HTML5 History API can be used to provide the perception and navigability of separate logical pages in the application. Interaction with the single-page application often involves dynamic communication with the web server behind the scenes.'
        }
      },
    wowjs:  {
		id: '12',
        ru: {
        	value: 'WOW.JS',
        	info: 'WOW.JS - бесплатная библиотека JavaScript с открытым исходным кодом, предназначенная для ...'
        },
        en: {
        	value: 'WOW.JS',
        	info: 'WOW.JS is a free open-source JavaScript library for ...'
        }
      },
    bootstrap:  {
		id: '13',
        ru: {
        	value: 'Bootstrap',
        	info: 'Bootstrap - бесплатный CSS с открытым исходным кодом, направленный на отзывчиую, mobile-first фронтенд разработку. Включает в себя шаблоны оформления для типографики, форм, кнопок, элементов навигации и прочих компонентов интерфейса, основанные на CSS (иногда JavaScript).'
        },
        en: {
        	value: 'Bootstrap',
        	info: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.'
        }
    },
    fontawesome:  {
		id: '14',
        ru: {
        	value: 'FontAwesome',
        	info: ''
        },
        en: {
        	value: 'FontAwesome',
        	info: ''
        }
    },
    freetemplate:  {
		id: '15',
        ru: {
        	value: 'Бесплатный шаблон',
        	info: 'Платить за шаблон мне не пришлось.'
        },
        en: {
        	value: 'Free template',
        	info: 'There were no need for me to pay for the template.'
        }
    },
    html:  {
        ru: {
        	value: 'HTML',
        	info: 'HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык разметки документов во Всемирной паутине. Большинство веб-страниц содержат описание разметки на языке HTML.'
        },
        en: {
        	value: 'HTML',
        	info: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'
        }
    },
	fsd:  {
        ru: {
        	value: 'FSD',
        	info: ''
        },
        en: {
        	value: 'FSD',
        	info: ''
        }
    },
	ts:  {
        ru: {
        	value: 'Typescript',
        	info: ''
        },
        en: {
        	value: 'Typescript',
        	info: ''
        }
    }
}

export interface ITagLang {
	value: string,
	info: string
}

export interface ITag {
	ru: ITagLang,
	en: ITagLang
}

export default tags;