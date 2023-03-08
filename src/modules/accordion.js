import { useState } from "react";
import '../css/modules/accordion.scss';

function Accordion({title, description}) {
    const [open, setOpen] = useState(false);

  return (
    <>
        <div className={open ? "accordion accordion--open" :"accordion"}>
            <button onClick={() =>setOpen(!open)} className="accordion-btn">
            <p>{title} </p>
            <i className="icon"> </i>
            </button>
            <div className="panel">
                <p >
                    {description}
                </p>
            </div>
        </div>
</>
);
}

export default Accordion;
