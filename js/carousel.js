const mobileImages = document.querySelectorAll(".second-section__img-mobile");
const mobileHandLeft = document.querySelector(".second-section__mobile-slider-button-left");
const mobileHandRight = document.querySelector(".second-section__mobile-slider-button-right");
const images = document.querySelectorAll(".second-section__img");
const buttons = document.querySelectorAll(".second-section__button");
const handLeft = document.querySelector(".second-section__hand-left");
const handRight = document.querySelector(".second-section__hand-right");
const listButtons = document.querySelectorAll(".second-section__list-button");
const replacementCitys = document.querySelectorAll(".replacementCity");
const replacementApartmentAreas = document.querySelectorAll(".replacementApartmentArea");
const replacementRepairTimes = document.querySelectorAll(".replacementRepairTime");

function switchSlide(index) {
    const classLists = [
        ["second-section__img-mobile--active", mobileImages],
        ["second-section__img--active", images],
        ["second-section__button--active", buttons],
        ["second-section__list-button--active", listButtons],
        ["replacementCity--active", replacementCitys],
        ["replacementApartmentArea--active", replacementApartmentAreas],
        ["replacementRepairTime--active", replacementRepairTimes],
    ];
    classLists.forEach(([className, elements]) => {
        elements.forEach((element) => {
            element.classList.remove(className);
        });
        elements[index].classList.add(className);
    });
}

function handleSlide(direction) {
    const currentIndex = Array.from(buttons).findIndex((button) =>
        button.classList.contains("second-section__button--active")
    );
    let newIndex;
    if (direction === "prev") {
        newIndex = currentIndex === 0 ? buttons.length - 1 : currentIndex - 1;
    } else if (direction === "next") {
        newIndex = currentIndex === buttons.length - 1 ? 0 : currentIndex + 1;
    }
    switchSlide(newIndex);
}

handLeft.addEventListener("click", () => {
    handleSlide("prev");
});

handRight.addEventListener("click", () => {
    handleSlide("next");
});

mobileHandLeft.addEventListener("click", () => {
    handleSlide("prev");
});

mobileHandRight.addEventListener("click", () => {
    handleSlide("next");
});

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        switchSlide(index);
    });
});

listButtons.forEach((listButton, index) => {
    listButton.addEventListener("click", () => {
        switchSlide(index);
    });
});

replacementCitys.forEach((replacementCity, index) => {
    replacementCity.addEventListener("click", () => {
        switchSlide(index);
    });
});

replacementApartmentAreas.forEach((replacementApartmentArea, index) => {
    replacementApartmentArea.addEventListener("click", () => {
        switchSlide(index);
    });
});

replacementRepairTimes.forEach((replacementRepairTime, index) => {
    replacementRepairTime.addEventListener("click", () => {
        switchSlide(index);
    });
});

switchSlide(0);