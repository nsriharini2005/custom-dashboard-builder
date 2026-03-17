import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function BarChartWidget({ data }) {

    return (
        <div style={{border:"1px solid #ccc", padding:"10px", borderRadius:"5px"}}>
            <h4>Sales per Product</h4>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <XAxis dataKey="product" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChartWidget;