import Kuisioner from '../models/kuisioner.js'

export const getKuisioners = async(req, res) => {
    try {
        const data = await Kuisioner.find({})
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

export const getKuisionerById = async(req, res) => {
    try {
        const id = req.params.id
        const data = await Kuisioner.findOne({ _id: id })
        if (data == null) {
            return res.status(404).json({
                code: 404,
                status: 'No Content',
                message: 'Kuisioner not found'
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

export const getKuisionerByBagian = async(req, res) => {
    try {
        const bagian = req.params.bagian
        const data = await Kuisioner.find({ bagian })
        if (data == null) {
            return res.status(404).json({
                code: 404,
                status: 'No Content',
                message: 'Kuisioner not found'
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

export const getKuisionerSortNomor = async(req, res) => {
    try {
        await Kuisioner.find({}).sort({ nomor: 1 })
            .then(data => {
                console.log(data)
                if (data.length === 0) return res.status(404).json({ code: 404, status: 'Not found', message: 'Data tidak ada' })
                return res.status(200).json({ code: 200, status: 'Success', data })
            })
            .catch(error => res.status(400).json({ code: 400, status: 'Bad request', message: error.message }))
    } catch (error) {
        return res.status(500).json({
            code: 500,
            status: 'Internal server error',
            message: error.message
        })
    }
}

export const getMaksimalBagian = async(req, res) => {
    try {
        const result = await Kuisioner.find({}).sort({ bagian: -1 }).limit(1)
        const data = result[0].bagian
        if (!data) {
            res.status(404).json({
                code: 404,
                status: 'No Content',
                message: 'Kuisioner not found',
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

export const postKuisioner = async(req, res) => {
    try {
        const { nomor, pertanyaan, bagian, type } = req.body
        const newKuisioner = new Kuisioner({
            nomor,
            pertanyaan,
            bagian,
            type
        })
        newKuisioner.save(error => {
            if (error) {
                return res.status(400).json({
                    code: 400,
                    status: 'Bad request',
                    message: error.message
                })
            }
            return res.status(200).json({
                code: 200,
                status: 'success',
                message: 'Kuisioner berhasil ditambahkan'
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

export const deleteKuisioners = async(req, res) => {
    try {
        await Kuisioner.remove({}, error => {
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
                message: 'Data berhasil dihapus semua'
            })
        })
    } catch (error) {

    }
}