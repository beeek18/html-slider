// Elements on page
const slider = document.querySelector("#slider")
const sliderItems = Array.from(slider.children)

const btnNext = document.querySelector("#btnNext")
const btnBack = document.querySelector("#btnBack")



const showNextSlide = (direction) => {
  // hidden current slide
  const currentSlide = slider.querySelector('[data-active]');
  const currentSlideIndex = +currentSlide.dataset.index

  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute('data-active');


  //Find next index depending on the direction of movement
  let nextSlideIndex;

  if (direction === 'next') {
    nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1
  } else if (direction === 'back') {
    nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1
  }

  // show next slide
  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

  nextSlide.classList.remove("hidden")
  nextSlide.setAttribute('data-active', '')
}

sliderItems.forEach((slide, index) => {
  // show only first slide
  if (index !== 0) slide.classList.add("hidden")

  // add index
  slide.dataset.index = index;

  // add data attribute active for first/active index
  sliderItems[0].setAttribute('data-active', '')

  // click to slide
  slide.addEventListener("click", () => {
    showNextSlide('next')
  })
})


btnNext.onclick = () => {
  showNextSlide('next')

}

btnBack.onclick = () => {
  showNextSlide('back')
}

