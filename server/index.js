const express = require('express');
const app = express();

const apiRouter = require('./routes/api');

app.use(express.json());

app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', apiRouter);

app.use((err, _, res) => {
    res.status(500);
    res.json({
        error: err.message
    })
});


app.listen(process.env.PORT || 3000, () => {
    console.log('Listening...');
});
