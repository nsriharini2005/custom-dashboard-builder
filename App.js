import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Orders from "./pages/Orders"
import ChartBuilder from "./pages/ChartBuilder"

function App(){

return(

<BrowserRouter>

<div style={{
display:"flex",
height:"100vh"
}}>

<div style={{
width:"250px",
background:"#4338ca",
color:"white",
padding:"20px"
}}>

<h1>Dashboard</h1>

<ul style={{
listStyle:"none",
padding:"0",
marginTop:"30px"
}}>

<li style={{marginBottom:"20px"}}>
<Link
to="/dashboard"
style={{color:"white",textDecoration:"none"}}
>
Dashboard
</Link>
</li>

<li style={{marginBottom:"20px"}}>
<Link
to="/orders"
style={{color:"white",textDecoration:"none"}}
>
Customer Orders
</Link>
</li>

<li style={{marginBottom:"20px"}}>
<Link
to="/charts"
style={{color:"white",textDecoration:"none"}}
>
Chart Builder
</Link>
</li>

</ul>

</div>

<div style={{
flex:1,
background:"linear-gradient(to right,#6366f1,#ec4899)",
padding:"20px",
overflow:"auto"
}}>

<h1 style={{color:"white"}}>
Custom Dashboard Builder
</h1>

<div style={{
background:"#f3f4f6",
borderRadius:"15px",
padding:"20px",
marginTop:"20px"
}}>

<Routes>

<Route path="/" element={<Dashboard/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/orders" element={<Orders/>}/>
<Route path="/charts" element={<ChartBuilder/>}/>

</Routes>

</div>

</div>

</div>

</BrowserRouter>

)

}

export default App
