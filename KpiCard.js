import React from "react";

function KpiCard({ title, value }) {
    return (
        <div style={{
            border:"1px solid #ccc",
            padding:"15px",
            borderRadius:"5px",
            textAlign:"center",
            background:"#f9f9f9"
        }}>
            <h4>{title}</h4>
            <p style={{fontSize:"24px", margin:"5px 0"}}>{value}</p>
        </div>
    );
}

export default KpiCard;