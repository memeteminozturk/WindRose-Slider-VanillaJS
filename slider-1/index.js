const slides = document.querySelectorAll(".slide");
const lists = document.querySelectorAll(".list");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const windRose = document.querySelector(".wind-rose");
const windRoseImg = document.querySelectorAll(".wind-rose-img");
const windRoseImgs = document.querySelectorAll(".wind-rose-img img");
let currentWrDeg = 0;
let currentImgDeg = 0;

const nextSlide = () => {
  const activeSlide = document.querySelector(".slide.active");
  activeSlide.classList.remove("active");
  const activeList = document.querySelector(".list.active");
  activeList.classList.remove("active");

  if (activeSlide.nextElementSibling) {
    activeSlide.nextElementSibling.classList.add("active");
    activeList.nextElementSibling.classList.add("active");
  } else {
    slides[0].classList.add("active");
    lists[0].classList.add("active");
  }
};

const prevSlide = () => {
  const activeSlide = document.querySelector(".slide.active");
  activeSlide.classList.remove("active");
  const activeList = document.querySelector(".list.active");
  activeList.classList.remove("active");

  if (activeSlide.previousElementSibling) {
    activeSlide.previousElementSibling.classList.add("active");
    activeList.previousElementSibling.classList.add("active");
  } else {
    slides[slides.length - 1].classList.add("active");
    lists[lists.length - 1].classList.add("active");
  }
};

const rotateNextWindRose = () => {
  currentWrDeg += 90;
  windRose.style.transform = `rotate(${currentWrDeg}deg)`;
};

const rotatePrevWindRose = () => {
  currentWrDeg += -90;
  windRose.style.transform = `rotate(${currentWrDeg}deg)`;
};

const rotateNextImgs = () => {
  currentImgDeg += -90;

  for (let i = 0; i < windRoseImgs.length; i++) {
    windRoseImgs[i].style.transform = `rotate(${currentImgDeg}deg)`;
  }
};

const rotateprevImgs = () => {
  currentImgDeg += 90;
  for (let i = 0; i < windRoseImgs.length; i++) {
    windRoseImgs[i].style.transform = `rotate(${currentImgDeg}deg)`;
  }
};

const showSlide = (e) => {
  const activeSlide = document.querySelector(".slide.active");
  const activeList = document.querySelector(".list.active");
  const targetIndex =parseInt( e.target.dataset.index);
  const activeIndex = parseInt(activeList.dataset.index);
  activeSlide.classList.remove("active");
  activeList.classList.remove("active");

  slides[targetIndex].classList.add("active");
  lists[targetIndex].classList.add("active");
  let fark=activeIndex-targetIndex; 
  if(fark==1 || fark==-3){
    currentWrDeg+=-90
    windRose.style.transform = `rotate(${currentWrDeg}deg)`;
    currentImgDeg+=90
    for (let i = 0; i < windRoseImgs.length; i++) {
      windRoseImgs[i].style.transform = `rotate(${currentImgDeg}deg)`;
    }
  }
  else if(fark==-1 || fark==3){
    currentWrDeg+=90
    windRose.style.transform = `rotate(${currentWrDeg}deg)`;
    currentImgDeg+=-90
    for (let i = 0; i < windRoseImgs.length; i++) {
      windRoseImgs[i].style.transform = `rotate(${currentImgDeg}deg)`;
    }
  }
  else if(fark==2 || fark==-2){
    currentWrDeg+=180
    windRose.style.transform = `rotate(${currentWrDeg}deg)`;
    currentImgDeg+=-180
    for (let i = 0; i < windRoseImgs.length; i++) {
      windRoseImgs[i].style.transform = `rotate(${currentImgDeg}deg)`;
    }
  }
};

next.addEventListener("click", () => {
  nextSlide();
  rotateNextWindRose();
  rotateNextImgs();
});

prev.addEventListener("click", () => {
  prevSlide();
  rotatePrevWindRose();
  rotateprevImgs();
});

lists.forEach((list) => {
  list.addEventListener("click", showSlide);
});

for (let i = 0; i < windRoseImg.length; i++) {
  windRoseImg[i].addEventListener("click", showSlide);
}