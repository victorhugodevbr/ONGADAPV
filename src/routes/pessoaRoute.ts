import { Router } from 'express';
import PessoaController from '../controllers/pessoaController';
import { validandoPessoa, validandoPessoaUpdate } from '../middlewares/pessoaAuth';

const routes = Router();
const pessoaController = new PessoaController();

routes.post('/create', validandoPessoa, pessoaController.create);
routes.get('/', pessoaController.getAll);
routes.get('/:id', pessoaController.get);
routes.put('/:id', validandoPessoaUpdate, pessoaController.update);
routes.delete('/:id', pessoaController.delete);

export default routes;