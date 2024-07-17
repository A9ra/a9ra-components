interface Error404Dictionary {
	title: string;
	subTitle: string;
	description: string;
	button: string;
}
const dictionary: Record<LanguagesI, Error404Dictionary> = {
	EN: {
		title: '404',
		subTitle: 'Page not found',
		description:
			'The page you are looking for might have been removed, had its name changed or is temporarily unavailable.',
		button: 'Go back',
	},
	FR: {
		title: '404',
		subTitle: 'Page non trouvée',
		description:
			'La page que vous recherchez a peut-être été supprimée, a changé de nom ou est temporairement indisponible.',
		button: 'Retourner',
	},
	AR: {
		title: '404',
		subTitle: 'الصفحة غير موجودة',
		description: 'قد تكون الصفحة التي تبحث عنها قد تمت إزالتها أو تغيير اسمها أو غير متاحة مؤقتًا.',
		button: 'عد',
	},
};
export default dictionary;
