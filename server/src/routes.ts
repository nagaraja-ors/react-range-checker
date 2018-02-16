import * as route from './controllers';
import * as express from 'express';

export class Routes {

    protected basePath: string;

    constructor(NODE_ENV: string) {
    }

    paths(app: express.Application) {
        app.post('/userAttempt', route.postRangeValue);
        app.get('/getRangeValue',route.getPredefinedValue);
       
    }
}