import '../css/modules/Image-Modal.scss';

function ImageModal() {

    function openModal(e){
    const modal= document.querySelector(".img-modal")

    const caption= document.querySelector(".img-modal__caption")
    const imgModal= document.querySelector(".img-modal__img")

    caption.innerHTML=e.currentTarget.alt
    imgModal.src=e.currentTarget.src
    modal.classList.add("img-modal--open")
    }
    function closeModal(){
    const modal= document.querySelector(".img-modal")

    modal.classList.remove("img-modal--open")
    }



return (
<div>
<h1> Image Modal</h1>

<img onClick={openModal} className="img" src="/img/img_snow.jpeg" alt="snow"/>


<div  className="img-modal">
<span onClick={closeModal} className="img-modal__close">x</span>
<img alt=" snow mountain" className="img-modal__img"/>
<div className="img-modal__caption"></div>
</div>

</div>
)
}

export default ImageModal;

