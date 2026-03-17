import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function PieChartWidget({ data }) {
    
    // format data for pie chart
    const pieData = data.map(d => ({ name: d.product, value: d.total }));

    return (
        <div style={{border:"1px solid #ccc", padding:"10px", borderRadius:"5px"}}>
            <h4>Product Share</h4>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80}>
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PieChartWidget;