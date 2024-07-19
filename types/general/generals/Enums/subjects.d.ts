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
	| 'Fl' // Foreign languages
	| 'Ar' // Arabic
	| 'Am' // Amazight
	| 'Fr' // French
	| 'En' // English
	| 'Em' // economy and management

	/* Technologie */
	| 'Tec' // Technology

	/* Arts */
	| 'A1' // art 1
	| 'A2'; // art 2

declare type subjectsEnumT =
	| Exclude<basicSubjectsEnumT, 'A1' | 'A2' | 'Tec' | 'Fl'>
	/* Art subjects */
	| 'Adf' // Drawing and fine expression
	| 'Ade' // Design
	| 'Amt' // music theory
	| 'Ami' // music instrument
	| 'Aac' // art of acting
	| 'Apr' // art of performing
	| 'Avt' // audio visual technics
	| 'Acc' // cinematographic culture
	/* Foreign languages */
	| 'Ge' // German
	| 'Sp' // Spanish
	| 'It' // Italian
	/*  Technologie */
	| 'Ce' // civil engineering
	| 'Mc' // Mechanical engineering
	| 'Ee' // Electrical engineering
	| 'Me'; // Methods engineering
