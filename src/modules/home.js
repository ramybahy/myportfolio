import '../css/modules/home.scss';
import { Outlet, Link } from "react-router-dom";

function Home() {

    const myArray = ['accordion', 'imagemodal', 'progressbar', 'responsivenavBarwithicons', 'responsivenav', 'responsivesearchbar', 'searchmenu', 'sidenav', 'slideshow', 'tabsheader', 'tabstable', 'tabs'];

    const myList = myArray.map((item) => <p>{item}</p>)


  return (
    <div className="home">
<div className="home__inner">
  <ul className="home__links">
<li className="email">
     <a aria-label="email" href="mailto:ramy.bahy2@gmail.com?subject=Mail">
     mail</a>

     </li>
      <li className="github"> <a aria-label="github"  href="https://github.com/ramybahy/">
      github</a> </li> 
      <li className="npm"> <a aria-label="linkedin" href="https://www.linkedin.com/in/ramy-walid/">
      linkedin
      </a> </li> 
      </ul>
  <div className="home__welcome">
    <h1>Welcome.</h1>
    <p>Hi, I’m @ramybahy
👀 I’m interested in programming with a specialization in front-end web development
🌱 I’m currently learning different courses on programming and web development
💞️ I’m looking to collaborate on ...different freelancing projects in the front-end web development field</p>
  </div>
  <div className="home__projects">
    <h2>Projects</h2>
    <nav>
        <ul>
          <li>
            <Link classNameName="nav__link" to="/">Home</Link>
          </li>
          <li>
            <Link classNameName="nav__link" to="/accordion">accordion</Link>
          </li>
          <li>
            <Link classNameName="nav__link" to="/imagemodal">imagemodal</Link>
          </li>
          <li>
            <Link classNameName="nav__link" to="/progressbar">progressbar</Link>
          </li><li>
            <Link classNameName="nav__link" to="/responsivenavBarwithicons">responsivenavBarwithicons</Link>
          </li><li>
            <Link classNameName="nav__link" to="/responsivenav">responsivenav</Link>
          </li><li>
            <Link classNameName="nav__link" to="/responsivesearchbar">responsivesearchbar</Link>
          </li><li>
            <Link classNameName="nav__link" to="/searchmenu">searchmenu</Link>
          </li><li>
            <Link classNameName="nav__link" to="/sidenav">sidenav</Link>
          </li><li>
            <Link classNameName="nav__link" to="/slideshow">slideshow</Link>
          </li><li>
            <Link classNameName="nav__link" to="/tabsheader">tabsheader</Link>
          </li><li>
            <Link classNameName="nav__link" to="/tabstable">tabstable</Link>
          </li><li>
            <Link classNameName="nav__link" to="/tabs">tabs</Link>
          </li>
        </ul>

      </nav>
  </div>
</div>




    
    </div>   
);
}



export default Home;
