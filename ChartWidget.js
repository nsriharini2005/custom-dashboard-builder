import {BarChart,Bar,XAxis,YAxis,Tooltip} from "recharts"

function ChartWidget({data}){

return(

<BarChart width={400} height={300} data={data}>

<XAxis dataKey="product"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="total"/>

</BarChart>

)

}

export default ChartWidget