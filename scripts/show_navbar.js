let prevScrollpos = window.scrollY;

window.onscroll = function() {
    
    let currentScrollPos = window.scrollY;
    let viewportWidth = window.innerWidth;

    if (currentScrollPos >= (viewportWidth*0.5)){
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
        }
    }
    prevScrollpos = currentScrollPos;
}