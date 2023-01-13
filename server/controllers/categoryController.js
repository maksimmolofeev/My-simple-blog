const uuid = require('uuid')
const path = require('path')

const { Category } = require('../models/models');
const apiError = require('../error/ApiError');

class categoryController {
    async create(req, res, next) {
        try {
            const { name, url } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const category = await Category.create({name, url, img: fileName})
            return res.json(category)
        } catch (e) {
            next(apiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res) {
        const categories = await Category.findAll()
        return res.json(categories)
    }

}

module.exports = new categoryController();