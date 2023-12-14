const seed = {
  stock: {
    products: [
      {
        id: "da39a3ee5",
        name: "Iphone 6s",
        category: "Celular",
        brand: "Apple",
        description:
          "O iPhone 6s é um smartphone desenvolvido pela Apple e lançado em setembro de 2015.",
        price: 1800,
        img: "https://tendinfo.com.br/image/cache/catalog/Produtos%202019/00%201052-400x400.jpg",
      },
      {
        id: "akfjienqd",
        name: "Iphone 11",
        category: "Celular",
        brand: "Apple",
        description:
          "O iPhone 11 é um smartphone desenvolvido pela Apple e lançado em setembro de 2019.",
        price: 3400,
        img: "https://i.ebayimg.com/images/g/xEwAAOSwv81kNc7l/s-l1600.jpg",
      },
      {
        id: "12fffeeediuwjd",
        name: "Iphone 14",
        category: "Celular",
        brand: "Apple",
        description:
          "O iPhone 14 é um smartphone desenvolvido pela Apple e lançado em setembro de 2019.",
        price: 4400,
        img: "https://i.ebayimg.com/images/g/ExQAAOSwOWJjKX34/s-l1600.jpg",
      },
    ],
  },
  users: [
    {
      id: "40bd001563085fc35165329ea1ff5c5ecbdbbeef",
      email: "admin@gmail.com",
      password: "1234",
      name: "TIO DO CLEBER",
      isAdm: true,
    },
    {
      id: "7c4a8d09ca3762af61e59520943dc26494f8941b",
      name: "Leonardo",
      email: "leo@gmail.com",
      password: "1234",
      isAdm: false,
      cart: [
        {
          id: "da39a3ee5",
          quantity: 2,
        },
      ],
    },
  ],
};
