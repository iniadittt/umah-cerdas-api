import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    urlImage: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    }
})

const Product = mongoose.model('Product', productSchema)

export default Product