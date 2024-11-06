"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const http_errors_1 = __importDefault(require("http-errors"));
const fileName = './src/database/categories.json';
//Tra lai ket qua
const getAll = () => {
    //doc file lay noi dung json
    //Doc noi dung cua file, co chua tieng viet
    const data = node_fs_1.default.readFileSync(fileName, { encoding: 'utf-8', flag: 'r' });
    //const data = fs.readFile(fileName, 'utf-8');
    const categories = JSON.parse(data);
    return categories;
};
const getCategoryById = (id) => {
    //doc file lay noi dung json
    const data = node_fs_1.default.readFileSync(fileName, { encoding: 'utf-8', flag: 'r' });
    const categories = JSON.parse(data);
    //lay thong tin
    const category = categories.find(c => c.id === id);
    if (!category) {
        throw (0, http_errors_1.default)(404, 'Category not found');
    }
    return category;
};
const createCategory = (payload) => {
    //doc file lay noi dung json
    const data = node_fs_1.default.readFileSync(fileName, { encoding: 'utf-8', flag: 'r' });
    const categories = JSON.parse(data);
    //Bo sung phan tu moi vao mang cu
    const newCategories = [...categories, payload];
    //ghi file
    node_fs_1.default.writeFile(fileName, JSON.stringify(newCategories), function (err) {
        if (err)
            throw err;
        console.log('Saved!');
    });
    return payload;
};
const updateCategoryById = (id, payload) => {
    //doc file lay noi dung json
    const data = node_fs_1.default.readFileSync(fileName, { encoding: 'utf-8', flag: 'r' });
    const categories = JSON.parse(data);
    //check xem id co ton tai khong
    const category = categories.find(c => c.id === id);
    if (!category) {
        throw (0, http_errors_1.default)(404, 'Category not found');
    }
    //Tim item co id va thay doi cac gia tri
    categories.map((c) => {
        if (c.id === id) {
            c.name = payload.name;
            c.description = payload.description;
        }
    });
    //ghi file
    node_fs_1.default.writeFile(fileName, JSON.stringify(categories), function (err) {
        if (err)
            throw err;
        console.log('Saved!');
    });
    return payload;
};
const deleteCategoryById = (id) => {
    //doc file lay noi dung json
    const data = node_fs_1.default.readFileSync(fileName, { encoding: 'utf-8', flag: 'r' });
    const categories = JSON.parse(data);
    //check xem id co ton tai khong
    const category = categories.find(c => c.id === id);
    if (!category) {
        throw (0, http_errors_1.default)(404, 'Category not found');
    }
    console.log(id, categories);
    //Loc ra nhung item khong phai la item co ID dang xoa
    const newCategories = categories.filter(c => c.id !== (category === null || category === void 0 ? void 0 : category.id));
    //Ghi file
    node_fs_1.default.writeFile(fileName, JSON.stringify(newCategories), function (err) {
        if (err)
            throw err;
        console.log('Saved!');
    });
    return category;
};
exports.default = {
    getAll,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById
};
