import React, { useState } from "react";

export default function ChartBuilder() {
  const [chartName, setChartName] = useState("");
  const [chartType, setChartType] = useState("Bar");
  const [dataField, setDataField] = useState("Quantity");
  const [width, setWidth] = useState(4);
  const [height, setHeight] = useState(4);

  const createChart = () => {
    const newChart = {
      id: Date.now().toString(),
      title: chartName,
      type: chartType.toLowerCase(),
      field: dataField,
      w: width,
      h: height
    };

    const savedCharts =
      JSON.parse(localStorage.getItem("charts")) || [];

    localStorage.setItem(
      "charts",
      JSON.stringify([...savedCharts, newChart])
    );

    alert("Chart Created");

    setChartName("");
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "#f8fafc",
        minHeight: "100vh"
      }}
    >
      <div style={card}>
        <h2>Create Chart</h2>

        <div style={grid}>
          <input
            placeholder="Chart Name"
            value={chartName}
            style={input}
            onChange={(e) =>
              setChartName(e.target.value)
            }
          />

          <select
            value={chartType}
            style={input}
            onChange={(e) =>
              setChartType(e.target.value)
            }
          >
            <option>Bar</option>
            <option>Pie</option>
            <option>Line</option>
            <option>Area</option>
            <option>Scatter</option>
            <option>Wave</option>
          </select>

          <select
            value={dataField}
            style={input}
            onChange={(e) =>
              setDataField(e.target.value)
            }
          >
            <option>Quantity</option>
            <option>Unit Price</option>
            <option>Total Amount</option>
            <option>Customer Name</option>
            <option>Product</option>
            <option>Status</option>
            <option>City</option>
            <option>Country</option>
            <option>State</option>
          </select>

          <input
            type="number"
            placeholder="Width"
            value={width}
            style={input}
            onChange={(e) =>
              setWidth(Number(e.target.value))
            }
          />

          <input
            type="number"
            placeholder="Height"
            value={height}
            style={input}
            onChange={(e) =>
              setHeight(Number(e.target.value))
            }
          />

          <button
            style={button}
            onClick={createChart}
          >
            Create Chart
          </button>
        </div>
      </div>
    </div>
  );
}

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
};

const grid = {
  display: "grid",
  gridTemplateColumns:
    window.innerWidth < 768
      ? "repeat(1,1fr)"
      : window.innerWidth < 1024
      ? "repeat(2,1fr)"
      : "repeat(3,1fr)",
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
  borderRadius: "8px",
  padding: "12px"
};