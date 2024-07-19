declare type Art1SubjectsEnum =
	| 'Adf' // Drawing and fine expression
	| 'Amt' // music theory
	| 'Aac' // art of acting
	| 'Avt'; // audio visual technics

declare type Art2SubjectsEnum =
	| 'Ade' // Design
	| 'Ami' // music instrument
	| 'Apr' // art of performing
	| 'Acc'; // cinematographic culture
declare type ArtSubjectsEnum = Art1SubjectsEnum | Art2SubjectsEnum;
declare type TechnologySubjectsEnum =
	| 'Ce' // civil engineering
	| 'Mc' // Mechanical engineering
	| 'Ee' // Electrical engineering
	| 'Me'; // Methods engineering
declare type ForeignLanguageSubjectsEnum =
	| 'Ge' // German
	| 'Sp' // Spanish
	| 'It'; // Italian
declare type GenericSubjectsEnum =
	| 'Fl' // Foreign languages
	/* Technologie */
	| 'Tec' // Technology
	/* Arts */
	| 'A1' // art 1
	| 'A2'; // art 2
declare type basicSubjectsEnumT =
	| 'M' // Mathematic
	| 'S' // Science
	| 'P' // Physics
	| 'I' // Islamic studies
	| 'A' // Art
	| 'HG' // History and Geography
	| 'Mu' // Music
	| 'Ph' // Philosophy
	| 'Cs' // Computer Science
	| 'Ss' // Social Studies
	| 'Pe' // Physical Education
	/* Management */
	| 'Mg' // Management
	| 'Eco' // Economy
	| 'La' // Law
	/* | 'Ch' // Chemistry
	| 'Bi' // Biology */
	/* Languages */
	| 'Ar' // Arabic
	| 'Am' // Amazight
	| 'Fr' // French
	| 'En' // English
	| 'Em' // economy and management
	| GenericSubjectsEnum;
declare type detailedSubjectsEnumT =
	| ArtSubjectsEnum
	/* Foreign languages */
	| ForeignLanguageSubjectsEnum
	/*  Technologie */
	| TechnologySubjectsEnum;
declare type subjectsEnumT = Exclude<basicSubjectsEnumT, 'A1' | 'A2' | 'Tec' | 'Fl'> | detailedSubjectsEnumT;
/* Art subjects */
