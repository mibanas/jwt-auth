import app from './app'
import { config } from 'dotenv';
import ConnectToMongoDB from './config/mongoDB'


// env variable 
config()
const port = process.env.PORT || 3010

// data base connexion
ConnectToMongoDB.connect()

app.listen(port, () => {
    console.log(`Server is running at the port ${port}`);
})