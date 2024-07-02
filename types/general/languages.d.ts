type MainLanguagesI = 'EN';
type SecondaryLanguagesI = 'FR' | 'AR';

type LanguagesI = MainLanguagesI | SecondaryLanguagesI;
declare type LanguagesContentI<T = string> = {
	[key in MainLanguagesI]: T;
} & {
	[key in SecondaryLanguagesI]?: T;
};
