import express from 'express'
import { getProducts, getProduct, postProduct } from '../controllers/product.js'
import { getKuisioners, getKuisionerById, getKuisionerByBagian, getMaksimalBagian, getKuisionerSortNomor, postKuisioner, deleteKuisioners } from '../controllers/kuisioner.js'
import { getAnswers, postAnswer, deleteAnswers } from '../controllers/answer.js'


const router = express.Router()


router.get('/', (req, res) => res.send('Hello World'))
    // METHOD GET

router.get('/products', getProducts)
router.get('/product/:id', getProduct)

router.get('/kuisioners', getKuisioners)
router.get('/kuisioner/:id', getKuisionerById)
router.get('/kuisioner/bagian/:bagian', getKuisionerByBagian)
router.get('/kuisioner/bagian', getMaksimalBagian)
router.get('/kuisioner-nomor', getKuisionerSortNomor)


router.get('/answers', getAnswers)




// METHOD POST

router.post('/product', postProduct)
router.post('/kuisioner', postKuisioner)
router.post('/answer', postAnswer)


// METHOD DELETE

router.delete('/kuisioners', deleteKuisioners)
router.delete('/answers', deleteAnswers)



export default router