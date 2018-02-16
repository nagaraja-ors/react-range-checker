import { Request, Response } from 'express';
import { checkRange, getRangeValue } from '../services/userAttempt';
import UserInfo, { UserInfoModel } from '../models/UserInfo';


export let getPredefinedValue = (req: Request, res: Response) => {
    getRangeValue({}, function (err: any, UserDetails: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json({UserDetails});
    });
}

export let postRangeValue = (req: Request, res: Response) => {
   
    console.log('response' + req.body);
    let userAttempt = 0;
	if(req.body.author === 'test') {
		userAttempt = 0;
	} else {
		userAttempt = userAttempt + 1;
	}
	
	if (userAttempt >=3 ) {
		res.json({ message : 'You tried three attempt. Redirecting to login page' });
	} else if(userAttempt === 0) {
		res.json({ message : 'success' });
	} else {
		res.json({ message : 'Wrong number entered! User attempt: ' +userAttempt });
    }
    res.json({ message : 'NAGARAt. Redirecting to login page' });
    // checkRange(req.body, function (err: any,) {
    //     if (err) {
    //         return res.status(400).json(err);
    //     } else {
    //         res.json({Message: 'Range Check'});
    //     }
    // });
};

 


