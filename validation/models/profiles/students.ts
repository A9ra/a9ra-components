import { MyZodType, z } from '../../defaultZod';
import { careersEnumSchema } from '../enums/careers';
import { interestsEnumSchema } from '../enums/interests';
import { learningDurationEnumSchema, learningStyleEnumSchema, learningTimesEnumSchema } from '../enums/learningStyle';
import { levelsEnumSchema } from '../enums/levels';
import { subjectsEnumSchema } from '../enums/subjects';
import { FocusedChoiceSchema } from '../FocusedChoice';

export const InterestsSchema = () =>
	z
		.object<MyZodType<InterestsI>>({
			interests: FocusedChoiceSchema(interestsEnumSchema()),
			subjects: FocusedChoiceSchema(subjectsEnumSchema()),
			careers: FocusedChoiceSchema(careersEnumSchema()),
		})
		.openapi('Interests', { description: 'Interests Schema' });
export const PreferencesSchema = () =>
	z.object<MyZodType<PreferencesI>>({
		learningStyle: FocusedChoiceSchema(learningStyleEnumSchema()),
		learningTimes: FocusedChoiceSchema(learningTimesEnumSchema()),
		learningDuration: FocusedChoiceSchema(learningDurationEnumSchema()),
	});

export const StudentProfileSchema = () =>
	z
		.object<MyZodType<StudentProfileI>>({
			interests: InterestsSchema(),
			preferences: PreferencesSchema(),
			level: levelsEnumSchema(),
		})
		.openapi('Student_Profile', { description: 'Student Profile Schema' });
