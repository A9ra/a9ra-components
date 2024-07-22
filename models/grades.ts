import { model, Schema, Types } from 'mongoose';

import { subjectsList } from '^common/models/enums/subjects';

import {
	GradesInstanceMethods,
	GradesModel,
	GradesQueryHelpers,
	GradesSchemaOptions,
	GradesStaticMethods,
	GradesVirtual,
} from '!common/models/grades';
const required = true;
/* --------------------- Schema --------------------- */
const gradeSchema = new Schema<GradeI>(
	{
		subject: { type: String, required, enum: subjectsList },
		grade: { type: Number, required },
	},
	{ timestamps: true }
);
const gradesSchema = new Schema<
	GradesI<Types.ObjectId>,
	GradesModel,
	GradesInstanceMethods,
	GradesQueryHelpers,
	GradesVirtual,
	GradesStaticMethods,
	GradesSchemaOptions
>(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User', required },
		profile: { type: Schema.Types.ObjectId, ref: 'Profile', required, unique: true },
		grades: { type: [gradeSchema], required },
	},
	{ timestamps: true }
);
/* --------------------- Virtual ---------------------  */

/* --------------------- Hooks ---------------------  */
/* gradesSchema.pre('save', async function (next) {
	
}); */

/* --------------------- Methods ---------------------  */
gradesSchema.methods.toOptimizedObject = function () {
	return {
		user: this.user.toString(),
		profile: this.profile.toString(),
		grades: this.grades,
	};
};

gradesSchema.methods.toGrades = function () {
	return this.grades.reduce((acc, grade) => {
		acc[grade.subject] = grade.grade;
		return acc;
	}, {} as StudentGradesI);
};

/* --------------------- Query Helpers --------------------- */

/* --------------------- static methods --------------------- */

/* --------------------- Generate Model --------------------- */
const gradesModel = model<GradesI<Types.ObjectId>, GradesModel, GradesQueryHelpers>('Grades', gradesSchema);
export default gradesModel;
