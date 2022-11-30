import Answer from '../models/awnswer.js'
import Kuisioner from '../models/kuisioner.js'


export const getAnswers = async(req, res) => {
    try {
        const data = await Answer.find({})
        console.log(data)
        if (data.length === 0) {
            res.status(404).json({
                code: 404,
                status: 'Not found',
                message: 'Data masih kosong'
            })
        }
        res.status(200).json({
            code: 200,
            status: 'Success',
            data
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: 'Internal server error',
            message: error.message
        })
    }
}


export const postAnswer = (req, res) => {
    try {
        const { idPertanyaan, jawaban } = req.body
        const match = Kuisioner.findOne({ _id: idPertanyaan })
        if (!match) return res.status(404).json({ code: 404, status: 'Not Found', message: 'Content Not Found' })
        const newAnswer = new Answer({
            idPertanyaan,
            jawaban,
        })
        newAnswer.save(error => {
            if (error) {
                return res.status(400).json({
                    code: 400,
                    status: 'Bad request',
                    message: 'Data gagal ditambahkan'
                })
            }
            return res.status(200).json({
                code: 200,
                status: 'Success',
                message: 'Data berhasil ditambahkan'
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

export const deleteAnswers = async(req, res) => {
    try {
        await Answer.remove({}, error => {
            if (error) return res.status(400).json({ code: 400, status: 'Bad request', message: error.message })
            return res.status(200).json({ code: 200, status: 'Success', message: 'Data berhasil dihapus semua' })
        })
    } catch (error) {

    }
}