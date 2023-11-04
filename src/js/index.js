const getLocalStorage = () => JSON.parse(localStorage.getItem('db_shop')) ?? []
const setLocalStorage = (dbShop) => localStorage.setItem("db_shop", JSON.stringify(dbShop))


