/* Importações através do método require */
const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

//ROTAS# =============================================
//_______O que ocorrer ao acessar a rota '/' = rota raiz
/* Chamando método index do controller. 
GET: Recuperar info
POST: Gravar Info, rota para criar
PUT: Alterar dados 
DELETE: Deletar Dados*/
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

// importar para Utilizar dentro do server JS
module.exports = routes;
