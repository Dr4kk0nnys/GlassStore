import { Router } from "express";
const router = Router();

import { Product } from "models/product";
import { products } from "controllers/database/products/products";

router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        products.push(product);

        return res.status(200).send(product);
    } catch (e) {
        throw 'Invalid product';
    }
});

export { router as createProduct };