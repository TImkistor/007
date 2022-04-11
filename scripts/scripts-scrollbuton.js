window.addEventListener("scroll", () => {
    let scrollbutton = document.getElementById('boxscroll');


    if (Math.floor(window.scrollY) === 0) {
        scrollbutton.className = "scrollbutton"
    } else {
        scrollbutton.className = "scrollbuttonfill"
    }
})
$('#boxscroll').click(function(){
    $('body').animate({scrollTop:0}, '500', 'swing');
 });
