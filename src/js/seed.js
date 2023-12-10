const seed = {
  stock: {

    products: [
      {
        "id": "da39a3ee5e6b4b0d3255bfef95601890afd80709",
        "name": "Produto teste",
        "category" : "capas",
        "quantity": 50,
        "brand": "Samsung",
        "description": "",
        "price": 120,
        "img": ""
      }
    ],
  },
  users: [
    {
      id: "40bd001563085fc35165329ea1ff5c5ecbdbbeef",
      name: "NOME DO TIO DO CLEBER",
      isAdm: true,
    },
    {
      id: "7c4a8d09ca3762af61e59520943dc26494f8941b",
      name: "Leonardo",
      isAdm: false,
      cart: [
        {
          "productId": "da39a3ee5e6b4b0d3255bfef95601890afd80709",
          "quantity": 2
        }
      ],
    },
  ],

  
};

