/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('./api.js');

module.exports = function(app) {

    app.route('/produtos')
        .get(api.listaProdutos);

    app.route('/produtos')
        .post(api.cadastraProduto);
};