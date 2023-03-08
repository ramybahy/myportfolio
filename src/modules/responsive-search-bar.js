import '../css/modules/responsive-search-bar.scss';

function ResponsiveSearchBar() {
return(
<>
<div className="nav-bar">

<div className="nav-bar__links">

<a className="nav-bar__link nav-bar__link--blue" href="">Home </a>

<a className="nav-bar__link"href="">About </a>

<a className="nav-bar__link"href="">Contact </a>

</div>

<form className="nav-bar__search-bar"><input className="search-input" placeholder="search..." type="text"/>

<button className="search-button"type="submit"></button> </form>

</div>


<h1> Responsive Search Bar </h1>

<p>Navigation bar with a search box and a submit button inside of it.</p>

<p>Resize the browser window to see the responsive effect.</p>
</>
)
}

export default ResponsiveSearchBar
