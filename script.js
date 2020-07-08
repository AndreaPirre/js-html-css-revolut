$(document).ready(function(){
    $(".parent-dropDown").hover(function() {
        $(this).children(".dropDown").toggle();
    });
});

$(document).ready(function(){
    $(".fas").click(function() {
        $(this)(".dropDownXs").toggle();
    });
});
