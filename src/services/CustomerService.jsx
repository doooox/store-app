class CustomerServices {
    customers = [
        {
            id: 1,
            firstName: "Pera",
            lastName: "Peric",

        },
        {
            id: 2,
            firstName: "Ivan",
            lastName: "Ivanovic",
        },
        {
            id: 3,
            firstName: "Marko",
            lastName: "Markovic",
        },
    ];

    getAll() {
        return [...this.customers]
    };
    get(id) {
        return this.customers.find((customer) => customer.id === Number(id))
    }
    delete(id) {
        this.customers = this.customers.filter((customer) => customer.id != id);
        return true;
    }

    create(data) {
        const newId = this.customers[this.customers.length - 1].id + 1;
        this.customers.push({ id: newId, ...data });
        return this.customers[this.customers.length - 1];
    }
}

export default new CustomerServices