const pageFlip = new St.PageFlip(
    document.getElementById("book"),
    {
        width:450,
        height:620,

        size:"stretch",

        minWidth:315,

        maxWidth:1000,

        minHeight:420,

        maxHeight:1350,

        showCover:true,

        mobileScrollSupport:true
    }
);

pageFlip.loadFromHTML(
    document.querySelectorAll(".page")
);

document
.getElementById("prevBtn")
.onclick=()=>pageFlip.flipPrev();

document
.getElementById("nextBtn")
.onclick=()=>pageFlip.flipNext();