!function(A){A.fn.picLazyLoad=function(t){function o(){a.each(function(){var o=A(this);if(o.is("img")&&o.attr("data-original")){var a=o.offset().top;a-t.threshold<=n+i&&(o.attr("src",o.attr("data-original")),o.removeAttr("data-original"))}})}var a=A(this),i=0,n=A(window).height();t=A.extend({threshold:0,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"},t||{}),o(),A(window).on("scroll",function(){i=A(window).scrollTop(),o()})}}(Zepto);