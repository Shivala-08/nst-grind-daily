use("shopDB");

db.products.insertMany([
  {
    name: "Wireless Mouse",
    price: 799,
    category: "Electronics",
    supplier: "GadgetMart"
  },
  {
    name: "Cotton T-shirt",
    price: 499,
    category: "Apparel",
    supplier: "FashionCo",
    inStock: true
  }
]);

db.products.find().sort({ name: 1 });