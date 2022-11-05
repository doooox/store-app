class ProductService{
    products = [
        {
            id: 1,
            name: 'Laptop'
        },
        {
            id: 2,
            name: 'Keybord'
        },
        {
            id: 3,
            name: 'Mouse'
        },
        {
            id:4,
            name: 'Monitor'
        },
        {
            id:5,
            name: 'Headphones'
        }
    ];

    getAll(){
        return [...this.products]
    }
}
export default new ProductService