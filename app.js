import express from 'express'
import database from './config/database.js'
import cors from 'cors'
import router from './routes/app.js'

const app = express()
const PORT = 5000

database()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)


app.listen(PORT, () => console.log(`Server berjalan pada port: ${PORT}`))