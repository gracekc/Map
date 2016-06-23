/*$(document).ready(function () {   
   ko.applyBindings(viewModel);
});


function MyViewModel() {
  var self = this;
  self.myMap = ko.observable({
    lat: ko.observable(48.8567),
    lng: ko.observable(2.3508)});
}

ko.bindingHandlers.map = {
  init: function (element, valueAccessor, allBindings,Accessor, viewModel) {
    var mapObj = ko.utils.unwrapObservable(valueAccessor());
    var latLng = new google.maps.LatLng(
      ko.utils.unwrapObservable(mapObj.lat),
      ko.utils.unwrapObservable(mapObj.lng));
    var mapOptions = { center: latLng,
      zoom: 13,
      mapTypeId: google.maps.mapTypeId.ROADMAP};
      mapObj.googleMap = new google.maps.Map(element, mapOptions);
  }
};
*/

//creating the map
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 48.8567, lng: 2.3508}
   });
  } 

   infowindow = new google.maps.InfoWindow();




//eiffel tower
  var contentEiffel = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h2 id="firstHeading" class="firstHeading">The Eiffel Tower</h2>'+
      '<div id="bodyContent">' + 
      '<p>The Eiffel Tower was built as an entrance for the 1889 World Fair.</p>'+
      '</div>'+
      '</div>';

  var infowindowEiffel = new google.maps.InfoWindow({
    content: contentEiffel
  });

  var markerEiffel = new google.maps.Marker({
    position: {lat: 48.8582, lng: 2.2945},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Eiffel Tower'
  });

  markerEiffel.addListener('click', function() {
    infowindowEiffel.open(map, markerEiffel);
  });


//the louvre 
  var contentLouvre = '<div id="content">'+ 
    '<div id="sideNotice">' + 
    '</div>' +
    '<h2 id="firstHeading" class="firstHeading">The Louvre</h2>' +
    '<div id="bodyContent">' +
    '<p>The Mona Lisa is housed at the Louvre</p>' +
    '</div>'+
    '</div>';

    var infowindowLouvre = new google.maps.InfoWindow({
      content: contentLouvre
    });

  var markerLouvre = new google.maps.Marker({
    position: {lat: 48.8611, lng: 2.3364},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'The Louvre'
  });

  markerLouvre.addListener('click', function() {
    infowindowLouvre.open(map, markerLouvre);
  });

//arc de triomphe
  var contentArc = '<div id="content">'+ 
    '<div id="sideNotice">' + 
    '</div>' +
    '<h2 id="firstHeading" class="firstHeading">Arc de Triomphe</h2>' +
    '<div id="bodyContent">' +
    '<p>The Arc de Triomphe was built in the early 19th century</p>' +
    '</div>'+
    '</div>';

    var infowindowArc = new google.maps.InfoWindow({
      content: contentArc
    });

  var markerArc = new google.maps.Marker({
    position: {lat: 48.873756, lng: 2.294946},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Arc de Triomphe'
  });

  markerArc.addListener('click', function() {
    infowindowArc.open(map, markerArc);
    toggleBounce();
  });

//notre dame
  var contentDame = '<div id="content">'+ 
    '<div id="sideNotice">' + 
    '</div>' +
    '<h2 id="firstHeading" class="firstHeading">Notre Dame de Paris</h2>' +
    '<div id="bodyContent">' +
    '<p>Notre Dame, or "Our Lady of Paris", is a Catholic cathedral</p>' +
    '</div>'+
    '</div>';

    var infowindowDame = new google.maps.InfoWindow({
      content: contentDame
    });

  var markerDame = new google.maps.Marker({
    position: {lat: 48.8530, lng: 2.3498},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Notre Dame de Paris'
  });

  markerDame.addListener('click', function() {
    infowindowDame.open(map, markerDame);
  });

//pantheon
  var contentPantheon = '<div id="content">'+ 
    '<div id="sideNotice">' + 
    '</div>' +
    '<h2 id="firstHeading" class="firstHeading">Pantheon</h2>' +
    '<div id="bodyContent">' +
    '<p>The Pantheon was originally built in dedication to St. Genevieve</p>' +
    '</div>'+
    '</div>';

var infowindowPantheon = new google.maps.InfoWindow({
      content: contentPantheon
    });

  var markerPantheon = new google.maps.Marker({
    position: {lat: 48.8461, lng: 2.3458},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Pantheon'
  });


  markerPantheon.addListener('click', function() {
    infowindowPantheon.open(map, markerPantheon);
  });




function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location

  });

  

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
   
  });
}
