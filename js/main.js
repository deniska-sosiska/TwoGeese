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
