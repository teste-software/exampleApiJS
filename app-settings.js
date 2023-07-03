const path = require('path');
global.server.http_port = 3000;
global.name = 'TESTE API JS'
global.teste = path.resolve(process.env.PWD || '', "ssl/apple_push_notification/key.p8");
