"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categories_service_1 = __importDefault(require("../services/categories.service"));
const getAll = (req, res) => {
    const result = categories_service_1.default.getAll();
    console.log('result', result);
    res.status(200).json(result);
};
const getCategoryById = (req, res, next) => {
    try {
        const { id } = req.params; //return id = string
        const category = categories_service_1.default.getCategoryById(parseInt(id));
        res.status(200).json(category);
    }
    catch (err) {
        next(err);
    }
};
const createCategory = (req, res) => {
    const data = req.body;
    const category = categories_service_1.default.createCategory(data);
    res.status(201).json({
        message: `Create Category`,
        category: category
    });
};
const updateCategoryById = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const category = categories_service_1.default.updateCategoryById(parseInt(id), data);
    res.status(200).json({
        message: `Update Category by ID ${id}`,
        category: category
    });
};
const deleteCategoryById = (req, res, next) => {
    try {
        const { id } = req.params;
        const category = categories_service_1.default.deleteCategoryById(parseInt(id));
        res.status(200).json({
            message: `Delete Category by ID ${id}`,
            category: category
        });
    }
    catch (err) {
        next(err);
    }
};
exports.default = {
    getAll,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById
};
