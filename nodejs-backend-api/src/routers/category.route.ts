import express  from "express";
import categoriesController from "../controllers/categories.controller";

const router = express.Router();
router.get('/', categoriesController.getAll);

router.get('/:id', categoriesController.getCategoryById);

router.post('/', categoriesController.createCategory);

router.put('/:id', categoriesController.updateCategoryById);

router.delete('/:id', categoriesController.deleteCategoryById);

export default  router;