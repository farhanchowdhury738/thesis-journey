/*====================================================
    Thesis Journey
    assets/js/flipbook.js
====================================================*/

let pageFlip = null;

document.addEventListener("DOMContentLoaded", () => {

    const book = document.getElementById("book");

    if (!book) return;

    pageFlip = new St.PageFlip(book, {

        width: 475,
        height: 650,

        size: "stretch",

        minWidth: 320,
        maxWidth: 1200,

        minHeight: 420,
        maxHeight: 1600,

        maxShadowOpacity: 0.45,

        drawShadow: true,

        showCover: true,

        mobileScrollSupport: false,

        usePortrait: true,

        flippingTime: 900,

        startPage: 0,

        autoSize: true

    });

    pageFlip.loadFromHTML(
        document.querySelectorAll(".page")
    );

    /*==========================
        Buttons
    ==========================*/

    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    nextBtn.addEventListener("click", () => {

        pageFlip.flipNext();

    });

    prevBtn.addEventListener("click", () => {

        pageFlip.flipPrev();

    });

    /*==========================
        Keyboard
    ==========================*/

    document.addEventListener("keydown", (e) => {

        if (e.key === "ArrowRight") {

            pageFlip.flipNext();

        }

        if (e.key === "ArrowLeft") {

            pageFlip.flipPrev();

        }

    });

    /*==========================
        Page Indicator
    ==========================*/

    pageFlip.on("flip", (e) => {

        const page = e.data;

        const indicator = document.getElementById("currentPage");

        if (!indicator) return;

        if (page === 0) {

            indicator.innerHTML = "Cover";

        } else {

            indicator.innerHTML = "Page " + page;

        }

    });

    /*==========================
        Resize
    ==========================*/

    window.addEventListener("resize", () => {

        pageFlip.update();

    });

});