const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({

firstName:{
type:String,
required:true
},

lastName:{
type:String
},

email:{
type:String
},

phone:{
type:String
},

country:{
type:String
},

product:{
type:String
},

quantity:{
type:Number
},

unitPrice:{
type:Number
},

total:{
type:Number
},

status:{
type:String
}

})

module.exports = mongoose.model("Order",OrderSchema)