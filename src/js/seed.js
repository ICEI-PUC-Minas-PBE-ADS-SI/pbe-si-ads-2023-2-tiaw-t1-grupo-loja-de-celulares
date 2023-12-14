const seed = {
  stock: {

    products: [
      {
        "id": "da39a3ee5e6b4b0d3255bfef95601890afd80709",
        "name": "Produto teste",
        "category" : "Capinha/Película",
        "quantity": 50,
        "brand": "Samsung",
        "description": "",
        "price": "120,00",
        "img": "https://placehold.co/400"
      },
      {
        "id": "da39a3ee5e6b4b0d3255bfef95601890afd8070",
        "name": "Iphone 6s",
        "category" : "Celular",
        "quantity": 50,
        "brand": "Apple",
        "description": "",
        "price": "1800,00",
        "img": "https://tendinfo.com.br/image/cache/catalog/Produtos%202019/00%201052-400x400.jpg"
      },
      {
        "id": "da39a3ee5e6b4b0d3255bfef95601890afd8070",
        "name": "Caixa de Som Megaboom 3",
        "category" : "Caixa de som",
        "quantity": 50,
        "brand": "Ultimate Ears",
        "description": "",
        "price": "465,20",
        "img": "https://tendinfo.com.br/image/cache/catalog/0000001%20abril%202022/08.04%201-400x400.jpg"
      },
      {
        "id": "da39a3ee5e6b4b0d3255bfef95601890afd8070",
        "name": "CARTÃO DE MEMÓRIA 16GB",
        "category" : "Cartão de memória",
        "quantity": 50,
        "brand": "SanDisk",
        "description": "",
        "price": "34,00",
        "img": "https://tendinfo.com.br/image/cache/catalog/produtos/SDC4%20-%2016GB-400x400.jpg"
      },
      {
        "id": "da39a3ee5e6b4b0d3255bfef95601890afd8070",
        "name": "FONE DE OUVIDO MOD.SV5333",
        "category" : "Fone de ouvido",
        "quantity": 50,
        "brand": "One for All",
        "description": "",
        "price": "48,53",
        "img": "https://tendinfo.com.br/image/cache/catalog/produtos/sv5333-thumb-400x400.png"
      },
      {
        "id": "da39a3ee5e6b4b0d3255bfef95601890afd8070",
        "name": "URBEATS3 DEFIANT",
        "category" : "Fone de ouvido",
        "quantity": 50,
        "brand": "Beats by Dr. Dre",
        "description": "",
        "price": "741,00",
        "img": "https://tendinfo.com.br/image/cache/catalog/02823/0.100%20326-400x400.jpg"
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
  service: [
    {
      "Nomecliente": "Thales Andrade",
      "aparelho": "Iphone XR",
      "servico": "Troca de Bateria",
      "data": "31/07/2023 21:19",
      "status": "Em análise"
    },
    {
      "Nomecliente": "Thales Andrade",
      "aparelho": "Iphone XR",
      "servico": "Troca de Bateria",
      "data": "31/07/2023 21:19",
      "status": "Em análise"
    },
    {
      "Nomecliente": "Thales Andrade",
      "aparelho": "Iphone XR",
      "servico": "Troca de Bateria",
      "data": "31/07/2023 21:19",
      "status": "Em análise"
    },
    {
      "Nomecliente": "Thales Andrade",
      "aparelho": "Iphone XR",
      "servico": "Troca de Bateria",
      "data": "31/07/2023 21:19",
      "status": "Em análise"
    }
  ],
  cellparts: [
    {
    "id": "",
    "name": "Tela",
    "compatibility": "",
    "suplier": "",
    "quantity": "20",
    "price": "120"
    },
    {
      "id": "",
      "name": "Tela",
      "compatibility": "",
      "suplier": "",
      "quantity": "20",
      "price": "120"
    },
    {
      "id": "",
      "name": "Tela",
      "compatibility": "",
      "suplier": "",
      "quantity": "20",
      "price": "120"
    },
    {
      "id": "",
      "name": "Tela",
      "compatibility": "",
      "suplier": "",
      "quantity": "20",
      "price": "120"
    }
  ]
};

function salvarNoLocalStorage() {
  localStorage.setItem('seedData', JSON.stringify(seed));
}

function recuperarDoLocalStorage() {
  const seedData = localStorage.getItem('seedData');
  if (seedData) {
    seed = JSON.parse(seedData);
  }
}
