(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // Google map Init
    function initialize() {
      var target = new google.maps.LatLng(55.750489, 37.605713);

      var mapOptions = {
        center: target,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

      var marker = new google.maps.Marker({
        map: map,
        position: target,
        animation: 'drop'
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
  });

})(jQuery, window, document);
