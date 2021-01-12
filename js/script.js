$(document).ready(function(){
    
    // ! Open DropDown Menu on hover
    $('nav.container ul li.has_sub_menu').hover(function(){
        $(this).find('.dropdown_menu').toggleClass('active');
    });
    
});