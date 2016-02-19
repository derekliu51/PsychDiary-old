var main = function () {
    $('.choice, .arrow-next').click(function () {
        var currentSlide = $('.active-question');
        var nextSlide = currentSlide.next();

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if(nextSlide.length == 0) {
          nextSlide = $('.question').last();
          nextDot= $('.dot').last()
        }


        currentSlide.fadeOut(600).removeClass('active-question');
        nextSlide.fadeIn(600).addClass('active-question');

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
        
    $('.arrow-prev').click(function(){
        var currentSlide = $('.active-question')
        var prevSlide = currentSlide.prev();
        
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        
        if(prevSlide.length == 0){
            prevSlide = $('.question').first();
            prevDot= $('.dot').first();
        }
        
        currentSlide.fadeOut(600).removeClass('active-question');
        prevSlide.fadeIn(600).addClass('active-question');

        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
};

$(document).ready(main);