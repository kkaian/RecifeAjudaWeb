const mongoose = require ("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema ({

name:{
    type: String,
    required: true,
},

birth:{
    type: Date,
    required: true,
},

cpf:{
    type: Number,
    required: true,
},

telefone:{
    type: Number,
    required: true,
},

email:{
    type: String,
    required: true,
},

cep: {
    type: Number,
    required: true,
},

password: {
    type: String,
    required: true,
},

},{timestamps : true});

const User = mongoose.model("User", userSchema);


module.exports = {
    User,
    userSchema,
};