import '../css/modules/responsive-nav.scss';


function ResponsiveNav() {
    function openMenu() { 
        const menu = document.querySelector(".nav")
        menu.classList.toggle("nav--open")
    }
    return (
        <>
        <div className="nav"> 
            <div className="nav__btn-wrapper">
            <a className="nav__link nav__link--green">Home </a> 
            <a className="nav__btn nav__link nav__link--burger" onClick={openMenu}></a>
            </div>

            <a className="nav__link">News </a>
            <a className="nav__link"> Contact</a> 
            <a className="nav__link">About </a> 
        </div>
        <div>
        </div>
        <h1>Responsive Topnav Example</h1>
        <p> Resize the browser window to see how it works.</p>
        </>

)
}

export default ResponsiveNav
