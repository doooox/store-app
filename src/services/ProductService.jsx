class ProductService {
    products = [
        {
            id: 1,
            name: 'Laptop',
            count: 10
        },
        {
            id: 2,
            name: 'Keybord',
            count: 10
        },
        {
            id: 3,
            name: 'Mouse',
            count: 10
        },
        {
            id: 4,
            name: 'Monitor',
            count: 10
        },
        {
            id: 5,
            name: 'Headphones',
            count: 10
        }
    ];

    getAll() {
        return [...this.products]
    }
    get(id) {
        return this.products.find((product) => product.id === Number(id));
    }
    increment(id) {
        const index = this.products.findIndex((product) => product.id === Number(id));
        if (index !== -1) {
            this.products[index].count++;
        }
        return this.products[index].count;
    }
    decrement(id) {
        const index = this.products.findIndex(
            (product) => product.id === Number(id)
        );
        if (index !== -1 && this.products[index].count > 0) {
            this.products[index].count--;
        }
        return this.products[index].count;
    }

}
export default new ProductService