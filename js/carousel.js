// Получаем необходимые элементы
const images = document.querySelectorAll('.second-section__img');
const points = document.querySelectorAll('.second-section__point');
const handLeft = document.querySelectorAll('.second-section__hand-left');
const handRight = document.querySelectorAll('.second-section__hand-right');

// Функция для переключения слайдов
function switchSlide(index) {
  // Удаляем класс "active" у всех изображений и кнопок
    images.forEach(image => image.classList.remove('second-section__img--active'));
    points.forEach(button => button.classList.remove('second-section__point--active'));

  // Добавляем класс "active" к выбранному слайду и кнопке
    images[index].classList.add('second-section__img--active');
    points[index].classList.add('second-section__point--active');
}

// Обработчики событий для кнопок переключения слайдов
points.forEach((point, index) => {
    point.addEventListener('click', () => {
    switchSlide(index);
    });
});

// Обработчики событий для стрелок переключения слайдов
handLeft.addEventListener('click', () => {
    const currentIndex = Array.from(points).findIndex(point => point.classList.contains('second-section__img--active'));
    const prevIndex = currentIndex === 0 ? points.length - 1 : currentIndex - 1;
    switchSlide(prevIndex);
});

handRight.addEventListener('click', () => {
    const currentIndex = Array.from(points).findIndex(point => point.classList.contains('second-section__img--active'));
    const nextIndex = currentIndex === points.length - 1 ? 0 : currentIndex + 1;
    switchSlide(nextIndex);
});

// По умолчанию показываем первый слайд
switchSlide(0);