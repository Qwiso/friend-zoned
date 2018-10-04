function MOverlay(guid, type, latlngs) {
    this.guid = guid;
    this.type = type;
    this.latLngs = latlngs;
    this.iwTitle = "";
    this.iwText = "";
    this.iwDate = "";
  }
  
  var map;
  var drawingManager;
  var userOverlaysArray = {};
  var infoWindow;
  var toolWindow;
  var currentMapOverlay;
  var currentUserOverlay;
  var lat = 33.825858;
  var lng = -84.362226;
  var mapInitialized = false;
  
  var demoJson =
    '[{"type":"marker","latLngs":{"lat":33.83008972168741,"lng":-84.35267661111448},"iwTitle":""},{"type":"rectangle","latLngs":{"south":33.834937908324825,"west":-84.35417864816282,"north":33.8380748237402,"east":-84.34851382272336},"iwTitle":"123","iwText":"(33.83600732424177, -84.35271952645871)","iwDate":"1970-01-05"},{"type":"polygon","latLngs":{"b":[{"lat":33.8246351830603,"lng":-84.35658190744016},{"lat":33.825811681608904,"lng":-84.353492002655},{"lat":33.82620384419449,"lng":-84.35211871163938},{"lat":33.82588298403098,"lng":-84.35018752114865},{"lat":33.83361894359985,"lng":-84.3410465528259},{"lat":33.83301292595647,"lng":-84.34001658456418},{"lat":33.82538386582782,"lng":-84.3489000608215},{"lat":33.825134305633675,"lng":-84.35065958993528},{"lat":33.825312562989545,"lng":-84.35233328836057},{"lat":33.82399344975633,"lng":-84.35563776986692}],"gm_accessors_":{"length":null},"length":10,"gm_bindings_":{"length":{}}},"iwTitle":"highway","iwText":"(33.83155133631693, -84.34280608193967)"}]';
  
  initMap();
  setupCustomButtons();
  renderUserOverlays(demoJson);
  
  function initMap() {
    var nightStyle = [
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
  
    navigator.geolocation.getCurrentPosition(
      function(data) {
        lat = data.coords.latitude;
        lng = data.coords.longitude;
      },
      function(error) {
        console.log(error);
      }
    );
  
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: lat, lng: lng },
        clickableIcons: false,
        styles: nightStyle,

        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: true
    });
  
    map.addListener("click", function(e) {
      infoWindowClosing();
      if (toolWindow) toolWindow.close();
    });
  
    map.addListener("tilesloaded", function() {
      infoWindow = new google.maps.InfoWindow();
      toolWindow = new google.maps.InfoWindow();
      google.maps.event.clearListeners(map, "tilesloaded"); //unhooks itself after firing once
    });

    initDrawing();
  }
  
  function initDrawing() {
    drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setOptions({
      drawingMode: null,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ["marker", "rectangle", "polygon"]
      }
    });
  
    drawingManager.setMap(map);
    drawingManager.addListener("overlaycomplete", overlayDrawn);
  }
  
  function overlayDrawn(event) {
    event.overlay.addListener("click", overlayClicked);
    event.overlay.addListener("rightclick", overlayRightClicked);
    drawingManager.setOptions({ drawingMode: null });
  
    var latLngs;
    switch (event.type) {
      case "marker":
        latLngs = event.overlay.position;
        break;
      case "polygon":
        latLngs = event.overlay.getPath();
        break;
      case "rectangle":
        latLngs = event.overlay.bounds;
        break;
    }
  
    var guid = getUID();
    //            userOverlays.put(event.overlay, new MOverlay(guid, event.type, latLngs););
    userOverlaysArray[guid] = new MOverlay(guid, event.type, latLngs);
  }
  
  function overlayRightClicked(event) {
    if (toolWindow) toolWindow.close();
    infoWindowClosing();
  
    toolWindow.setContent($("#toolWindow").html());
    toolWindow.setPosition(event.latLng);
    toolWindow.open(map);
  }
  
  function overlayClicked(event) {
    if (toolWindow) toolWindow.close();
    infoWindowClosing();
  
    //            var userOverlay = userOverlays.get(this);
    var userOverlay = userOverlaysArray[this.zguid];
    if (userOverlay == "undefined") return;
    currentMapOverlay = this;
    currentUserOverlay = userOverlay;
    renderInfoWindow(event, userOverlay, this);
  }
  
  function renderInfoWindow(event, userOverlay) {
    $("#infoWindowTitle").attr("value", userOverlay.iwTitle || userOverlay.type);
    $("#infoWindowText").html(userOverlay.iwText || event.latLng.toString());
    $("#infoWindowDate").attr("value", userOverlay.iwDate || "1970-01-05");
  
    infoWindow.setContent($("#infoWindow").html());
    infoWindow.setPosition(event.latLng);
    infoWindow.open(map);
  }
  
  function infoWindowClosing() {
    if (!currentUserOverlay || !currentMapOverlay) return;
    currentUserOverlay.iwTitle = $("#infoWindowTitle").val();
    currentUserOverlay.iwText = $("#infoWindowText").val();
    currentUserOverlay.iwDate = $("#infoWindowDate").val();
    userOverlaysArray[currentMapOverlay.zguid] = currentUserOverlay;
    currentUserOverlay = null;
    currentMapOverlay = null;
    infoWindow.close();
  }
  
  function saveUserOverlays() {
    var cache = [];
    var temp = [];
  
    for (var key in userOverlaysArray) {
      temp.push(userOverlaysArray[key]);
    }
  
    var json = JSON.stringify(temp, function(key, value) {
      if (cache.indexOf(value) !== -1) {
        // avoid circular references
        return;
      }
      if (key == "overlay" || key == "guid") {
        // skip complex objects that can be recreated
        return;
      }
      cache.push(value);
      return value;
    });
    cache = null;
  
    console.log(json);
    alert(json);
    return json;
  }
  
  function loadUserOverlays() {
    var string = prompt("paste json");
    if (string != null && string != "undefined") {
      userOverlays.setHash(new Object());
      renderUserOverlays(string);
    }
  }
  
  function renderUserOverlays(json) {
    var savedOverlays = JSON.parse(json); // HashTable of userOverlays
  
    userOverlaysArray = {};
  
    for (var key in savedOverlays) {
      //                console.log(savedOverlays[key]);
      var o = savedOverlays[key];
      var guid = getUID();
      userOverlaysArray[guid] = new MOverlay(guid, o["type"], o["latLngs"]);
      var newOverlay = renderOverlayItem(o);
      userOverlaysArray[guid].iwDate = o["iwDate"];
      userOverlaysArray[guid].iwText = o["iwText"];
      userOverlaysArray[guid].iwTitle = o["iwTitle"];
      newOverlay.zguid = guid;
      newOverlay.addListener("click", overlayClicked);
      newOverlay.addListener("rightclick", overlayRightClicked);
    }
  }
  
  function renderOverlayItem(e) {
    switch (e.type) {
      case "marker":
        return new google.maps.Marker({
          position: e.latLngs,
          map: map
        });
        break;
      case "polygon":
        return new google.maps.Polygon({
          paths: e.latLngs.b,
          geodesic: true,
          map: map
        });
        break;
      case "rectangle":
        return new google.maps.Rectangle({
          bounds: {
            north: e.latLngs.north,
            south: e.latLngs.south,
            east: e.latLngs.east,
            west: e.latLngs.west
          },
          map: map
        });
        break;
    }
  }
  
  function setupCustomButtons() {
    var btnholder = document.createElement("div");
    btnholder.classList.add("custombuttonholder");
    var save = new CustomControl();
    var load = new CustomControl();
    save.dataset.customAction = "save";
    save.onclick = saveUserOverlays;
    load.dataset.customAction = "load";
    load.onclick = loadUserOverlays;
    $(save).append("<i class='fas fa-lg fa-save'></i>");
    $(load).append("<i class='fas fa-lg fa-folder'></i>");
    $(btnholder)
      .append(save)
      .append(load);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(btnholder);
  }
  
  function CustomControl() {
    var controlUI = document.createElement("div");
    controlUI.classList.add("custombutton");
    return controlUI;
  }
  
  function getUID() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }