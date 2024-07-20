import { Schema, Types } from 'mongoose';

import { careersList } from '^common/models/enums/careers';
import { interestsList } from '^common/models/enums/interests';
import { learningDurationList, learningStyleList, learningTimesList } from '^common/models/enums/learningStyle';
import { levelsList, secondarySpecialtiesList } from '^common/models/enums/levels';
import { subjectsList } from '^common/models/enums/subjects';

import {
	StudentProfileInstanceMethods,
	StudentProfileModel,
	StudentProfileQueryHelpers,
	StudentProfileSchemaOptions,
	StudentProfileStaticMethods,
	StudentProfileVirtual,
} from '!common/models/profiles/student';
import { generateFocusedChoiceSchema } from '#common/generals/focusedChoice';
import userModel from '#common/user';

import profileModel, { profileOptions } from '.';

const required = true;
/* Interests schemas */
const interestsFocusedSchema = generateFocusedChoiceSchema<interestsEnumT>(interestsList);
const subjectsFocusedSchema = generateFocusedChoiceSchema<subjectsEnumT>(subjectsList);
const careersFocusedSchema = generateFocusedChoiceSchema<careersEnumT>(careersList);
/* preferences schemas */
const learningStyleFocusedSchema = generateFocusedChoiceSchema<learningStyleEnumT>(learningStyleList);
const learningTimesFocusedSchema = generateFocusedChoiceSchema<learningTimesEnumT>(learningTimesList);
const learningDurationFocusedSchema = generateFocusedChoiceSchema<learningDurationEnumT>(learningDurationList);
/* levels schema */
/* --------------------- Schema --------------------- */
const studentProfileSchema = new Schema<
	StudentProfileDocumentI<Types.ObjectId>,
	StudentProfileModel,
	StudentProfileInstanceMethods,
	StudentProfileQueryHelpers,
	StudentProfileVirtual,
	StudentProfileStaticMethods,
	StudentProfileSchemaOptions
>(
	{
		interests: {
			interests: { type: interestsFocusedSchema, required },
			subjects: { type: subjectsFocusedSchema, required },
			careers: { type: careersFocusedSchema, required },
		},
		preferences: {
			learningStyle: { type: learningStyleFocusedSchema, required },
			learningTimes: { type: learningTimesFocusedSchema, required },
			learningDuration: { type: learningDurationFocusedSchema, required },
		},
		level: { type: String, required, enum: levelsList },
		specialty: { type: String, enum: secondarySpecialtiesList },
		optionals: {
			sports: { type: Boolean, default: true },
			amazight: { type: Boolean, default: false },
		},
	},
	{ timestamps: true, ...profileOptions }
);
/* --------------------- Virtual ---------------------  */

/* --------------------- Hooks ---------------------  */
/* studentProfileSchema.pre('save', async function (next) {
	
}); */

/* --------------------- Methods ---------------------  */
studentProfileSchema.methods.toOptimizedObject = function () {
	return {
		id: this._id.toString(),
		user: this.user.toString(),
		kind: this.kind,
		interests: this.interests,
		level: this.level,
		preferences: this.preferences,
		specialty: this.specialty,
		optionals: this.optionals,
	};
};

/* --------------------- Query Helpers --------------------- */

/* --------------------- static methods --------------------- */
studentProfileSchema.statics.createStudentProfile = async function (userData, studentProfileData) {
	const user = await userModel.createUser(userData);
	if (!user) throw new Error('Error creating user');
	const newStudentProfile: StudentProfileDocumentI<Types.ObjectId> = {
		user: user._id,
		...studentProfileData,
		kind: 'S',
	};
	const studentProfileDoc = new this(newStudentProfile);
	await studentProfileDoc.save();
	return [user, studentProfileDoc];
};
/* --------------------- Generate Model --------------------- */
const studentProfileModel = profileModel.discriminator<StudentProfileDocumentI<Types.ObjectId>, StudentProfileModel>(
	'S',
	studentProfileSchema
);
export default studentProfileModel;
