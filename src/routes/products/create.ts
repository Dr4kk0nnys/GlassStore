import { Product } from "models/product";

import { Router } from "express";
const router = Router();

router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);

        return res.status(200).send(product);
    } catch (e) {
        throw 'Invalid product';
    }
});

export { router as createProduct };