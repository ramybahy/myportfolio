import '../css/modules/tabs-header.scss';
import { useState } from "react";

function Header({title,description,backgroundColor}) {
    return( 
        <div style={{backgroundColor:backgroundColor}} className="header" id="London">
            <h1>{title}</h1>
            <p>{description}</p>
        </div> 
    )
  }
function TabsHeader()
{
    const [data, setData] = useState({title:"london", description:"London is the capital city of England.",backgroundColor:'red'});
    return (
        <div className="tabs-header">
            <Header title={data.title}  description={data.description} backgroundColor={data.backgroundColor} />
            <div className="tabs">
                <button onClick={()=>setData({title:"london", description:"London is the capital city of England." , backgroundColor:'red'})} className="tab" >London</button>
                <button onClick={()=>setData({title:"Paris", description:"Paris is the capital of France.", backgroundColor:'green'})} className="tab">Paris</button>
                <button onClick={()=>setData({title:"Tokyo", description:"Tokyo is the capital of Japan.", backgroundColor:'blue'})} className="tab">Tokyo</button>
                <button onClick={()=>setData({title:"Oslo", description:"Oslo is the capital of Norway.", backgroundColor:'orange'})} className="tab">Oslo</button>
            </div>
        </div>
)}
export default TabsHeader
