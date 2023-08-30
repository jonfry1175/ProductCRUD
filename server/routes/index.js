const route = require("express").Router();

route.get("/", (req, res) => {
  res.send("Hello World!");
});

const productRoutes = require("./productRoutes");
route.use('/products', productRoutes);

module.exports = route;
