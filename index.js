import express from 'express'

const app = express();
const router = express.Router();
app.use(express.json());
app.use(router);
app.get('/', (req, res) => {
    res.send('Hello World')
})
router.get('/order', (req, res) => {
    res.send('Hello Anand Singh')
})
app.use(async (err, req, res, next) => {

    if (err instanceof SyntaxError && 'body' in err) {
        console.error(err);
    }
    next();
});

app.use('/', () => {
  console.log('Anand Singh ', Date.now())
})
app.listen(8080, () => {
    console.log('Server is eunning on PORT 8080');
})