const products = [
    {
        id: '1',
        name: 'AirForce 1',
        price: 45000,
        category: 'Nike',
        img: 'https://i.pinimg.com/564x/c3/57/d5/c357d503882fab5507f0376a50fa0bd9.jpg',
        stock: 25
    },
    {
        id: '2',
        name: 'AirForce Shadow',
        price: 45000,
        category: 'Nike',
        img: 'https://i.pinimg.com/564x/74/d8/2d/74d82d0d2a764e1397258f35f0144747.jpg',
        stock: 20
    },
    {
        id: '3',
        name: 'AirMax 97',
        price: 60000,
        category: 'Nike',
        img: 'https://i.pinimg.com/originals/f3/fa/6b/f3fa6ba8225d4e6b39d6409f89cb554a.jpg',
        stock: 5
    },
    {
        id: '4',
        name: 'Adidas Superstar',
        price: 45000,
        category: 'Adidas',
        img: 'https://i.pinimg.com/originals/af/de/f8/afdef80e61972b5cce105f291af8b68c.jpg',
        stock: 20
    },
    {
        id: '5',
        name: 'Adidas Forum Low',
        price: 55000,
        category: 'Adidas',
        img: 'https://i.pinimg.com/originals/78/63/46/7863460405ffc7fa6195601bad60a879.jpg',
        stock: 10
    },
    {
        id: '6',
        name: 'Adidas Ultra Boost',
        price: 65000,
        category: 'Adidas',
        img: 'https://i.pinimg.com/564x/48/38/8f/48388f4e8d74c11b7dd91fd222d77f7a.jpg',
        stock: 10
    },
    {
        id: '7',
        name: 'Puma CA Pro',
        price: 45000,
        category: 'Puma',
        img: 'https://i.pinimg.com/564x/a4/6c/ad/a46caddcdaa4abf32febf3b1a9ebacce.jpg',
        stock: 10
    },
    {
        id: '8',
        name: 'Puma RS 78',
        price: 60000,
        category: 'Puma',
        img: 'https://i.pinimg.com/originals/76/f6/01/76f6018113595149412c61e5dd78ccf0.jpg',
        stock: 5
    },
    {
        id: '9',
        name: 'Puma Seude',
        price: 40000,
        category: 'Puma',
        img: 'https://i.pinimg.com/originals/88/dc/db/88dcdbb1d964df7eadeb63224acddd4a.jpg',
        stock: 10
    }
];

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    });
};

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(producto => producto.id === productId))
        }, 2000)
    });
};

