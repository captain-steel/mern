import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import emoji from 'node-emoji';
import responseTime from 'response-time';
import favicon from 'serve-favicon';
import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();

app.disable('x-powered-by');

app.use(compression());
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(__dirname + '/favicon.ico'));
app.use(helmet()); // app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(
  new rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50, // limit each IP to 50 requests per windowMs
    delayMs: 0 // disable delaying - full speed until the max limit is reached
  })
);
app.use(responseTime());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.set('port', process.env.PORT || 3000);
app.set('ipaddr', '0.0.0.0');

app.listen(app.get('port'), app.get('ipaddr'), function () {
  console.log(
    emoji.get('heart'),
    'The server is running @ ' + 'http://localhost/' + app.get('port'),
    emoji.get('heart')
  );
});
