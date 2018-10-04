export default class GoogleMap
 {
  constructor() {
      var lat = 33.825858;
      var lng = -84.362226;
      this.map = new google.maps.Map(document.getElementById("map"), {
          zoom: 14,
          center: { lat: lat, lng: lng },
          clickableIcons: false,
          styles: mapStyle,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          rotateControl: true
      });

      this.map.addListener('click', this.mapClicked)
      this.map.addListener('tilesloaded', this.mapLoaded)

      this.drawingManager = new google.maps.drawing.DrawingManager({
          drawingMode: null,
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ["marker", "rectangle", "polygon"]
          }
      })
    
      this.drawingManager.addListener('overlaycomplete', this.overlayDrawn);
      this.drawingManager.setMap(this.map);
  }

  mapLoaded(e) {
    console.log(e)
  }

  mapClicked(e) {
    console.log(e)
  }

  overlayDrawn(e) {
      console.log(e)
  }
}

const mapStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "poi",
    //                elementType: 'labels.text.fill',
    //                stylers: [{color: '#d59563'}]
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "poi.park",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }]
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }]
  }
];
