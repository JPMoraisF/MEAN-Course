const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


// To avoid CORS errors, you nees to set these headers on the response
// Note that we use app.use(), since we are only creating a new middleware.
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "PATCH", "DELETE", "OPTIONS")
    next();
});


app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added'
    });
})

app.get('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: '1212312',
            title: 'First post coming from server',
            content: 'Content'
        },
        {
            id: '112312',
            title: 'Second post coming from server',
            content: 'Content'
        },
        {
            id: 'ad23234',
            title: 'Third post coming from server',
            content: 'Content'
        }
    ]
    res.status(200).json({
        message: 'Fetched succesfully',
        data: posts
    });
});


module.exports = app;