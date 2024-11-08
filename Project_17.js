const slides=document.querySelectorAll(".slides")
const prevBtn=document.querySelector(".prevBtn")
const nextBtn=document.querySelector(".nextBtn")
const sliderContainer=document.querySelector(".slider_container")

var slideIndex=0

slides[slideIndex].classList.add("active")


nextBtn.addEventListener('click',()=>{
    slides[slideIndex].classList.remove("active")
    slideIndex= (slideIndex==slides.length-1)? 0 :slideIndex+1;
    slides[slideIndex].classList.add("active")
    sliderContainer.style.transform=`translateX(-${slideIndex*100}%)`

});

prevBtn.addEventListener('click',()=>{
    slides[slideIndex].classList.remove("active")
    slideIndex= (slideIndex==0)? slides.length-1 :slideIndex-1;
    slides[slideIndex].classList.add("active")
    sliderContainer.style.transform=`translateX(-${slideIndex*100}%)`

});