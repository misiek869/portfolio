// the data for AboutMe component and slider component

export type AboutDataType = {
	count: number
	title: string
	img: string
	array: string[]
}

export const AboutData: AboutDataType[] = [
	{
		count: 1,
		title: 'UI / UX Designer',
		img: '/first.svg',
		array: [
			'Information Architecture',
			'Pen and Paper',
			'Adobe Photoshop',
			'Adobe Illustrator',
			'Figma',
			'Framer',
			'Typography / Spacing / ...',
		],
	},
	{
		count: 2,
		title: 'Front-end Developer',
		img: '/second.svg',
		array: [
			'HTML / CSS3',
			'javaScript (ES6)',
			'ReactJS',
			'NextJS',
			'TailwindCSS',
			'Bootstrap',
			'REST API / GraphQL',
		],
	},
	{
		count: 3,
		title: 'Back-end Developer',
		img: '/third.svg',
		array: [
			'NodeJS / Express.js',
			'MongoDB / MySQL / MSSQL',
			'Next.js (API)',
			'PHP',
			'WordPress Theme Dev',
			'WordPress Plugin Dev.',
			'ASP (Once upon a time)',
		],
	},
	{
		count: 4,
		title: 'DevOps and Admin',
		img: '/fourth.svg',
		array: [
			'Docker / CI CD',
			'Apache / Nginx',
			'CentOS / Ubuntu',
			'Windows Server / IIS',
			'Mail Servers / DNS Servers',
			'Firewalls / Security',
			'VMWare ESXi',
		],
	},
	{
		count: 5,
		title: 'CMS and Headless CMS',
		img: '/fifth.svg',
		array: [
			'Contentful',
			'GraphCMS',
			'Strapi',
			'WordPress (Gutenberg)',
			'Directus',
			'Sanity',
			'SiteBaan (My Own)',
		],
	},
	{
		count: 6,
		title: 'Tools and Things',
		img: '/sisxth.svg',
		array: [
			'VSCode',
			'Git / Github',
			'Bash / Powershell',
			'NPM / Yarn',
			'Plesk Control Panel',
			'Vercel / Stormkit / Netlify',
			'Postman / Insomnia',
		],
	},
]

// for the slider
export type DataArrayType = {
	title: string
	name: string
	des: string
	des1: string
	images: string[]
}

export const DataArray: DataArrayType[] = [
	{
		title: 'Personal Portfolio Website Using Reactjs',
		name: 'Ultimate ReactJs portfolio',
		des: 'I have made this project in 2022  to show thousands of students all over the world  how to make Reactjs portfolio.',
		des1: 'This project was made using, Ractjs, Nextjs, Expressjs, Nodejs, Rxjs Bootsrap and many more!',
		images: ['/portfolio-image.jpg'],
	},
	{
		title: 'Food Delivery Company WebSite',
		name: 'Yum Food Company',
		des: 'We did  this project for Yum Foods Located in USA.',
		des1: "This website's graphic design is fantastic. Animated sliders are painstakingly built and created in WordPress with Revolution Slider. All of the product photos are photo manipulations created in Adobe Photoshop.",

		images: ['/portfolio-image.jpg', '/portfolio-image.jpg'],
	},
	{
		title: 'Crypto Trading Website',
		name: 'Crypto Trading project',
		des: 'We buit this website for BigMoney group',
		des1: 'This project was built to enable clients all over the world to buy and sell their crypto.',

		images: [
			'/portfolio-image.jpg',
			'/portfolio-image.jpg',
			'/portfolio-image.jpg',
		],
	},
]
