require("../app-parameters");
require("../app-settings");
const express = require('express');
const Router = require('../routes/index');

(async () => {
    const app = express();

    Router(app);

    app.listen(global.server.http_port, () => {
        console.log('--- listen 3000')
    })
})()
