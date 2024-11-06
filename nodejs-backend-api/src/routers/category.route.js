"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_controller_1 = __importDefault(require("../controllers/categories.controller"));
const router = express_1.default.Router();
router.get('/', categories_controller_1.default.getAll);
router.get('/:id', categories_controller_1.default.getCategoryById);
router.post('/', categories_controller_1.default.createCategory);
router.put('/:id', categories_controller_1.default.updateCategoryById);
router.delete('/:id', categories_controller_1.default.deleteCategoryById);
exports.default = router;
