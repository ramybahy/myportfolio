import '../css/modules/search-menu.scss';


function SearchMenu()
{
    
const search=document.querySelector(".search")
const nodelist=document.querySelectorAll("a")
const anchors = Array.prototype.slice.call(nodelist);

function myFunction(){
for (let i=0; i<anchors.length;i++){
anchors[i].style.display="none"

}
console.log(search.value)

console.log( anchors[0].innerHTML.indexOf(search.value.toUpperCase())!== -1)

/*const result=anchors.filter(x)
function x (anchor){anchor.innerHTML.indexOf(search.value.toUpperCase()) !== -1}*/
for (let i=0; i<anchors.length;i++){
if(anchors[i].innerHTML.toUpperCase().indexOf(search.value.toUpperCase())!== -1){
anchors[i].style.display="block"
}
else{
anchors[i].style.display="none"
}
}
};

// search.addEventListener("keyup",myFunction)



    return (

<div className="table">

    <div className="menu">
    <h1>Menu</h1>
    <input className="search" onKeyUp={myFunction} placeholder="Search.."/>
    <a>HTML</a>
    <a>CSS</a>
    <a>Javascript</a>
    <a>PHP</a>
    <a>Python</a>
    <a>jQuery</a>
    <a>SQL</a>
    <a>Bootstrap</a>
    <a>Node.js</a>
    </div>

    <div className="content">
    <h1>Page Content</h1>
    <p>Start to type for a specific category inside the search bar to "filter" the search options.</p>
    <p>Some text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
    <p>Some other text..Some text..Some text..Some text..Some text..Some text..Some text..Some text..</p>
    <p>Some text..</p>
    </div>

</div>

)
}
export default SearchMenu
