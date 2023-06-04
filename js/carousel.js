// Получаем необходимые элементы
const images = document.querySelectorAll('.second-section__img');
const buttons = document.querySelectorAll('.second-section__button');
const handLeft = document.querySelector('.second-section__hand-left');
const handRight = document.querySelector('.second-section__hand-right');
const listButtons = document.querySelectorAll('.second-section__list-button');

// Функция для переключения слайдов
function switchSlide(index) {
  // Удаляем класс "active" у всех изображений и кнопок
    images.forEach(image => image.classList.remove('second-section__img--active'));
    buttons.forEach(button => button.classList.remove('second-section__button--active'));
    listButtons.forEach(listButton => listButton.classList.remove('second-section__list-button--active'));

  // Добавляем класс "active" к выбранному слайду и кнопке
    images[index].classList.add('second-section__img--active');
    buttons[index].classList.add('second-section__button--active');
    listButtons[index].classList.add('second-section__list-button--active');
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

// Обработчики событий для стрелок переключения слайдов
handLeft.classList.add('second-section__hand-left');
handLeft.addEventListener('click', () => {
    const currentIndex = Array.from(buttons).findIndex(button => button.classList.contains('second-section__button--active'));
    const prevIndex = currentIndex === 0 ? buttons.length - 1 : currentIndex - 1;
    switchSlide(prevIndex);
});

handRight.classList.add('second-section__hand-right');
handRight.addEventListener('click', () => {
    const currentIndex = Array.from(buttons).findIndex(button => button.classList.contains('second-section__button--active'));
    const nextIndex = currentIndex === buttons.length - 1 ? 0 : currentIndex + 1;
    switchSlide(nextIndex);
});

// По умолчанию показываем первый слайд
switchSlide(0);