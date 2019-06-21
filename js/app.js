 $(document).ready(function(){
    $('.sidenav').sidenav();
   $('.slider').slider({
   	duration:600,
   	indicators:false,
   	interval: 500
   });
    $('.slider').slider({
      indicators:false, 
      interval:2000,
      duration:2000
    });
    $('.tabs').tabs({
      duration:3000
    });
    $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
      },
    });
 
    $('.collapsible').collapsible();
    $('.tabs').tabs();
     $('.parallax').parallax();
     $('.collapsible').collapsible({
     	inDuration:10000
     });
      $('.parallax').parallax();
      $('.tap-target').tapTarget();   