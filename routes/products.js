import express from 'express';
import {
  deleteProductController,
  getProductController,
  getProductListController,
  getProductTotalCountController,
  patchProductController,
  postProductController,
} from '../controller/productController.js';

const router = express.Router();

router.get('/:id', getProductController);
router.get('/', getProductListController);
router.post('/', postProductController);
router.patch('/:id', patchProductController);
router.delete('/:id', deleteProductController);
router.get('/total', getProductTotalCountController);

export default router;
