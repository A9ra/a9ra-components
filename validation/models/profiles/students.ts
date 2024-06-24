import { MyZodType, z } from '../../defaultZod';
import { careersEnumSchema } from '../enums/careers';
import { hoobiesEnumSchema } from '../enums/hoobies';
import { learningDurationEnumSchema, learningStyleEnumSchema, learningTimesEnumSchema } from '../enums/learningStyle';
import { levelsEnumSchema } from '../enums/levels';
import { subjectsEnumSchema } from '../enums/subjects';
import { FocusedChoiceSchema } from '../FocusedChoice';

export const IntrestsSchema = () =>
	z
		.object<MyZodType<IntrestsI>>({
			hobbies: FocusedChoiceSchema(hoobiesEnumSchema()),
			subjects: FocusedChoiceSchema(subjectsEnumSchema()),
			careers: FocusedChoiceSchema(careersEnumSchema()),
		})
		.openapi('Intrests', { description: 'Intrests Schema' });
export const PrefrencesSchema = () =>
	z.object<MyZodType<PrefrencesI>>({
		learningStyle: FocusedChoiceSchema(learningStyleEnumSchema()),
		learningTimes: FocusedChoiceSchema(learningTimesEnumSchema()),
		learningDuration: FocusedChoiceSchema(learningDurationEnumSchema()),
	});

export const StudentProfileSchema = () =>
	z
		.object<MyZodType<StudentProfileI>>({
			intrests: IntrestsSchema(),
			prefrences: PrefrencesSchema(),
			level: levelsEnumSchema(),
		})
		.openapi('Student_Profile', { description: 'Student Profile Schema' });
