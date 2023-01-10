
const express = require('express');
const Router = require('../routes/index');

(async () => {
    const app = express();

    Router(app);

    app.listen(3000, () => {
        console.log('--- listen 3000')
    })
})()
