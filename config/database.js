import mongoose from "mongoose"

const database = async() => {
    await mongoose.connect('mongodb+srv://admin:Admin123@rest-api-pkm.gawvv7s.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Database terhubung'))
        .catch(error => console.log(error))
}

export default database