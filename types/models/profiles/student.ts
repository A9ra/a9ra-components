import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	/* QueryWithHelpers, */
	ResolveSchemaOptions,
	Types,
} from 'mongoose';

import { UserHydratedDocument } from '../user';

export interface StudentProfileVirtual {}

export interface StudentProfileInstanceMethods {
	toOptimizedObject(): StudentProfileDocumentI;
}
/* QueryWithHelpers<StudentProfileHydratedDocument | null, StudentProfileHydratedDocument, StudentProfileQueryHelpers, StudentProfileDocumentI<Types.ObjectId>,'findOne' >; */
export interface StudentProfileQueryHelpers {}
export interface StudentProfileDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<
			StudentProfileDocument,
			StudentProfileDocumentI<Types.ObjectId>,
			ResolveSchemaOptions<StudentProfileSchemaOptions>
		>,
		ResolveSchemaOptions<StudentProfileSchemaOptions>
	> {}
export interface StudentProfileHydratedDocument
	extends HydratedDocument<
		FlatRecord<StudentProfileDocument>,
		StudentProfileInstanceMethods & StudentProfileVirtual,
		StudentProfileQueryHelpers
	> {}

export interface StudentProfileStaticMethods {
	createStudentProfile(
		this: StudentProfileModel,
		user: UserI,
		studentProfile: StudentProfileI
	): Promise<[UserHydratedDocument, StudentProfileHydratedDocument]>;
}
export interface StudentProfileSchemaOptions {
	timestamps: true;
}
export interface StudentProfileModel
	extends Model<
			StudentProfileDocumentI<Types.ObjectId>,
			StudentProfileQueryHelpers,
			StudentProfileInstanceMethods,
			StudentProfileVirtual,
			StudentProfileHydratedDocument
		>,
		StudentProfileStaticMethods {}
