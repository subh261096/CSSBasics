window.onload= _ => {
            document.querySelector(".main-content").style.paddingTop = "70px";
        }
window.onscroll = _=> { 
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".main-nav").style.height="60px";
        document.querySelector(".main-nav-brand").style.fontSize = "25px";
        document.querySelector(".main-content").style.paddingTop="60px";
    } else {
        document.querySelector(".main-nav").style.height = "70px";
        document.querySelector(".main-nav-brand").style.fontSize = "35px";
        document.querySelector(".main-content").style.paddingTop = "70px";
    }
}
