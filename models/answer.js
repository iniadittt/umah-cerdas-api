import mongoose from 'mongoose'

const answerSchema = new mongoose.Schema({
    idPertanyaan: {
        type: String,
        required: true,
    },
    jawaban: {
        type: String,
        required: true,
    }
})

const Answer = mongoose.model('Answer', answerSchema)

export default Answer