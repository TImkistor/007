window.addEventListener("scroll", () => {
    let scrollbutton = document.getElementById('boxscroll');


    if (Math.floor(window.scrollY) === 0) {
        scrollbutton.className = "scrollbutton"
    } else {
        scrollbutton.className = "scrollbuttonfill"
    }
});

const scrollToTop = () => {
    window.scrollTo({top: 0})
}