import Product from '../models/product.js'

export const getProducts = async(req, res) => {
    try {
        const data = await Product.find({})
        return res.status(200).json({
            code: 200,
            status: 'Success',
            data
        })
    } catch (error) {
        return res.status(500).json({
            code: 500,
            status: 'Internal server error',
            message: error.message
        })
    }
}

export const getProduct = async(req, res) => {
    try {
        const id = req.params.id
        const data = await Product.findOne({ _id: id })
        if (data == null) {
            return res.status(404).json({
                code: 404,
                status: 'No Content',
                message: 'Product not found'
            })
        } else {
            return res.status(200).json({
                code: 200,
                status: 'Success',
                data
            })
        }
    } catch (error) {
        return res.status(500).json({
            code: 500,
            status: 'Internal server error',
            message: error.message
        })
    }
}

export const postProduct = async(req, res) => {
    try {
        const { nama, deskripsi, harga, urlImage } = req.body
        const newProduct = new Product({
            nama,
            deskripsi,
            harga,
            urlImage
        })
        newProduct.save(error => {
            if (error) {
                return res.status(400).json({
                    code: 400,
                    status: 'Bad request',
                    message: error.message
                })
            }
            return res.status(200).json({
                code: 200,
                status: 'Success',
                message: 'Product berhasil ditambahkan'
            })
        })
    } catch (error) {
        return res.status(500).json({
            code: 500,
            status: 'Internal server error',
            message: error.message
        })
    }
}