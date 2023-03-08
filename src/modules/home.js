import '../css/modules/home.scss';
import { Outlet, Link } from "react-router-dom";

function Home() {

    const myArray = ['accordion', 'imagemodal', 'progressbar', 'responsivenavBarwithicons', 'responsivenav', 'responsivesearchbar', 'searchmenu', 'sidenav', 'slideshow', 'tabsheader', 'tabstable', 'tabs'];

    const myList = myArray.map((item) => <p>{item}</p>)


  return (

        <div className="home">

                <p>
                RAMY BAHY
                </p>
                <nav>
        <ul>
          <li>
            <Link className="nav__link" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav__link" to="/accordion">accordion</Link>
          </li>
          <li>
            <Link className="nav__link" to="/imagemodal">imagemodal</Link>
          </li>
          <li>
            <Link className="nav__link" to="/progressbar">progressbar</Link>
          </li><li>
            <Link className="nav__link" to="/responsivenavBarwithicons">responsivenavBarwithicons</Link>
          </li><li>
            <Link className="nav__link" to="/responsivenav">responsivenav</Link>
          </li><li>
            <Link className="nav__link" to="/responsivesearchbar">responsivesearchbar</Link>
          </li><li>
            <Link className="nav__link" to="/searchmenu">searchmenu</Link>
          </li><li>
            <Link className="nav__link" to="/sidenav">sidenav</Link>
          </li><li>
            <Link className="nav__link" to="/slideshow">slideshow</Link>
          </li><li>
            <Link className="nav__link" to="/tabsheader">tabsheader</Link>
          </li><li>
            <Link className="nav__link" to="/tabstable">tabstable</Link>
          </li><li>
            <Link className="nav__link" to="/tabs">tabs</Link>
          </li>
        </ul>
      </nav>
        </div>

        
);
}



export default Home;
