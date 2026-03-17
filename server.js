const express = require("express")
const cors = require("cors")
const fs = require("fs")

const app = express()

app.use(cors())
app.use(express.json())

let orders = []

// Load saved data
if (fs.existsSync("orders.json")) {
  orders = JSON.parse(fs.readFileSync("orders.json"))
}

// Get orders
app.get("/orders", (req, res) => {
  res.json(orders)
})

// Create order
app.post("/orders", (req, res) => {

  const order = req.body

  order.total = order.quantity * order.unitPrice

  orders.push(order)

  fs.writeFileSync("orders.json", JSON.stringify(orders))

  res.json({
    message: "Order created",
    order
  })

})

// Delete order
app.delete("/orders/:index", (req, res) => {

  const index = parseInt(req.params.index)

  orders.splice(index, 1)

  fs.writeFileSync("orders.json", JSON.stringify(orders))

  res.json({ message: "Order deleted" })

})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})