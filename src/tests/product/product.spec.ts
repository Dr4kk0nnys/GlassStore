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

    expect(response.status).toBe(200);

    const data: Product = response.data;

    expect(data).toMatchObject({
        name: 'Product name',
        description: 'Product description',
        price: 10
    })
});

it('should get a new product', async () => {

    /* Creating a new product */
    await axios({
        url: 'http://localhost:8080/products/',
        method: 'POST',
        data: {
            name: 'Product name',
            description: 'Product description',
            price: 10
        }
    });

    /* Getting the new product */
    const response = await axios({
        url: 'http://localhost:8080/products',
        method: 'GET'
    });

    expect(response.status).toBe(200);

    const data: Product[] = response.data;

    expect(data[0]).toMatchObject({
        name: 'Product name',
        description: 'Product description',
        price: 10
    });
});

export { };