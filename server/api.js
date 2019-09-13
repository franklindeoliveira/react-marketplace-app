/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = {}

var produtos = [
    { "nome": "Nome do produto 1", "descricao": "Descrição do produto 1", "valor": 10 },
    { "nome": "Nome do produto 2", "descricao": "Descrição do produto 2", "valor": 20 },
    { "nome": "Nome do produto 3", "descricao": "Descrição do produto 3", "valor": 30 }
];

api.listaProdutos = function(req, res) {
    res.json(produtos);
};

api.cadastraProduto = function(req, res) {
    produtos.push(req.body);
    res.status(200).json("Produto cadastrado com sucesso.");
};

module.exports = api;