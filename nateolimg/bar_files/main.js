(function(){
  'use strict';

  function bc(c,v) {
    var ac = c || null, av = v || 10;
    var sg = function(evt) {
      var al = evt.currentTarget && evt.currentTarget.href, p = {'value': av};
      if(ac) p.event_category = ac;
      if(al) p.event_label = al;
      if( typeof gtag !== 'undefined' ) gtag('event', 'banner_click', p);
    };
    return sg;
  }

  $('#mainSlider a').on( 'click', bc('home-main-slider') );
  $('#hbnrPrograms a').on( 'click', bc('home-programs') );
  $('#hbnrStore a').on( 'click', bc('home-store') );
  $('#hbnrMagazine a').on( 'click', bc('home-magazine') );
  $('#hbnrTraveler a').on( 'click', bc('home-traveler') );
  
})(jQuery);