function initMap() {
    
    var negocioCoords = {
      lat: 41.3851,
      lng: 2.1734
    };
  
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: negocioCoords
    });
  
    
    var negocioMarker = new google.maps.Marker({
      position: negocioCoords,
      map: map,
      title: 'Mi Negocio'
    });
  
    
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
  
    
    var clienteCoords = {
      lat: 41.3879,
      lng: 2.1699
    };
  
    
    var request = {
      origin: clienteCoords,
      destination: negocioCoords,
      travelMode: google.maps.TravelMode.DRIVING
    };
  
    
    directionsService.route(request, function (result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
      } else {
        console.error('Error al calcular la ruta:', status);
      }
    });
  }
  