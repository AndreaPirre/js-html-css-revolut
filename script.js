$(document).ready(function(){
    $(".parent-dropDownDenaro").hover(function() {
        $(this).children(".dropDown").toggle();
    });
});

$(document).ready(function(){
    $(".parent-dropDownInvestimenti").hover(function() {
        $(this).children(".dropDownInvestimenti").toggle();
    });
});
