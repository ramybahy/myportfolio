import '../css/modules/progress-bar.scss';

function ProgressBar() {

    function runProgress(e){
    

        let i=0;
       var interval = setInterval(() =>{
            document.querySelector(".progress-bar__inner").style.width = i+"%";
            document.querySelector(".progress-bar__percentage").innerHTML = i+"%";
i++;

if (i>100){
    clearInterval(interval)
}
        }, 10)
        
    };
return (
<div>
<div className="progress-bar__outer">

<div className="progress-bar__inner">
</div>
</div>
<div className="progress-bar__footer">
<button onClick={runProgress} className="progress-bar__button">
    Run
</button>

<div className="progress-bar__percentage">
</div>
</div>

</div>
)
}
export default ProgressBar
