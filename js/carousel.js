// Получаем необходимые элементы
const mobileImages = document.querySelectorAll('.second-section__img-mobile');
const mobileHandLeft = document.querySelector('.second-section__mobile-slider-button-left');
const mobileHandRight = document.querySelector('.second-section__mobile-slider-button-right');
const images = document.querySelectorAll('.second-section__img');
const buttons = document.querySelectorAll('.second-section__button');
const handLeft = document.querySelector('.second-section__hand-left');
const handRight = document.querySelector('.second-section__hand-right');
const listButtons = document.querySelectorAll('.second-section__list-button');
const replacementCitys = document.querySelectorAll('.replacementCity');
const replacementApartmentAreas = document.querySelectorAll('.replacementApartmentArea');
const replacementRepairTimes = document.querySelectorAll('.replacementRepairTime');

// Функция для переключения слайдов
function switchSlide(index) {
  // Удаляем класс "active" у всех изображений и кнопок
    mobileImages.forEach(mobileImage => mobileImage.classList.remove('second-section__img-mobile--active'));
    images.forEach(image => image.classList.remove('second-section__img--active'));
    buttons.forEach(button => button.classList.remove('second-section__button--active'));
    listButtons.forEach(listButton => listButton.classList.remove('second-section__list-button--active'));
    replacementCitys.forEach(replacementCity => replacementCity.classList.remove('replacementCity--active'));
    replacementApartmentAreas.forEach(replacementApartmentArea => replacementApartmentArea.classList.remove('replacementApartmentArea--active'));
    replacementRepairTimes.forEach(replacementRepairTime => replacementRepairTime.classList.remove('replacementRepairTime--active'));

  // Добавляем класс "active" к выбранному слайду и кнопке
    mobileImages[index].classList.add('second-section__img-mobile--active');
    images[index].classList.add('second-section__img--active');
    buttons[index].classList.add('second-section__button--active');
    listButtons[index].classList.add('second-section__list-button--active');
    replacementCitys[index].classList.add('replacementCity--active');
    replacementApartmentAreas[index].classList.add('replacementApartmentArea--active');
    replacementRepairTimes[index].classList.add('replacementRepairTime--active');
}

// Обработчики событий для кнопок переключения слайдов
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
    switchSlide(index);
    });
});

listButtons.forEach((listButton, index) => {
    listButton.addEventListener('click', () => {
    switchSlide(index);
    });
});

replacementCitys.forEach((replacementCity, index) => {
    replacementCity.addEventListener('click', () => {
    switchSlide(index);
    });
});

replacementApartmentAreas.forEach((replacementApartmentArea, index) => {
    replacementApartmentArea.addEventListener('click', () => {
    switchSlide(index);
    });
});

replacementRepairTimes.forEach((replacementRepairTime, index) => {
    replacementRepairTime.addEventListener('click', () => {
    switchSlide(index);
    });
});

// Обработчики событий для стрелок переключения слайдов
handLeft.addEventListener('click', () => {
    const currentIndex = Array.from(buttons).findIndex(button => button.classList.contains('second-section__button--active'));
    const prevIndex = currentIndex === 0 ? buttons.length - 1 : currentIndex - 1;
    switchSlide(prevIndex);
});

handRight.addEventListener('click', () => {
    const currentIndex = Array.from(buttons).findIndex(button => button.classList.contains('second-section__button--active'));
    const nextIndex = currentIndex === buttons.length - 1 ? 0 : currentIndex + 1;
    switchSlide(nextIndex);
});

mobileHandLeft.addEventListener('click', () => {
    const currentIndex = Array.from(buttons).findIndex(button => button.classList.contains('second-section__button--active'));
    const prevIndex = currentIndex === 0 ? buttons.length - 1 : currentIndex - 1;
    switchSlide(prevIndex);
});

mobileHandRight.addEventListener('click', () => {
    const currentIndex = Array.from(buttons).findIndex(button => button.classList.contains('second-section__button--active'));
    const nextIndex = currentIndex === buttons.length - 1 ? 0 : currentIndex + 1;
    switchSlide(nextIndex);
});

// По умолчанию показываем первый слайд
switchSlide(0);