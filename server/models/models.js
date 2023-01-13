const sequelize = require('../db');

const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketProduct = sequelize.define('basket_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    advise: {type: DataTypes.BOOLEAN, defaultValue: false},
    description: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    url: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Composition = sequelize.define('composition', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    description: {type: DataTypes.STRING, allowNull: false},
})

const ProductCategories = sequelize.define('product_categories', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(Basket)             // Связь между пользователем и корзиной 1 к 1
Basket.belongsTo(User)          // Корзина пренадлежит пользователю

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Product.hasOne(BasketProduct)
BasketProduct.belongsTo(Product)

Product.hasMany(Composition, {as: 'composition'})
Composition.belongsTo(Product)

Category.hasMany(Product)
Product.belongsTo(Category)

// Product.belongsToMany(Category, {through: ProductCategories})
// Category.belongsToMany(Product, {through: ProductCategories})

module.exports = {
    User,
    Basket,
    BasketProduct,
    Product,
    Category,
    Composition,
    ProductCategories
}