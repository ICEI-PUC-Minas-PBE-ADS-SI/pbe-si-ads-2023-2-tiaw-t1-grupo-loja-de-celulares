const databaseName = "loja-de-celulares-database";
let db;

const productsList = document.querySelector("#productsLitst");

const intProject = () => {
  let foundDb = localStorage.getItem(databaseName);

  if (!foundDb) {
    localStorage.setItem(databaseName, JSON.stringify(seed));

    foundDb = localStorage.getItem(databaseName);
  }

  db = JSON.parse(foundDb);
};

const addItemCart = (id) => {
  if (localStorage.getItem("userLoginId")) {
    let foundDb = localStorage.getItem(databaseName);

    if (!foundDb) {
      localStorage.setItem(databaseName, JSON.stringify(seed));

      foundDb = localStorage.getItem(databaseName);
    }
    db = JSON.parse(foundDb);

    const userFoundIdx = db.users.findIndex(
      (user) => user.id == localStorage.getItem("userLoginId")
    );

    if (userFoundIdx) {
      if (db.users[userFoundIdx].cart.find((item) => item.id == id)) {
        Toast.fire({
          icon: "warning",
          title: "Esse produto já existe no carrinho.",
        });
        return;
      }

      db.users[userFoundIdx].cart.push({
        id: id,
        quantity: 1,
      });

      localStorage.setItem(databaseName, JSON.stringify(db));
      
      renderUserInfo()

      Toast.fire({
        icon: "success",
        title:
          "Produto adicionado no carrinho com sucesso!",
      });

    }
  } else {
    Toast.fire({
      icon: "warning",
      title:
        "Você precisar estar autenticado para adicionar um produto ao carrinho.",
    });
  }
};

const renderProducts = () => {
  const products = db.stock.products;
  productsList.innerHTML = "";
  products.forEach((product) => {
    productsList.insertAdjacentHTML(
      "beforeend",
      `
                <li
                class="product bg-white col-12 col-md-6 col-xl-4"
                data-aos="fade-up">
                    <div class="product-img-container overflow-hidden p-3">
                        <a href="/src/pages/Client/product.html">
                            <img src="${product.img}" alt="Product image" class="img-fluid" />
                        </a>
                    </div>
                    <div class="d-flex flex-column justify-content-between product-content-container gap-3"
                    >
                        <span class="product-brand text-white"> ${product.category} </span>
                        <h6 class="product-title m-0">${product.name}</h6>
                        <p class="product-description m-0">
                            ${product.description}
                        </p>
                        <p class="product-price m-0">R$ ${product.price}</p>
                        <button class="py-2 btn btn-sm btn-success" style="text-align: center;" onclick="addItemCart('${product.id}')">
                            Adicionar ao carrinho
                        </button>
                    </div>
                </li>
        `
    );
  });
};

const renderUserInfo = () => {
  const userLoginId = localStorage.getItem("userLoginId");
  if (!userLoginId) {
    document.querySelector("#user-info-container").innerHTML = `
        <a href="/src/pages/Auth/login.html" class="fw-bold text-white">Login</a>
                /
        <a href="/src/pages/Auth/register.html" class="fw-bold text-white">Cadastro</a>
    `;
    return;
  }

  let foundDb = localStorage.getItem(databaseName);

  if (!foundDb) {
    localStorage.setItem(databaseName, JSON.stringify(seed));

    foundDb = localStorage.getItem(databaseName);
  }

  db = JSON.parse(foundDb);

  const userFound = db.users.find((user) => user.id === userLoginId);

  if (userFound) {
    document.querySelector("#user-info-container").innerHTML = userFound.name;
    document.querySelector(" #count-cart").innerHTML = userFound.cart.length;
  }
};

intProject();
renderProducts();
renderUserInfo();

document.querySelector("#logout").addEventListener("click", function () {
  localStorage.setItem("userLoginId", null);

  window.location = "/src/pages/Auth/login.html";
});
