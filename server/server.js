/* Código simplório, apenas para fornecer o serviço para a aplicação */

var http = require('http'),
    app = require('./express.js');

http.createServer(app).listen(8080, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});

