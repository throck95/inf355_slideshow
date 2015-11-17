(function($) {
    $.fn.slideshow = function(options) {
        var containerDiv = $(this).attr("id");
        var slideshowDiv = options.slideshow;
        var forward = options.forward;
        var reverse = options.reverse;
        var imageArray = $("#" + slideshowDiv + " img");
        var imageNum = 1;
        $(imageArray.first()).css("left","200px");
        $("#" + containerDiv).css({height: 700, width: 1200});
        $("#" + reverse).css({top: 725, left: 650});
        $("#" + forward).css({top: 725, left: 750});
        var imageAnimate = function(tag, imageNum, imageArray) {
            $("#" + reverse).disabled = true;
            $("#" + forward).disabled = true;
            $("#" + tag + " img").animate({left: '-1000px', opacity: 0.25}, function() {
                var image = imageArray[imageNum-1];
                $(image).animate({left: '+200px', opacity: 1});
            });
            $("#" + reverse).disabled = false;
            $("#" + forward).disabled = false;
        };
        $("#" + reverse).click( function() {
            if($("#" + slideshowDiv + " img").is(":animated")) {
                console.log("animating");
                return false;
            }
            if(imageNum == 1) {
                imageNum = imageArray.length;
                imageAnimate(slideshowDiv, imageNum, imageArray);
            }
            else {
                imageNum = imageNum - 1;
                imageAnimate(slideshowDiv, imageNum, imageArray);
            }
        });
        $("#" + forward).click( function() {
            if($("#" + slideshowDiv + " img").is(":animated")) {
                console.log("animating");
                return false;
            }
            if(imageNum == imageArray.length) {
                imageNum = 1;
                imageAnimate(slideshowDiv, imageNum, imageArray);
            }
            else {
                imageNum = imageNum + 1;
                imageAnimate(slideshowDiv, imageNum, imageArray);
            }
        });
        return this;
    };
})(jQuery);

$(function() {
    var options = {forward: "forwardButton", reverse: "reverseButton", slideshow: "slideshowDiv"};
    $("#containerDiv").slideshow(options);
});