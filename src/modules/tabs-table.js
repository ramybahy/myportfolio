import '../css/modules/tabs-table.scss';
import { useState } from "react";

function Panel({title,description}) {
    return( 
        <div  className="panel">
            <h2>{title}</h2>
            <p className="panel__description">{description}</p>
        </div> 
    )
  }
function TabsTable(){
    const [data, setData] = useState({title:"london", description:"London is the capital city of England."});

       
    
return (
<div className=" tabs-table">
<div className="buttons">

<button onClick={()=>setData({title:"london", description:"London is the capital city of England."})} className="button" >London</button>
<button onClick={()=>setData({title:"Paris", description:"Paris is the capital of France."})} className="button">Paris</button>
<button onClick={()=>setData({title:"Tokyo", description:"Tokyo is the capital of Japan."})} className="button">Tokyo</button>

</div>
<Panel title={data.title}  description={data.description} />

</div>


)
}
export default TabsTable
