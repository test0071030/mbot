$(document).ready(function(){
    // set size of screen based on initial browser sxreen size
    var window_width=$(window).width();
    var window_height=$(window).height();
    $("body").css({
        "width":window_width,
        "height":window_height,
    });

    $( "#middle-element" ).tabs();


    $("#result-car").draggable({
        containment: "#left-result",
        scroll: false
    });

    $.getJSON("test.json", function(json) {
        console.log(json); // this will show the info it in firebug console
    });
});