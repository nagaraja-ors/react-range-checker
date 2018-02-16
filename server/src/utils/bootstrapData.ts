import UserInfo,  { UserInfoModel } from '../models/UserInfo';

const ADMIN_EMAIL = 'admin@aegon.com';

export const createAdminUser = () => {
    UserInfo.findOne({email: ADMIN_EMAIL}).then(user => {
        if (!user) {
            const userInfo = new UserInfo({
                username: 'admin', email: ADMIN_EMAIL, predefinedValue: '5', hashPassword:'password'
            });
            userInfo.save()
                .then(user => console.log('Created user Info: email=', userInfo.email, ', username=', userInfo.username))
                .catch(err => console.log('Error caught while creating UserInfo: ', err));
        } else {
            console.log('Admin user already exists: email=', user.email, ', username=', user.username);
        }
    });
};
