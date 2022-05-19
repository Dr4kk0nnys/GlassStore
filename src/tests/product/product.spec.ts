import axios from "axios";
import { Product } from "models/product";

it('should create a new product', async () => {
    const response = await axios({
        url: 'http://localhost:8080/products/',
        method: 'POST',
        data: {
            name: 'Product name',
            description: 'Product description',
            price: 10
        }
    });

    const data: Product = response.data;

    expect(data).toMatchObject({
        name: 'Product name',
        description: 'Product description',
        price: 10
    })
});

export { };