/* K12 levels */
type InstitutionEnumI = 'K' | 'P' | 'S' | 'M';
declare type KindergartenLevelsT = 'K1' | 'K2' | 'K3';
declare type ElementaryLevelsT = 'P1' | 'P2' | 'P3' | 'P4' | 'P5';
declare type MiddleSchoolLevelsT = 'M1' | 'M2' | 'M3' | 'M4';
declare type SecondarySchoolLevelsT = 'S1' | 'S2' | 'S3';
declare type K12LevelsT = KindergartenLevelsT | ElementaryLevelsT | MiddleSchoolLevelsT | SecondarySchoolLevelsT;
/* University levels */
declare type University_License_levelsT = 'L1' | 'L2' | 'L3';
declare type University_Master_levelsT = 'M1' | 'M2';
declare type University_Doctorate_levelsT = 'D1' | 'D2' | 'D3';
declare type University_levelsT = University_License_levelsT | University_Master_levelsT | University_Doctorate_levelsT;
/* High education levels */
declare type HighEducation_levelsT = 'E1' | 'E2' | 'E3' | 'E4' | 'E5';
/* Professional levels */
declare type Professional_levels = 'PI';
/* High levels */
declare type HighLevelsT = University_levelsT | HighEducation_levelsT | Professional_levels;
/* Levels */
declare type levelsEnumT = K12LevelsT | HighLevelsT;
/* K12 specialty */
declare type SecondarySpecialtiesT =
	| 'M' // Mathematic
	| 'T' // Technical Math
	| 'S' // Science
	| 'F' // Finance
	| 'A' // Arts
	| 'L' // Literature
	| 'P' // Philosophy
	| 'Fs' // Foreign language (spanish)
	| 'Fg' // Foreign language (german)
	| 'Fi'; // Foreign language (italian)
