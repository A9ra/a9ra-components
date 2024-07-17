interface Error500Dictionary {
	title: string;
	subTitle: string;
	description: string;
	button: string;
	tryAgain: string;
}
const dictionary: Record<LanguagesI, Error500Dictionary> = {
	EN: {
		title: '500',
		subTitle: 'Internal Server Error',
		description: 'The server encountered an error and could not complete your request.',
		button: 'Go back',
		tryAgain: 'Try again',
	},
	FR: {
		title: '500',
		subTitle: 'Erreur interne du serveur',
		description: "Le serveur a rencontré une erreur et n'a pas pu terminer votre demande.",
		button: 'Retourner',
		tryAgain: 'Réessayer',
	},
	AR: {
		title: '500',
		subTitle: 'خطأ داخلي في الخادم',
		description: 'واجه الخادم خطأ ولم يتمكن من إكمال طلبك.',
		button: 'عد',
		tryAgain: 'حاول مرة أخرى',
	},
};
export default dictionary;
