export class MapController
 {
    constructor() {
        this.overlays = []
        var lat = 33.825858;
        var lng = -84.362226;
        this.map = new window.google.maps.Map(document.getElementById("map"), {
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

        this.drawingManager = new window.google.maps.drawing.DrawingManager({
            drawingMode: null,
            drawingControl: true,
            drawingControlOptions: {
                position: window.google.maps.ControlPosition.TOP_CENTER,
                drawingModes: ["marker", "rectangle", "polygon"]
            }
        })
      
        console.log( this.drawingManager.addListener('overlaycomplete', this.overlayDrawn) )
        this.drawingManager.setMap(this.map)
    }

    mapLoaded(e) {
      // create infowindows
    }

    mapClicked(e) {
      // console.log(e)
    }

    overlayDrawn(event) {
        window.dispatchEvent(new CustomEvent('map_overlay_drawn', { detail: event }))
        
        // event.overlay.addListener('click', this.overlayClicked)
        event.overlay.addListener('click', (a) => {
          console.log(a)
        })
        
        // event.overlay.addListener('rightclick', this.overlayRightClicked)
        event.overlay.addListener('rightclick', (a) => {
          console.log(a)
        })

        // switch (event.overlay.type) {
        //     case "marker":
        //         latLngs = event.overlay.position;
        //         break;
        //     case "polygon":
        //         latLngs = event.overlay.getPath();
        //         break;
        //     case "rectangle":
        //         latLngs = event.overlay.bounds;
        //         break;
        // }

        // var guid = getUID()
        // this.overlays[guid] = {
        //     guid: guid,
        //     type: event.type,
        //     latLngs: latLngs
        // }
    }

    overlayClicked(a) {
      window.dispatchEvent(new CustomEvent('map_overlay_clicked'), {e : a})
    }

    getUID() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (
              c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
            ).toString(16)
        );
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
