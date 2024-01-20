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
    email : {
        type : String,
        require : true,
        unique: true
    },
    password : {
        type : String,
        require : true,
    },
    role: {
        type: String,
        enum: ['Administrator', 'Responsible', 'User'],
        required: true,
      },
})

const userModel = model('Users', userSchema)

export default userModel
