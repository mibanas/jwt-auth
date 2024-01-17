import { config } from "dotenv"
import mongoose from "mongoose"

// env varaibels 
config()
const dbName = process.env.DB_NAME
const password = process.env.PASSWORD 
const url = `mongodb+srv://sanabimohamed:${password}@cluster0.yaudzqg.mongodb.net/${dbName}?retryWrites=true&w=majority`

class dbConnextion {
    constructor() {}

    async connect() {
        try {
            await mongoose.connect(url, {
                dbName : dbName
            })
            console.log('Le serveur est connecté à la base de données avec MongoDB.')
        } catch (error) {
            console.error(`Le serveur ne peut pas se connecter à la base de données : ${error}`)
        }
    }
}

const ConnectToMongoDB = new dbConnextion()

export default ConnectToMongoDB