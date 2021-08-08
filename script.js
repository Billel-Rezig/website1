$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbarr').addClass("stickyy");
        }else {
            $('.navbarr').removeClass("stickyy");
        }
    });
    $('.menu-btnn').click(function(){
        $('.navbarr .menuu').toggleClass("activee");
        $('.menu.btnn').toggleClass("activee");
    });
});