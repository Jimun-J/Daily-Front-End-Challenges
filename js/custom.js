$(document).ready(function () {
  
    $('.more-btn').click(function() {
        $(this).toggleClass('active');
        $('.main-navigation').toggleClass('active');
    })
});