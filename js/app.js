$(document).ready(function() {
  //initial variables
  let $grid = $('.grid');
  let $gridItems;
  let $gridItem = $('<div></div>', {'class': 'grid-item'});
  let $resetButton = $('#reset');
  let $blackButton = $('#blackButton');
  let $randomButton = $('#randomButton');
  let mode = 'black';

  //button functions
  $resetButton.on('click', resetBoard);
  $blackButton.on('click', function(e) {
    e.preventDefault();
    mode = 'black';
    modeSwitcher($gridItems);
  });
  $randomButton.on('click', function(e) {
    e.preventDefault();
    mode = 'random';
    modeSwitcher($gridItems);
  });

  //functions
  function createGrid(width) {
    let totalGridItems = width * width;
    $grid.css({
      'grid-template-columns': `repeat(${width}, 1fr)`,
      'grid-template-rows': `repeat(${width}, 1fr)`,
    })
    for (let i=0; i < totalGridItems; i++) {
      $gridItem.clone().appendTo($grid);
    }
    $gridItems = $('.grid-item');
    modeSwitcher($gridItems);
    resetCSS($gridItems);
  }

  function modeSwitcher(element){
    element.off('mouseenter');
    if (mode === 'random') {
      element.on('mouseenter', function() {
        $(this).css({
          'background-color': `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
          'opacity': 1
        });
      });
    } else {
      element.on('mouseenter', function() {
        $(this).css({
          'background': 'black',
          'opacity': 1
        });
      });
    }
  }

  function resetBoard(){
    let userInput = parseInt(prompt('Please enter a grid width (1-100):'));
    if (userInput > 0 && userInput <= 100) {
      createGrid(userInput);
    } else {
      resetBoard();
    }
  }

  function resetCSS(element){
    element.each(function() {
      $(this).css({
        'background-color': '#dadae0',
        'opacity': 1,
        'border': '1px solid #616167'
      });
    });
  }

  createGrid(16);
});


