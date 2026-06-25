// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

// =========================
// PAGE FLIP
// =========================

const pageFlip = new St.PageFlip(

    document.getElementById("book"),

    {

        width: 794,
        height: 1123,

        size: "stretch",

        minWidth: 320,
        maxWidth: 900,

        minHeight: 450,
        maxHeight: 1272,

        showCover: true,

        usePortrait: true,

        autoSize: true,

        mobileScrollSupport: false,

        flippingTime: 1800,

        drawShadow: true,

        maxShadowOpacity: 0.75,

        startPage: 0,

        startZIndex: 10,

        swipeDistance: 30,

        clickEventForward: true

    }

);

// =========================
// LOAD PAGES
// =========================

pageFlip.loadFromHTML(

    document.querySelectorAll(".page")

);

// =========================
// PAGE FLIP SOUND
// =========================

const flipSound = new Audio("assets/audio/page-flip.mp3");

flipSound.volume = 0.35;

pageFlip.on("flip", () => {

    flipSound.pause();

    flipSound.currentTime = 0;

    flipSound.play().catch(() => {});

});

// =========================
// DESKTOP BUTTONS
// =========================

document.getElementById("nextBtn").addEventListener("click", () => {

    if (pageFlip.getCurrentPageIndex() === pageFlip.getPageCount() - 1) {

        pageFlip.flip(0);

    } else {

        pageFlip.flipNext();

    }

});

document.getElementById("prevBtn").addEventListener("click", () => {

    if (pageFlip.getCurrentPageIndex() === 0) {

        pageFlip.flip(pageFlip.getPageCount() - 1);

    } else {

        pageFlip.flipPrev();

    }

});

// =========================
// MOBILE BUTTONS
// =========================

document.getElementById("nextBtnMobile").addEventListener("click", () => {

    if (pageFlip.getCurrentPageIndex() === pageFlip.getPageCount() - 1) {

        pageFlip.flip(0);

    } else {

        pageFlip.flipNext();

    }

});

document.getElementById("prevBtnMobile").addEventListener("click", () => {

    if (pageFlip.getCurrentPageIndex() === 0) {

        pageFlip.flip(pageFlip.getPageCount() - 1);

    } else {

        pageFlip.flipPrev();

    }

});


// =========================
// KEYBOARD
// =========================

document.addEventListener("keydown", (e) => {

    switch (e.key) {

        case "ArrowRight":

            pageFlip.flipNext();

            break;

        case "ArrowLeft":

            pageFlip.flipPrev();

            break;

    }

});

// =========================
// MOUSE WHEEL
// =========================

document.addEventListener("wheel", (e) => {

    if (e.deltaY > 0) {

        pageFlip.flipNext();

    } else {

        pageFlip.flipPrev();

    }

});

// =========================
// TOUCH SWIPE
// =========================

let touchStartX = 0;

let touchEndX = 0;

document.addEventListener("touchstart", (e) => {

    touchStartX = e.changedTouches[0].screenX;

});

document.addEventListener("touchend", (e) => {

    touchEndX = e.changedTouches[0].screenX;

    if (touchStartX - touchEndX > 60) {

        pageFlip.flipNext();

    }

    if (touchEndX - touchStartX > 60) {

        pageFlip.flipPrev();

    }

});

// =========================
// DOUBLE CLICK FULLSCREEN
// =========================

document.getElementById("book").addEventListener("dblclick", () => {

    if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen();

    } else {

        document.exitFullscreen();

    }

});

// =========================
// RESIZE
// =========================

window.addEventListener("resize", () => {

    pageFlip.update();

});

// =========================
// CURSOR
// =========================

pageFlip.on("changeOrientation", () => {

    document.body.style.cursor = "grab";

});

pageFlip.on("flip", () => {

    document.body.style.cursor = "default";

    setTimeout(() => {

        document.body.style.cursor = "grab";

    }, 500);

});