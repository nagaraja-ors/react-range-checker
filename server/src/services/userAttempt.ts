import UserInfo, { UserInfoModel } from '../models/UserInfo';
import { parseErrors } from '../utils/errorParser';

// export const getRangeValue = (data:any, callback: any) => {
   
// };
export const getRangeValue = (params: { }, callback: any) => {
    UserInfo.find({})
        .then((userDetails: UserInfoModel[]) => callback(undefined, userDetails))
        .catch((error: any) => callback(parseErrors(error.errors), undefined));
};

export const checkRange = (data: any, callback: any) => {
    // const ideaInstance = new Idea(data);
    // ideaInstance.createdBy = owner;
    // ideaInstance.save()
    //     .then((idea: IdeaModel) => callback(undefined, idea))
    //     .catch((idea: any) => callback(parseErrors(idea.errors), undefined));
    
};