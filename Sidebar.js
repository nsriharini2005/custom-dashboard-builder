import { Link } from "react-router-dom"

export default function Sidebar(){

return(

<div className="w-64 h-screen bg-indigo-700 text-white p-5 fixed">

<h1 className="text-2xl font-bold mb-8">Dashboard</h1>

<ul className="space-y-4">

<li>
<Link to="/" className="hover:text-yellow-300">
Dashboard
</Link>
</li>

<li>
<Link to="/orders" className="hover:text-yellow-300">
Customer Orders
</Link>
</li>

</ul>

</div>

)

}