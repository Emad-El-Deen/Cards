// because querySelector  bt3ml node list msh h3rf a3ml loop 3leha f3shan kda 3mlna al array
let imgList = Array.from(document.querySelectorAll(".item img"));
let lightBoxContainer = document.querySelector(".lightbox-container");
let lightBoxItem = document.querySelector(".lightbox-item");
let btnLeft = document.getElementById("btnLeft");
let btnRight = document.getElementById("btnRight");
let btnClose = document.getElementById("btnClose");


// b3ml d-flex ama click 3la al img
let currentIndex;
for (let i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (event) {
    lightBoxContainer.classList.replace("d-none", "d-flex");
    let imgSrc = event.target.getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    currentIndex = imgList.indexOf(event.target);
  });
}


//ama click 3la al arrow ygeb next or previous
function slide(step) {
  currentIndex+=step;
    if (currentIndex == imgList.length) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = imgList.length - 1;
  }
  let imgSrc = imgList[currentIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
btnRight.addEventListener("click", function () {
  slide(1);
});
btnLeft.addEventListener("click", function () {
  slide(-1);
});

// close the slider
function closeSlide () {
  lightBoxContainer.classList.replace('d-flex','d-none')
}
btnClose.addEventListener('click',closeSlide)

//ama click 3la al arrow ygeb next or previous by keyboard
document.addEventListener('keydown',function(event){
if (event.key=="ArrowRight") {
  slide(1);
}else if(event.key=="ArrowLeft"){
slide(-1);
}else if (event.key == "Escape") {
  closeSlide();
}
})

//ama click out of the box
lightBoxContainer.addEventListener('click',function () {
  closeSlide();
})
lightBoxItem.addEventListener('click',function (event) {
  event.stopPropagation();
})

