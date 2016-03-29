var connect = require('connect');
var serveStatic = require('serve-static');

connect()
    .use(serveStatic("./prod"))
    .listen(8080);

console.log("Created server test http server, port 8080");