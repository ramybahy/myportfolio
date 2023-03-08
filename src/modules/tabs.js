import '../css/modules/tabs.scss';
import { useState } from "react";

function Tabcontent({title,description}) {
    return( 
        <div  className="tabcontent">
            <h2>{title}</h2>
            <p className="tabcontent__description">{description}</p>
        </div> 
    )
  }
function Tabs() {

    const [data, setData] = useState({title:"london", description:"London is the capital city of England."});

return (
<>
<h1>Tabs</h1>

<p>Click on the buttons inside the tabbed menu:</p>

<div className="tabs">

<button onClick={()=>setData({title:"london", description:"London is the capital city of England."})} className="tabs__button" >London</button>
<button onClick={()=>setData({title:"Paris", description:"Paris is the capital of France."})} className="tabs__button">Paris</button>
<button onClick={()=>setData({title:"Tokyo", description:"Tokyo is the capital of Japan."})} className="tabs__button">Tokyo</button>

</div>
<Tabcontent title={data.title}  description={data.description} />


{/* <div id="London" className="tabcontent">
<h2>London</h2>
<p>London is the capital city of England.</p>
</div>

<div id="Paris" className="tabcontent">
<h2>Paris</h2>
<p>Paris is the capital of France.</p>
</div>

<div id="Tokyo" className="tabcontent">
<h2>Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>
</div> */}
</>
)
}

export default Tabs


