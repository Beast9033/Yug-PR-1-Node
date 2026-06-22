import { Router } from 'express';
import { bookValidation } from '../middlewares/validation.middleware.js';
import { getAllBook, getBook, createBook, deleteBook, updateBook } from '../controller/book.controller.js';

const bookRouter = Router();

bookRouter.get('/', getAllBook);

bookRouter.get('/:id', getBook);

bookRouter.post('/', bookValidation, createBook);

bookRouter.delete('/:id', deleteBook);

bookRouter.patch('/:id', updateBook);

export default bookRouter; 
