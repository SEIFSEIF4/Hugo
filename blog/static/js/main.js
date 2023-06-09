let nav = document.querySelector("nav.navbar"), 
    menuBtn = document.querySelector(".phone-menu"),
    menu = document.querySelector(".navbar .navbar__container>ul"); 

document.addEventListener("scroll", (e) => {

    let pageScroll = document.scrollingElement.scrollTop,
        navPosition = nav.offsetTop;

    if (pageScroll > navPosition + 0.5) {
        nav.classList.add("navbar--show"); //add scrolled nav style
    } else {
        nav.classList.remove("navbar--show"); //remove scrolled nav style
    }

});

menuBtn.addEventListener("click", function(){
    menu.classList.toggle("show-list");
})