const routeClient = require("./client")

module.exports = function load(app) {
    app.use('/api', routeClient)

    return app;
}
