function KPIWidget({title,value}){

return(

<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

<h3 className="text-gray-500 text-sm">
{title}
</h3>

<h1 className="text-3xl font-bold text-indigo-600">
{value}
</h1>

</div>

)

}

export default KPIWidget