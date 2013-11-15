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

  //calendar init
  $(function(){
    moment.lang('ru');

    $('#calendar').clndr({
      weekOffset: 1,
      daysOfTheWeek: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
      clickEvents: {
        click: function(target){
          console.log(target);
          $('.event-popup').remove();
          var eventTitle = target.events[0].title;
          var eventBody = target.events[0].body;
          $('<div class="event-popup">' +
            '<h2 class="event-popup-title">'+eventTitle+'</h2>' +
            '<p>'+eventBody+'</p>' +
            '<a class="event-popup-close"></a>' +
            '</div>').appendTo(target.element);
          $('.event-popup-close').click(function(){
            $('.event-popup').remove();
          });
        }
      },
      events: eventsList,
      dateParameter: 'date'
    });
  });

})(jQuery, window, document);
