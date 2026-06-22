import express from 'express'
import cookieParser from 'cookie-parser'
import envConfig from './configs/envConfig.js'
import db from './configs/database.js'
import userRouter from './routes/user.route.js'
import bookRouter from './routes/book.route.js'

const port = envConfig.PORT || 8081;

const app = express();

db();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/user', userRouter);
app.use('/api/book', bookRouter);

app.get('/', (req, res) => {
    return res.json({ message: 'Server started' })
});

app.listen(port, (err) => {
    if (err) {
        console.error(err.message)
    }
    console.log('server started')
    console.log(`http://localhost:${port}`)
});
