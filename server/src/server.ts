import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { Routes } from './routes';
import { createAdminUser } from './utils/bootstrapData';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_DB_URL, (err: any) => {
    if (err) {
        console.log('Mongo error: ', err);
    } else {
        createAdminUser();
    }
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
const __routes = new Routes(process.env.NODE_ENV);
__routes.paths(app);
app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

const listener = app.listen(PORT, () => console.log('listening application: ', listener.address().port));