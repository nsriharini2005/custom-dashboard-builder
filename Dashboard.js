import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

export default function Dashboard() {
  const [filter, setFilter] = useState("All time");

  const salesData = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 50 },
    { name: "Mar", value: 70 }
  ];

  const customerData = [
    { name: "A", value: 35 },
    { name: "B", value: 65 }
  ];

  const defaultCharts = [
    { id: "bar", title: "Orders Trend", type: "bar" },
    { id: "pie", title: "Customers", type: "pie" },
    { id: "line", title: "Revenue", type: "line" },
    { id: "area", title: "Growth", type: "area" }
  ];

  const savedCharts =
    JSON.parse(localStorage.getItem("charts")) || [];

  const allCharts = [
    ...defaultCharts,
    ...savedCharts.filter(
      (c) =>
        !defaultCharts.find((d) => d.id === c.id)
    )
  ];

  const [charts, setCharts] = useState(allCharts);

  const [layout, setLayout] = useState(() => {
    const saved = localStorage.getItem("layout");

    return saved
      ? JSON.parse(saved)
      : [
          { i: "bar", x: 0, y: 0, w: 4, h: 6 },
          { i: "pie", x: 4, y: 0, w: 4, h: 6 },
          { i: "line", x: 8, y: 0, w: 4, h: 6 },
          { i: "area", x: 0, y: 6, w: 4, h: 6 }
        ];
  });

  const [cols, setCols] = useState(12);
  const [gridWidth, setGridWidth] = useState(1200);

  useEffect(() => {
    const updateResponsive = () => {
      if (window.innerWidth < 768) {
        setCols(4);
      } else if (window.innerWidth < 1024) {
        setCols(8);
      } else {
        setCols(12);
      }

      setGridWidth(window.innerWidth - 80);
    };

    updateResponsive();

    window.addEventListener("resize", updateResponsive);

    return () =>
      window.removeEventListener(
        "resize",
        updateResponsive
      );
  }, []);

  useEffect(() => {
    localStorage.setItem("charts", JSON.stringify(charts));
  }, [charts]);

  useEffect(() => {
    localStorage.setItem("layout", JSON.stringify(layout));
  }, [layout]);

  const editTitle = (id, value) => {
    setCharts(
      charts.map((chart) =>
        chart.id === id
          ? { ...chart, title: value }
          : chart
      )
    );
  };

  const deleteChart = (id) => {
    setCharts(charts.filter((c) => c.id !== id));
    setLayout(layout.filter((l) => l.i !== id));
  };

  return (
    <div style={{ padding: "30px", ...responsiveWrapper }}>

      <div style={kpiRow}>
        <div style={kpiCard}>
          <h4>Total Orders</h4>
          <h2>120</h2>
        </div>

        <div style={kpiCard}>
          <h4>Total Revenue</h4>
          <h2>₹45,000</h2>
        </div>

        <div style={kpiCard}>
          <h4>Customers</h4>
          <h2>86</h2>
        </div>

        <div style={kpiCard}>
          <h4>Products</h4>
          <h2>24</h2>
        </div>
      </div>

      <div style={filterCard}>
        <label>Show data for: </label>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >
          <option>All time</option>
          <option>Today</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
        </select>
      </div>

      <GridLayout
        layout={layout}
        cols={cols}
        rowHeight={50}
        width={gridWidth}
        onLayoutChange={(newLayout) =>
          setLayout(newLayout)
        }
      >
        {charts.map((chart) => (
          <div key={chart.id} style={card}>
            <div style={top}>
              <input
                value={chart.title}
                onChange={(e) =>
                  editTitle(
                    chart.id,
                    e.target.value
                  )
                }
              />

              <button
                onClick={() =>
                  deleteChart(chart.id)
                }
              >
                Delete
              </button>
            </div>

            {(chart.type === "bar") && (
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={salesData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            )}

            {(chart.type === "pie") && (
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={customerData}
                    dataKey="value"
                    fill="#10b981"
                  />
                </PieChart>
              </ResponsiveContainer>
            )}

            {(chart.type === "line") && (
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={salesData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    dataKey="value"
                    stroke="#ef4444"
                  />
                </LineChart>
              </ResponsiveContainer>
            )}

            {(chart.type === "area") && (
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={salesData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area dataKey="value" fill="#f59e0b" />
                </AreaChart>
              </ResponsiveContainer>
            )}

            {(chart.type === "scatter") && (
              <ResponsiveContainer width="100%" height={220}>
                <ScatterChart>
                  <XAxis dataKey="value" />
                  <YAxis dataKey="value" />
                  <Tooltip />
                  <Scatter data={salesData} fill="#8b5cf6" />
                </ScatterChart>
              </ResponsiveContainer>
            )}

            {(chart.type === "wave") && (
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={salesData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    dataKey="value"
                    fill="#06b6d4"
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        ))}
      </GridLayout>
    </div>
  );
}

const card = {
  background: "white",
  borderRadius: "16px",
  padding: "15px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
};

const top = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px"
};

const kpiRow = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "20px",
  marginBottom: "25px"
};

const kpiCard = {
  background: "white",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  textAlign: "center"
};

const filterCard = {
  background: "white",
  padding: "15px",
  borderRadius: "12px",
  marginBottom: "25px"
};

const responsiveWrapper = {
  width: "100%",
  overflowX: "hidden"
};