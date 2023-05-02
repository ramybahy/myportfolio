import '../css/modules/home.scss';
import { Outlet, Link } from "react-router-dom";

function Home() {

    const myArray = ['accordion', 'imagemodal', 'progressbar', 'responsivenavBarwithicons', 'responsivenav', 'responsivesearchbar', 'searchmenu', 'sidenav', 'slideshow', 'tabsheader', 'tabstable', 'tabs'];
  const myProjects = [
   {name:"clock", link:" https://ramybahy.github.io/Clock/"}
,{name:"Flex Panel Gallery", link: "https://ramybahy.github.io/Flex-Panel-Gallery"}
,{name:"cities and states", link: "https://ramybahy.github.io/cities-and-states"}
,{name:"Draw Canvas", link: "https://ramybahy.github.io/Draw-Canvas"}
,{name:"List Item", link: "https://ramybahy.github.io/List-Item"}
,{name:"Slide Scroll", link: "https://ramybahy.github.io/Slide-Scroll"}
,{name:"Move Shadow", link: "https://ramybahy.github.io/Move-Shadow"}
,{name:"Sort Without Articles", link: "https://ramybahy.github.io/Sort-Without-Articles"}
,{name:"Speech Synthesis", link: "https://ramybahy.github.io/Speech-Synthesis"}
,{name:"sticky nav", link: "https://ramybahy.github.io/Sticky-Nav"}
,{name:"click drag", link: "https://ramybahy.github.io/Click-Drag"}
,{name:"Whack A Mole", link: "https://ramybahy.github.io/Whack-A-Mole"}
  ]
    const myList = myArray.map((item,i) =><li key={i}><Link className="nav__link" to={item}>{item}</Link></li>)
  const myProjectslinks = myProjects.map((item,i) =><li key={i}><a className="nav__link" href={item.link}>{item.name}</a></li>)

  return (
    <div className="home">
<div className="home__inner">
  <ul className="home__links">
<li className=" home__link">
     <a className="email" aria-label="email" href="mailto:ramy.bahy2@gmail.com?subject=Mail">
     </a>
     </li>
      <li className=" home__link"> <a className="github"  aria-label="github"  href="https://github.com/ramybahy/">
      </a> </li> 
      <li className=" home__link"> <a className="linkedin"  aria-label="linkedin" href="https://www.linkedin.com/in/ramy-walid/">
      </a> </li> 
      </ul>
  <div className="home__welcome">
    <h1>Welcome.</h1>
    <p>My name is Ramy Walid
I have been working as a freelance front-end developer for more than two years.
I have made several projects using HTML, CSS, JavaScript and React.
<br/>
<br/>
I am looking to collaborate on different projects and to provide innovative solutions for clients.</p>
  </div>
  <div className="home__projects">
    <h2>Projects</h2>
    <nav>
        <ul>
        {/* myProjects.map((project)=>{
                    <li>
                    <Link className="nav__link" to="/">project</Link>
                  </li> 
        }) */}
        {myProjectslinks}

        {myList}
        </ul>

      </nav>
  </div>
</div>




    
    </div>   
);
}



export default Home;
