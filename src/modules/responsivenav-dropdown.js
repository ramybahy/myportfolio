
import '../css/modules/responsivenav-dropdown.scss';

     function openNav() {
const nav = document.querySelector(".nav")
if (nav.classList.contains("nav--open")){
     nav.classList.remove("nav--open")
}
else{
     nav.classList.add("nav--open")
}
     }

     function openDropdown() {
const nav = document.querySelector(".dropdown__menu")
if (nav.classList.contains("dropdown__menu--open")){
     nav.classList.remove("dropdown__menu--open")
}
else{
     nav.classList.add("dropdown__menu--open")
}
     }
function ResponsiveDropdown(){
return(     <div className="nav-wrapper">
    <button onClick={openNav} className="nav__button--burger"></button>
<div className="nav"> 
  <a className="nav__link">Home </a> <a className="nav__link">News </a> 
  <div onClick={openDropdown} className="dropdown">
    <a className="nav__link">Dropdown 
    <i className="fa fa-caret-down"></i> 
    </a> 
     <div className="dropdown__menu"> <h2 className="dropdown__heading"> Mega Menu </h2>
     <div className="dropdown__content">
     <ul> <h3> category1 </h3>
     <li>link 1 </li>
          <li>link 2 </li>
     <li>link 3 </li>

     </ul>
     <ul> <h3> category2 </h3>
     <li>link 1 </li>
          <li>link 2 </li>
     <li>link 3 </li>

     </ul>
     <ul> <h3> category3 </h3>
     <li>link 1 </li>
          <li>link 2 </li>
     <li>link 3 </li>

     </ul>
     </div>
     </div> 
  </div> 
</div>
</div>)}
export default ResponsiveDropdown;