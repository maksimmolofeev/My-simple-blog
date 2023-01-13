const uuid = require('uuid')
const path = require('path')

const { Product, Composition } = require('../models/models');
const apiError = require('../error/ApiError');
const { where } = require('sequelize');

class productController {
    async create(req, res, next) {
        try {
            let { name, price, advise, description, categoryId, composition } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({name, price, advise, description, categoryId, img: fileName})

            if (composition) {
                composition = JSON.parse(composition)
                composition.forEach(e => {
                    Composition.create({
                        name: e.name,
                        description: e.description,
                        productId: product.id
                    })
                });
            }

            res.json(product)
        } catch (error) {
            next(apiError.badRequest(error.message))
        }
    }

    async getAll(req, res) {
        let { categoryId, limit, page } = req.query
        page = page || 1;
        limit = limit || 16;
        let offset = page * limit - limit
        let products;
        if (!categoryId) {
        products = await Product.findAndCountAll({limit, offset})
        }
        if (categoryId) {
            products = await Product.findAndCountAll({where: {categoryId}, limit, offset})
        }

        return res.json(products)
    }

    async getOne(req, res) {
        const { id } = req.params
        const product = await Product.findOne(
            {
                where:{id},
                include: [{model: Composition, as: 'composition'}]
            }

        )
        return res.json(product)
    }
}

module.exports = new productController();