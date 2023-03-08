import { useState } from "react";
import '../css/modules/slider.scss';

const slides = [
    {url: '../../img/nature.jpg' , number:'1/3' ,  caption: 'Caption one'} ,
    {url: '../../img/img_snow.jpeg', number:'2/3' ,  caption: 'Caption two'},
    {url: '../../img/mountain.jpg', number:'3/3' ,  caption: 'Caption three'}
]

function Slider()
{ 
    const [currentIndex, setcurrentIndex] = useState(0);
const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
    setcurrentIndex(newIndex);
};
const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
};

        return(
            <>
        <div className="slider">

            <div className="slide slide--active">
            <img src={slides[currentIndex].url} />
            <p className="slide__number">1/3</p>
            <p className="slide__caption"> Caption one</p>
            </div>


            <div className="slider__chevron">
            <i onClick={goToPrevious} className="fa-solid fa-chevron-left chevron">&#8249;</i>
            <i onClick={goToNext}className="fa-solid fa-chevron-right chevron">&#8250;</i>
            </div>

        </div>

          <div className="circle-wrapper">
        {slides.map((slide,slideIndex)=>(
            <div onClick={()=>setcurrentIndex(slideIndex)} className={currentIndex==slideIndex?"circle circle--active" : "circle"}></div>
        ))
        }
            </div> 
            </>
)

}

export default Slider
