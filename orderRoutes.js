const express = require("express")
const router = express.Router()
const Order = require("../models/Order")

router.post("/create", async(req,res)=>{

const order = new Order(req.body)

await order.save()

res.json(order)

})

router.get("/all", async(req,res)=>{

const orders = await Order.find()

res.json(orders)

})

router.delete("/:id", async(req,res)=>{

await Order.findByIdAndDelete(req.params.id)

res.json({message:"Order deleted"})

})

module.exports = router