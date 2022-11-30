import mongoose from 'mongoose'

const kuisionerSchema = new mongoose.Schema({
    nomor: {
        type: String,
        required: true
    },
    pertanyaan: {
        type: String,
        required: true
    },
    bagian: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

const Kuisioner = mongoose.model('Kuisioner', kuisionerSchema)

export default Kuisioner