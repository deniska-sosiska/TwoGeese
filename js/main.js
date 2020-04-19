$(function() {
  $('.filter > ul > li').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this.children[0]).removeClass('active');
    } else {
      $(this).addClass('active');
      $(this.children[0]).addClass('active');
    }
  });
  return  false;
});
$( function() {
    $( "#slider-range" ).slider({
      animate: "fast",
        range: true,
        min: 700,
        max: 15000,
        values: [ 700, 15000 ],
        slide: function( event, ui ) {
            $( "#amount-1" ).val(ui.values[ 0 ]);
            $( "#amount-2" ).val(ui.values[ 1 ]);
        }
    });
    $( "#amount-1" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#amount-2" ).val($( "#slider-range" ).slider( "values", 1 ));
} );
