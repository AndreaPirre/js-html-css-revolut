$(document).ready(function(){
    $(".parent-dropDown").hover(function() {
        $(this).children(".dropDown").toggle();
    });
});

$(document).ready(function(){
    $(".parent-dropDownXs").click(function() {
        $(this).children(".dropDownXs").toggle();
    });
});
