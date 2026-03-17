import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [menuIndex, setMenuIndex] = useState(null);

  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    email: "",
    country: "",
    city: "",
    state: "",
    street: "",
    product: "",
    quantity: "",
    unitPrice: ""
  });

  const fetchOrders = async () => {
    const res = await axios.get("http://localhost:5000/orders");
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const submitOrder = async () => {
    if (Object.values(form).includes("")) {
      alert("Please fill the field");
      return;
    }

    if (editIndex !== null) {
      await axios.put("http://localhost:5000/orders/" + editIndex, form);
      setEditIndex(null);
    } else {
      await axios.post("http://localhost:5000/orders", form);
    }

    setForm({
      firstName: "",
      secondName: "",
      email: "",
      country: "",
      city: "",
      state: "",
      street: "",
      product: "",
      quantity: "",
      unitPrice: ""
    });

    fetchOrders();
  };

  const deleteOrder = async (index) => {
    await axios.delete("http://localhost:5000/orders/" + index);
    fetchOrders();
  };

  const editOrder = (index) => {
    setForm(orders[index]);
    setEditIndex(index);
    setMenuIndex(null);
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "#f8fafc",
        minHeight: "100vh",
        overflowX: "auto"
      }}
    >
      <div style={card}>
        <h2>Create Order</h2>

        <div style={grid}>
          {Object.keys(form).map((field) => (
            <input
              key={field}
              placeholder={field}
              value={form[field]}
              style={input}
              onChange={(e) =>
                setForm({
                  ...form,
                  [field]: e.target.value
                })
              }
            />
          ))}

          <button style={button} onClick={submitOrder}>
            {editIndex !== null ? "Update" : "Submit"}
          </button>
        </div>
      </div>

      <div style={card}>
        <h2>Customer Orders</h2>

        <table
          style={{
            width: "100%",
            marginTop: "20px",
            minWidth: "1200px"
          }}
        >
          <thead>
            <tr style={{ background: "#6366f1", color: "white" }}>
              <th>First Name</th>
              <th>Second Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>City</th>
              <th>State</th>
              <th>Street</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.firstName}</td>
                <td>{order.secondName}</td>
                <td>{order.email}</td>
                <td>{order.country}</td>
                <td>{order.city}</td>
                <td>{order.state}</td>
                <td>{order.street}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.unitPrice}</td>
                <td>{order.total}</td>

                <td style={{ position: "relative", textAlign: "center" }}>
                  <button
                    onClick={() =>
                      setMenuIndex(menuIndex === index ? null : index)
                    }
                    style={{
                      background: "#5b5b5b",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      padding: "6px 12px",
                      cursor: "pointer",
                      fontSize: "18px",
                      fontWeight: "bold"
                    }}
                  >
                    ⋮
                  </button>

                  {menuIndex === index && (
                    <div style={menu}>
                      <div
                        style={menuItem}
                        onClick={() => editOrder(index)}
                      >
                        Edit
                      </div>

                      <div
                        style={{
                          ...menuItem,
                          color: "red"
                        }}
                        onClick={() => deleteOrder(index)}
                      >
                        Delete
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  marginBottom: "30px"
};

const grid = {
  display: "grid",
  gridTemplateColumns:
    window.innerWidth < 768
      ? "repeat(1,1fr)"
      : window.innerWidth < 1024
      ? "repeat(2,1fr)"
      : "repeat(4,1fr)",
  gap: "15px"
};

const input = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd"
};

const button = {
  background: "#4f46e5",
  color: "white",
  border: "none",
  borderRadius: "8px"
};

const menu = {
  position: "absolute",
  top: "40px",
  right: "0",
  background: "white",
  borderRadius: "10px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  minWidth: "120px",
  zIndex: 1000,
  overflow: "hidden"
};

const menuItem = {
  padding: "10px",
  cursor: "pointer",
  textAlign: "left"
};