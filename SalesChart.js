import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

function SalesChart({data}){

return(

<div>

<h3>Sales Chart</h3>

<BarChart width={500} height={300} data={data}>

<XAxis dataKey="product"/>
<YAxis/>
<Tooltip/>

<Bar dataKey="total" fill="#8884d8"/>

</BarChart>

</div>

)

}

export default SalesChart