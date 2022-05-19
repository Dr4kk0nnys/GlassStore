import { Router } from "express";
const routes = Router();

import { createProduct } from "routes/products/create";
import { getProducts } from "routes/products/get";

/* Products */
routes.use('/products', createProduct);
routes.use('/products', getProducts);


export { routes };