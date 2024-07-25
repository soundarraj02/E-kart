const loginRouter = require("./Routes/loginRoutes");
const CategoryRoutes =require("./Routes/CategoryRoutes");
const productRouter = require("./Routes/ProductRoutes");

module.exports = function(app) {
    app.use('/api/v1/', loginRouter);
    app.use('/api/v1',CategoryRoutes);
    app.use('/api/v1/product',productRouter);
}
