const $porfolio = document.querySelector(".sec-porfolio-js");
const $modalImgPorfolio = document.querySelector('.img-modal-js')
$porfolio.addEventListener("click", (e)=>{
   // console.log(e.target);
  // console.log(e.target.classList);
   if(e.target.classList.contains('img-btn-modal-js')){
      //URL extraer url de un elemenro
      urlImg = e.target.attributes[0].nodeValue;
      //ADD MODAL
      $modalImgPorfolio.src = urlImg;
      
   }
});


