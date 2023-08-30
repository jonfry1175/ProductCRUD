const { Product } = require('../models')

class ProductController {
    static getProducts(req, res) {
        Product.findAll({
            order: [
                [
                    'id', 'asc' // agar id berurutan
                ]
            ]
        })
            .then((result) => {
                res.status(200).json(result)
            })
        // res.send("product page")
    }
    static create(req, res) {
        const {name, status, price, stock, image} = req.body
        Product.create({
            name,
            status,
            price,
            stock,
            image
        })
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
    static delete(req, res) {
        const id = Number(req.params.id)
        Product.destroy({
            where: { id },
        })
            .then((result) => {
                result === 1
                    ? res.status(200).json({
                        message: `Task id ${id} has been deleted!`
                    })
                    : res.status(400).json({
                        message: `Task id ${id} is not defined!`
                    })
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
    static update(req, res) {
        const id = Number(req.params.id);
        const {name, price, stock, image, status} = req.body
        Product.update(
            {
                name,
                price,
                stock,
                status,
                image
            },
            {
                where: { id },
            }
        )
            .then((result) => {
                result[0]
                    ? res.status(201).json({
                        message: `Task id ${id} has been updated!`
                    })
                    : res.status(400).json({
                        message: `Task id ${id} is not defined!`
                    })
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}

module.exports = ProductController;