$(document).ready(function() {
    for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('.container');
        }
    }
    

    $('.unit').hover(function(){
    	$(this).addClass('black');
    });
});