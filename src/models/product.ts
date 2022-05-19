class Product {
    name: string;
    description: string;
    price: number;

    constructor(product: Product) {
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
    }
}

export { Product }