import * as mongoose from 'mongoose';

const UserInfoSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, index: true, lowercase: true, unique: true},
    hashPassword: {type: String},
    attemptLog: [{type: String}],
    predefinedValue:{type: String}    
}, { timestamps: true });

export interface UserInfoModel extends mongoose.Document {
    username: string;
    email: string;
    hashPassword: string;
    attemptLog: string[];
    predefinedValue: string;
}


export default mongoose.model<UserInfoModel>('UserInfo', UserInfoSchema);