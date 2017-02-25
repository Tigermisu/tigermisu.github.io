var firstSection = "#signin";

$(function(){
    setTimeout(function(){
        changeActiveSection($(firstSection));
    }, 2000);
});

$('.click-to-continue').click(function(){
    var $activeSection = $('.section.active'),
        $nextSection = $($activeSection.data('next'));
        changeActiveSection($nextSection);
});

function changeActiveSection($nextSection) {
    var $activeSection = $('.section.active');
    $activeSection.animate({
        opacity: 0    
    }, 
    1000, 
    function(){
        $activeSection.removeClass('active');
        $activeSection.css(" ");
    });
    $nextSection.css('opacity', '0');
    setTimeout(function() {
        $nextSection.addClass('active');
        $nextSection.animate({
            opacity: 1
        }, 1000, function(){
            $nextSection.css(" ");            
        });
    }, 1); 
}