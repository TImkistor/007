//  @rus_anonym спасибо 
window.addEventListener("scroll", () => {
    let scrollTop = document.getElementById('test');


    if (Math.floor(window.scrollY) === 0) {
        scrollTop.className = "section_top"
    } else {
        scrollTop.className = "section_topscrol"
    }

})