import { Router } from "express";
const routes = Router();

import { createProduct } from "routes/products/create";

/* Products */
routes.use('/products', createProduct);

export { routes };