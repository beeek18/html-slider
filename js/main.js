const wrapper = document.querySelector('.wrapper'),
  carousel = document.querySelector('.carousel'),
  img = document.querySelectorAll('img'),
  btn = document.querySelectorAll('.button');

let imgIndex = 0,
  intervalId;

const autoSlide = () => {
  intervalId = setInterval(() => slideImg(++imgIndex), 2000)
}

autoSlide()

const slideImg = () => {
  imgIndex = imgIndex === img.length ? 0 : imgIndex < 0 ? img.length - 1 : imgIndex;

  carousel.style.transform = `translate(-${imgIndex * 100}%)`;
}

const updateClick = (e) => {
  clearInterval(intervalId)

  imgIndex += e.target.id === 'next' ? 1 : -1;

  slideImg(imgIndex)
  autoSlide()
}

btn.forEach(btn => btn.addEventListener('click', updateClick))

wrapper.addEventListener("mouseover", () => clearInterval(intervalId))
wrapper.addEventListener("mouseleave", autoSlide)