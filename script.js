window.onload = function () {
    const slides = document.querySelectorAll(".box__slide");

    slides.forEach(function (oneSlide) {
        oneSlide.addEventListener("click", function () {
            deleteActiveClass();
            oneSlide.classList.add("box__slide--active");

        })
    })

    function deleteActiveClass() {
        slides.forEach(function (mySlide) {
            mySlide.classList.remove("box__slide--active");
        })
    }
}
