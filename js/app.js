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


    $('#reset').on('click', function(){
      $('.unit').remove();
      newBoard = prompt('How many squares per side would you like?', 16)
      //if (newBoard !== )
      //generate new board
      for (var x = 0; x < newBoard; x++){
        for(var y = 0; y < newBoard; y++){
          var unit = $("<div class='unit'></div>");
          unit.appendTo('.container');
        }
      }
    })
});