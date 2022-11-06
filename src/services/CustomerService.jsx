class CustomerServices {
    customers = [
        {
            id: 1,
            firstName: "Pera",
            lastName: "Peric",
            products: [{ id: 1, name: "Laptop" }],

        },
        {
            id: 2,
            firstName: "Ivan",
            lastName: "Ivanovic",
            products: [{ id: 1, name: "Laptop" }],
        },
        {
            id: 3,
            firstName: "Marko",
            lastName: "Markovic",
            products: [
                { id: 1, name: "Laptop" },
                { id: 2, name: "Headphones" }
            ],
        },
    ];

    getAll() {
        return [...this.customers]
    };
    get(id) {
        return this.customers.find((customer) => customer.id === Number(id))
    }
    delete(id) {
        this.customers = this.customers.filter((customer) => customer.id != Number(id));
        return true;
    }
    create(data) {
        const newId = this.customers[this.customers.length - 1].id + 1;
        this.customers.push({ id: newId, ...data });
        return this.customers[this.customers.length - 1];
    }
    productsUpdate(id, product) {
        const index = this.customers.findIndex(
            (customer) => customer.id === Number(id)
        );
        const newId = Math.random();
        if (index !== -1) {
            this.customers[index].products.push({ ...product, name: product, id: newId });
        }
    }

}

export default new CustomerServices