(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(68)},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),i=a.n(o),l=a(3),s=a(4),c=a(6),u=a(5),p=a(7),m=a(72),h=a(71),f=a(74),d=a(70),k=a(11),b=a.n(k),y=(a(49),a(51),r.a.createContext(null)),g=function(e){return function(t){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).state={authUser:null},t}return Object(p.a)(a,t),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.auth().onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"render",value:function(){var t=this.state.authUser;return r.a.createElement(y.Provider,{value:t},r.a.createElement(e,this.props))}}]),a}(r.a.Component)},v=a(73),C=function(e){return function(t){var a=function(a){function n(){return Object(l.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(p.a)(n,a),Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;b.a.auth().onAuthStateChanged(function(a){e(a)||t.props.history.push("/login")})}},{key:"render",value:function(){var e=this;return r.a.createElement(y.Consumer,null,function(a){return a?r.a.createElement(t,Object.assign({},e.props,{user:a})):null})}}]),n}(r.a.Component);return Object(v.a)(a)}},E=a(28),M=a(17),O=a(22),x=a(27);function T(e){var t=Object(O.a)({prefix:"fas",iconName:e}).icon;return{anchor:{x:t[0]/2,y:t[1]},path:t[4],scale:.075,strokeColor:"#000000",strokeWeight:1,fillColor:"#ffffff",fillOpacity:.66}}O.b.add(x.a);var w=[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}],j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onNameChange=a.props.onNameChange,a.onDescriptionChange=a.props.onDescriptionChange,a.onFillColorChange=a.props.onFillColorChange,a.onFillOpacityChange=a.props.onFillOpacityChange,a.onStrokeColorChange=a.props.onStrokeColorChange,a.onStrokeWeightChange=a.props.onStrokeWeightChange,a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;if(!this.props.activeMarker)return r.a.createElement("div",null);var t=this.props.activeMarker;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col m-2"},r.a.createElement("input",{className:"form-control mb-2",type:"text",name:"name",value:t.name,onChange:function(t){return e.onNameChange(t)}}),r.a.createElement("input",{className:"form-control mb-2",type:"text",name:"description",value:t.description,onChange:function(t){return e.onDescriptionChange(t)}}),r.a.createElement("input",{className:"form-control mb-2",type:"color",name:"fillColor",value:t.iconSVG.fillColor,onChange:function(t){return e.onFillColorChange(t)}}),r.a.createElement("input",{className:"form-control mb-2",type:"range",name:"fillOpacity",value:t.iconSVG.fillOpacity,min:"0",max:"1",step:"0.01",onChange:function(t){return e.onFillOpacityChange(t)}}),r.a.createElement("input",{className:"form-control mb-2",type:"color",name:"strokeColor",value:t.iconSVG.strokeColor,onChange:function(t){return e.onStrokeColorChange(t)}}),r.a.createElement("input",{className:"form-control mb-2",type:"range",name:"strokeWeight",value:t.iconSVG.strokeWeight,min:"0",max:"5",step:"1",onChange:function(t){return e.onStrokeWeightChange(t)}})))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedIcon:null,availableIcons:null},a.markerIconClicked=function(e){a.setState({selectedIcon:e.currentTarget}),a.props.onIconClick(e);var t=window.document.querySelector("#markerIcons div.text-info");t&&(t.classList.remove("text-info"),t.classList.add("text-white")),e.currentTarget.classList.remove("text-white"),e.currentTarget.classList.add("text-info")},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(){return null===this.state.availableIcons||!!this.props.placeMarker}},{key:"componentDidUpdate",value:function(){if(!this.props.placeMarker){var e=window.document.querySelector("#markerIcons div.text-info");e&&(e.classList.remove("text-info"),e.classList.add("text-white"))}}},{key:"componentDidMount",value:function(){this.setState({availableIcons:this.makeIcons(["map-pin","map-marker","flag","thumbtack","beer","coffee","utensils","birthday-cake","graduation-cap","university","home","info","music","plane","bus","car"])})}},{key:"makeIcons",value:function(e){var t=this,a=[];return e.forEach(function(e,n){a.push(r.a.createElement("div",{onClick:t.markerIconClicked,key:n,"data-icon-name":e,className:"text-white col-6 mt-3 py-3 border pointer"},r.a.createElement("i",{className:"fa fa-fw fa-2x fa-"+e})))}),a}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"pt-2 mb-0 text-center"},"Marker"),r.a.createElement("div",{id:"markerIcons",className:"d-flex flex-wrap text-center"},this.state.availableIcons),this.props.user.isAnonymous?r.a.createElement("div",{className:"mt-3 btn btn-info btn-block",onClick:function(){window.location.href="/logout"}},"Log In"):r.a.createElement("div",{className:"mt-3 btn btn-info btn-block",onClick:this.props.onMapSave},"Save Map"))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={visible:a.props.visible},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{name:"helpwindow"},r.a.createElement("div",{style:{backgroundColor:"rgba(0, 0, 0, 0.33)"},className:this.props.visible?"position-absolute w-100 h-100 d-flex justify-content-center":"d-none"},r.a.createElement("div",{className:"mx-3 py-2 px-3 col-md-6 h-50 my-auto bg-dark text-white rounded"},this.props.children)))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={size:a.props.size||"150px",side:a.props.side||"left"},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){switch(this.state.side){case"left":return r.a.createElement("section",{name:"leftsidebar"},r.a.createElement("div",{style:{width:this.state.size,maxWidth:"50%",left:this.props.visible?"0px":"-"+this.state.size,transition:"0.5s"},className:"bg-dark text-white h-100 d-inline-block position-fixed"},this.props.children));case"right":return r.a.createElement("section",{name:"rightsidebar"},r.a.createElement("div",{style:{width:this.state.size,maxWidth:"50%",right:this.props.visible?"0px":"-"+this.state.size,transition:"0.5s"},className:"bg-dark text-white h-100 d-inline-block position-fixed"},this.props.children));default:return null}}}]),t}(n.Component),L=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.markers.map(function(t,a){return r.a.createElement("i",{style:{cursor:"pointer"},onClick:e.props.iconClicked,key:t.index,"data-index":t.index,className:"fa fa-fw fa-2x fa-"+t.iconName})}),a=this.props.user.isAnonymous?"Log in with Facebook to save markers":this.props.user.displayName.split(" ")[0]+"'s Markers";return r.a.createElement("section",{name:this.props.title},r.a.createElement("p",{className:"small text-center"},a),t)}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={mapStyle:w,leftSidebarVisible:!0,markerEditorVisible:!1,mapToolbarVisible:!0,currentMarkerIconName:"map-pin",currentMarkerSVG:T("map-pin"),userMarkers:[],otherMarkers:[],activeMarker:null,placeMarker:!1},a.toggleLeftSidebar=function(){a.setState({leftSidebarVisible:!a.state.leftSidebarVisible})},a.toggleMapToolbar=function(){a.setState({mapToolbarVisible:!a.state.mapToolbarVisible})},a.toggleHelpWindow=function(){a.setState({helpWindowVisible:!a.state.helpWindowVisible})},a.actionButtonMouseEnter=function(e){e.currentTarget.classList.add("bg-info")},a.actionButtonMouseLeave=function(e){e.currentTarget.classList.remove("bg-info")},a.onMarkerClick=function(e,t,n){a.setState({activeMarker:a.state.userMarkers[e.index],markerEditorVisible:!0})},a.onOtherMarkerClick=function(e,t,a){},a.globalMarkerClicked=function(e){a.setState({panToPos:a.state.userMarkers[e.currentTarget.dataset.index].position})},a.globalOtherMarkerClicked=function(e){a.setState({panToPos:a.state.otherMarkers[e.currentTarget.dataset.index].position})},a.toolbarIconClicked=function(e){a.setState({markerEditorVisible:!1,activeMarker:null,placeMarker:!0,currentMarkerIconName:e.currentTarget.dataset.iconName,currentMarkerSVG:T(e.currentTarget.dataset.iconName)})},a.onMapClicked=function(e,t,n){if(a.state.placeMarker){var r={index:a.state.userMarkers.length,name:"new marker",description:"description",position:{lat:n.latLng.lat(),lng:n.latLng.lng()},iconName:a.state.currentMarkerIconName,iconSVG:a.state.currentMarkerSVG};a.setState({placeMarker:!1,userMarkers:Object(E.a)(a.state.userMarkers).concat([r])})}else a.setState({activeMarker:null,markerEditorVisible:!1})},a.saveMap=function(){var e=[];a.state.userMarkers.forEach(function(t){delete t.iconSVG.path,e.push(t)}),console.log(e)},a.onMarkerNameChange=function(e){var t=a.state.activeMarker;t.name=e.currentTarget.value,a.setState({activeMarker:t})},a.onMarkerDescriptionChange=function(e){var t=a.state.activeMarker;t.description=e.currentTarget.value,a.setState({activeMarker:t})},a.onMarkerFillColorChange=function(e){var t=a.state.activeMarker;t.iconSVG.fillColor=e.currentTarget.value,t.shouldRender=!0,a.setState({activeMarker:t})},a.onMarkerFillOpacityChange=function(e){var t=a.state.activeMarker;t.iconSVG.fillOpacity=parseFloat(e.currentTarget.value);var n=a.state.userMarkers;t.shouldRender=!0,a.setState({userMarkers:n,activeMarker:n[t.index]})},a.onMarkerStrokeColorChange=function(e){var t=a.state.activeMarker;t.iconSVG.strokeColor=e.currentTarget.value,t.shouldRender=!0,a.setState({activeMarker:t})},a.onMarkerStrokeWeightChange=function(e){var t=a.state.activeMarker;t.iconSVG.strokeWeight=parseInt(e.currentTarget.value),t.shouldRender=!0,a.setState({activeMarker:t})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.userMarkers.map(function(t,a){var n=r.a.createElement(M.Marker,{key:a,index:a,name:t.name,position:t.position,icon:t.iconSVG,animation:t.shouldRender?null:window.google.maps.Animation.DROP,onClick:e.onMarkerClick,draggable:!0,shouldRender:t.shouldRender});return t.shouldRender=!1,n}),a=this.state.otherMarkers.map(function(t,a){var n=r.a.createElement(M.Marker,{key:a,index:a,name:t.name,position:t.position,icon:t.iconSVG,onClick:e.onOtherMarkerClick});return t.shouldRender=!1,n});return r.a.createElement("div",null,r.a.createElement(M.Map,{style:{transition:"0.5s",marginBottom:46,marginLeft:this.state.leftSidebarVisible?300:0,marginRight:this.state.mapToolbarVisible?150:0},styles:this.state.mapStyle,onClick:this.onMapClicked,google:this.props.google,zoom:10,center:this.state.panToPos?this.state.panToPos:null,initialCenter:{lat:33.83008972168741,lng:-84.35267661111448}},t,a),r.a.createElement("section",{name:"actionBar",className:"d-block"},r.a.createElement("div",{className:"container-fluid p-0 fixed-bottom bg-dark",style:{height:"46px"}},r.a.createElement("div",{className:"d-flex justify-content-around text-center"},r.a.createElement("div",{style:{cursor:"pointer"},onClick:this.toggleLeftSidebar,onMouseEnter:this.actionButtonMouseEnter,onMouseLeave:this.actionButtonMouseLeave,className:"col"},r.a.createElement("i",{className:"fas fa-lg fa-list p-3 text-white"})),r.a.createElement("div",{style:{cursor:"pointer"},onClick:this.toggleHelpWindow,onMouseEnter:this.actionButtonMouseEnter,onMouseLeave:this.actionButtonMouseLeave,className:"col"},r.a.createElement("i",{className:"fas fa-lg fa-question p-3 text-white"})),r.a.createElement("div",{style:{cursor:"pointer"},onClick:this.toggleMapToolbar,onMouseEnter:this.actionButtonMouseEnter,onMouseLeave:this.actionButtonMouseLeave,className:"col"},r.a.createElement("i",{className:"fas fa-lg fa-list fa-flip-horizontal p-3 text-white"}))))),r.a.createElement(N,{visible:this.state.helpWindowVisible}),r.a.createElement(I,{visible:this.state.leftSidebarVisible,side:"left",size:"300px"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},0!==t.length?r.a.createElement(L,{iconClicked:this.globalMarkerClicked,markers:this.state.userMarkers,user:this.props.user}):null,0!==a.length?r.a.createElement(L,{iconClicked:this.globalMarkerClicked,markers:this.state.otherMarkers}):null))),r.a.createElement(I,{className:"p-4",visible:this.state.markerEditorVisible,side:"left",size:"300px"},r.a.createElement(j,{activeMarker:this.state.activeMarker,onNameChange:this.onMarkerNameChange,onDescriptionChange:this.onMarkerDescriptionChange,onFillColorChange:this.onMarkerFillColorChange,onFillOpacityChange:this.onMarkerFillOpacityChange,onStrokeColorChange:this.onMarkerStrokeColorChange,onStrokeWeightChange:this.onMarkerStrokeWeightChange})),r.a.createElement(I,{visible:this.state.mapToolbarVisible,side:"right"},r.a.createElement(S,{onIconClick:this.toolbarIconClicked,onMapSave:this.saveMap,placeMarker:this.state.placeMarker,user:this.props.user})))}}]),t}(n.Component),A=Object(M.GoogleApiWrapper)({apiKey:"AIzaSyCwS80CMHsyEiDxcPmfXkDyPwulq9ltuxE",LoadingContainer:function(){return r.a.createElement("div",null)}})(V),R=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(A,{user:this.props.user})}}]),t}(n.Component),P=C(function(e){return!!e})(R),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a.anonymousLogin=function(){console.log("anon"),b.a.auth().signInAnonymously().then(function(){window.location.href="/"}).catch(function(e){console.log(e)})},a.facebookLogin=function(){var e=new b.a.auth.FacebookAuthProvider;b.a.auth().signInWithPopup(e).then(function(){window.location.href="/"}).catch(function(e){console.log(e)})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("button",{className:"col-md-6 btn btn-default btn-block text-white",style:{backgroundColor:"#3B5998"},onClick:this.facebookLogin},"Login with ",r.a.createElement("i",{className:"fab fa-facebook"}))),r.a.createElement("h4",{className:"my-3 text-center"},"or"),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("button",{className:"col-md-6 btn btn-default btn-dark text-white",onClick:this.anonymousLogin},"Continue Anonymously")))}}]),t}(n.Component),B={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_PROJECT_ID};b.a.initializeApp(B);var D=function(){return b.a.auth().signOut(),r.a.createElement(m.a,{to:"/login"})},W=g(function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("section",{name:"content"},r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(f.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:P}),r.a.createElement(d.a,{exact:!0,path:"/map/:id",component:P}),r.a.createElement(d.a,{exact:!0,path:"/:id/with/:others",component:P}),r.a.createElement(d.a,{exact:!0,path:"/login",component:_}),r.a.createElement(d.a,{exact:!0,path:"/logout",component:D})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.f1b3ca4d.chunk.js.map