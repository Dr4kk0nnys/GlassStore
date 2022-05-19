import { Router } from "express";
const router = Router();

import { products } from "controllers/database/products/products";

router.get('/', async (req, res) => {
    try {
        return res.status(200).send(products);
    } catch (e) {
        throw 'Invalid!';
    }
});

export { router as getProducts };