declare type SecondaryCommonSpecialtiesT =
	| 's' // Science
	| 'l'; // Literature
declare type SecondaryBasicSpecialtiesT =
	/* Scientific fields */
	| 'M' // Mathematic
	| 'S' // Science of nature and life
	| 'F' // Finance
	| 'Tec' // Technology
	| 'Km' // Kouba secondary school of math
	/*  Literary fields */
	| 'A' // Arts
	| 'P' // Philosophy
	| 'Fl'; // Foreign languages
declare type ExpendedSpecialtiesT =
	/* Technologies */
	| 'TCe' // Technical Math civil engineering
	| 'TEe' // Technical Math electrical engineering
	| 'TMc' // Technical Math mechanical engineering
	| 'TMe' // Technical Math Methods engineering
	/* foreign languages */
	| 'Fs' // Foreign language (spanish)
	| 'Fg' // Foreign language (german)
	| 'Fi' // Foreign language (italian)
	/* foreign languages */
	| 'Av' // Arts (audio visual)
	| 'At' // Arts (Theater and Performing)
	| 'Am' // Arts (music)
	| 'Af'; // Arts (Fine Arts)
declare type SecondarySpecialtiesT =
	| SecondaryCommonSpecialtiesT
	| Exclude<SecondaryBasicSpecialtiesT, 'Tec' | 'Fl' | 'A'> // specialties that are not technology or languages
	| ExpendedSpecialtiesT;
