$(document).ready(function () {

  $('#checkbox').change(function(){ // here while click on check box the change function is triggered 
    setInterval(function () { //setInterval() method calls a function with specified intervals
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider ul li').length; //to count the no of slider
	var slideWidth = $('#slider ul li').width(); //to calclate the slider width
	var slideHeight = $('#slider ul li').height(); //to calclate the slider height
	var sliderUlWidth = slideCount * slideWidth; //to calclate the slider Ul Width for hide the slider prev and next
	
	$('#slider').css({ width: slideWidth, height: slideHeight });// set the styles for slider with width and height
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });// here slider will margin to left side of the slider (it will hide on left side)
	
    $('#slider ul li:last-child').prependTo('#slider ul');//while last slider is arrived it will insert first slider like loop 

    function moveLeft() { //function for the slider left side navigation
        $('#slider ul').animate({ left: + slideWidth}, 200, function () {$('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() { ////function for the slider right navigation
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.list_prev').click(function () {
        moveLeft(); //it calls the moveLeft() for left side navigation
    });

    $('a.list_next').click(function () {
        moveRight(); //it calls the moveRight() for right side navigation
    });

});    
