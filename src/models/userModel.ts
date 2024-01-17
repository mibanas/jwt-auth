import { Schema, model } from "mongoose"

const userSchema = new Schema({
    completName : {
        type : String,
        require : true
    },
    userName : {
        type : String,
        require : true,
        unique: true
    },
    password : {
        type : String,
        require : true
    }
})

const userModel = model('Users', userSchema)

export default userModel
