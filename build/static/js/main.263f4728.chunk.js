(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(81)},76:function(e,t,a){},78:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(13),i=a.n(o),s=a(4),l=a(6),c=a(9),p=a(7),u=a(10),m=a(30),h=a(86),f=(a(83),a(84)),d=a(85),k=(a(36),a(38),a(29)),g=a(14),y=a(19),b=a.n(y),v=a(27),M=a.n(v),C=a(20),E=a(28);function x(e){var t=Object(C.a)({prefix:"fas",iconName:e}).icon;return{anchor:{x:t[0]/2,y:t[1]},path:t[4],scale:.075,strokeColor:"#000000",strokeWeight:1,fillColor:"#ffffff",fillOpacity:.66}}C.b.add(E.a);var S=[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}],T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).onNameChange=a.props.onNameChange,a.onDescriptionChange=a.props.onDescriptionChange,a.onFillColorChange=a.props.onFillColorChange,a.onFillOpacityChange=a.props.onFillOpacityChange,a.onStrokeColorChange=a.props.onStrokeColorChange,a.onStrokeWeightChange=a.props.onStrokeWeightChange,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(!this.props.activeMarker)return n.a.createElement("div",null);var t=this.props.activeMarker;return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col m-2"},n.a.createElement("input",{className:"form-control mb-2",type:"text",name:"name",value:t.name,onChange:function(t){return e.onNameChange(t)}}),n.a.createElement("input",{className:"form-control mb-2",type:"text",name:"description",value:t.description,onChange:function(t){return e.onDescriptionChange(t)}}),n.a.createElement("input",{className:"form-control mb-2",type:"color",name:"fillColor",value:t.iconSVG.fillColor,onChange:function(t){return e.onFillColorChange(t)}}),n.a.createElement("input",{className:"form-control mb-2",type:"range",name:"fillOpacity",value:t.iconSVG.fillOpacity,min:"0",max:"1",step:"0.01",onChange:function(t){return e.onFillOpacityChange(t)}}),n.a.createElement("input",{className:"form-control mb-2",type:"color",name:"strokeColor",value:t.iconSVG.strokeColor,onChange:function(t){return e.onStrokeColorChange(t)}}),n.a.createElement("input",{className:"form-control mb-2",type:"range",name:"strokeWeight",value:t.iconSVG.strokeWeight,min:"0",max:"5",step:"1",onChange:function(t){return e.onStrokeWeightChange(t)}})))}}]),t}(r.Component),w=(a(76),function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={visible:a.props.visible},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{name:"helpwindow"},n.a.createElement("div",{style:{backgroundColor:"rgba(0, 0, 0, 0.33)"},className:this.props.visible?"transition-1s position-absolute w-100 h-100 d-flex justify-content-center":"d-none"},n.a.createElement("div",{className:"mx-3 py-2 px-3 col-md-6 h-50 my-auto bg-dark text-white rounded"},this.props.children)))}}]),t}(r.Component)),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={selectedIcon:null},a.markerIconClicked=function(e){a.setState({selectedIcon:e.currentTarget}),a.props.onIconClick(e);var t=window.document.querySelector("#markerIcons div.text-info");t&&(t.classList.remove("text-info"),t.classList.add("text-white")),e.currentTarget.classList.remove("text-white"),e.currentTarget.classList.add("text-info")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(){return!!this.props.placeMarker}},{key:"componentDidUpdate",value:function(){if(!this.props.placeMarker){var e=window.document.querySelector("#markerIcons div.text-info");e&&(e.classList.remove("text-info"),e.classList.add("text-white"))}}},{key:"componentWillMount",value:function(){this.setState({availableIcons:this.makeIcons(["map-pin","map-marker","flag","thumbtack","beer","coffee","utensils","birthday-cake","graduation-cap","university","home","info","music","plane","bus","car"])})}},{key:"makeIcons",value:function(e){var t=this,a=[];return e.forEach(function(e,r){a.push(n.a.createElement("div",{onClick:t.markerIconClicked,key:r,"data-icon-name":e,className:"text-white col-6 mt-3 py-3 border pointer"},n.a.createElement("i",{className:"fa fa-fw fa-2x fa-"+e})))}),a}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("p",{className:"pt-2 mb-0 text-center"},"Marker"),n.a.createElement("div",{id:"markerIcons",className:"d-flex flex-wrap text-center"},this.state.availableIcons),n.a.createElement("div",{className:"mt-3 btn btn-info btn-block",onClick:this.props.onMapSave},"Save Map"))}}]),t}(r.Component),N=(a(78),function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={size:a.props.size||"150px",side:a.props.side||"left"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){switch(this.state.side){case"left":return n.a.createElement("section",{name:"leftsidebar"},n.a.createElement("div",{style:{width:this.state.size,maxWidth:"50%",left:this.props.visible?"0px":"-"+this.state.size},className:"transition-1s bg-dark text-white h-100 d-inline-block position-fixed"},this.props.children));case"right":return n.a.createElement("section",{name:"rightsidebar"},n.a.createElement("div",{style:{width:this.state.size,maxWidth:"50%",right:this.props.visible?"0px":"-"+this.state.size},className:"transition-1s bg-dark text-white h-100 d-inline-block position-fixed"},this.props.children));default:return null}}}]),t}(r.Component)),j=function e(t){Object(s.a)(this,e),this.index=t.index,this.iconName=t.iconName,this.iconSVG=t.iconSVG,this.position=t.position,this.name=t.name,this.description=t.description},V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={mapStyle:S,leftSidebarVisible:!0,markerEditorVisible:!1,mapToolbarVisible:!0,currentMarkerIconName:"map-pin",currentMarkerSVG:x("map-pin"),userMarkers:[],otherMarkers:[],activeMarker:null,placeMarker:!1},a.toggleLeftSidebar=function(){a.setState({leftSidebarVisible:!a.state.leftSidebarVisible})},a.toggleMapToolbar=function(){a.setState({mapToolbarVisible:!a.state.mapToolbarVisible})},a.toggleHelpWindow=function(){a.setState({helpWindowVisible:!a.state.helpWindowVisible})},a.actionButtonMouseEnter=function(e){e.currentTarget.classList.add("bg-info")},a.actionButtonMouseLeave=function(e){e.currentTarget.classList.remove("bg-info")},a.onMarkerClick=function(e,t,r){a.setState({activeMarker:a.state.userMarkers[e.index],markerEditorVisible:!0})},a.onOtherMarkerClick=function(e,t,a){},a.globalMarkerClicked=function(e){a.setState({panToPos:a.state.userMarkers[e.currentTarget.dataset.index].position})},a.globalOtherMarkerClicked=function(e){a.setState({panToPos:a.state.otherMarkers[e.currentTarget.dataset.index].position})},a.toolbarIconClicked=function(e){a.setState({markerEditorVisible:!1,activeMarker:null,placeMarker:!0,currentMarkerIconName:e.currentTarget.dataset.iconName,currentMarkerSVG:x(e.currentTarget.dataset.iconName)})},a.onMapClicked=function(e,t,r){if(a.state.placeMarker){var n=new j({index:a.state.userMarkers.length,name:"new marker",description:"description",position:{lat:r.latLng.lat(),lng:r.latLng.lng()},iconName:a.state.currentMarkerIconName,iconSVG:a.state.currentMarkerSVG});a.setState({placeMarker:!1,userMarkers:Object(k.a)(a.state.userMarkers).concat([n])})}else a.setState({activeMarker:null,markerEditorVisible:!1})},a.saveMap=function(){var e=JSON.stringify(a.state.userMarkers);b.a.post("http://localhost:3001",M.a.stringify({markers:e})).then(function(e){window.location.href="http://localhost:3000/"+e.data})},a.onMarkerNameChange=function(e){var t=a.state.activeMarker;t.name=e.currentTarget.value,a.setState({activeMarker:t})},a.onMarkerDescriptionChange=function(e){var t=a.state.activeMarker;t.description=e.currentTarget.value,a.setState({activeMarker:t})},a.onMarkerFillColorChange=function(e){var t=a.state.activeMarker;t.iconSVG.fillColor=e.currentTarget.value,t.shouldRender=!0,a.setState({activeMarker:t})},a.onMarkerFillOpacityChange=function(e){var t=a.state.activeMarker;t.iconSVG.fillOpacity=parseFloat(e.currentTarget.value);var r=a.state.userMarkers;t.shouldRender=!0,a.setState({userMarkers:r,activeMarker:r[t.index]})},a.onMarkerStrokeColorChange=function(e){var t=a.state.activeMarker;t.iconSVG.strokeColor=e.currentTarget.value,t.shouldRender=!0,a.setState({activeMarker:t})},a.onMarkerStrokeWeightChange=function(e){var t=a.state.activeMarker;t.iconSVG.strokeWeight=parseInt(e.currentTarget.value),t.shouldRender=!0,a.setState({activeMarker:t})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;if(this.props.match.params.id){var t="http://localhost:3001/"+this.props.match.params.id;this.props.match.params.others&&(t+="/with/"+this.props.match.params.others),b.a.get(t).then(function(t){if(t.data.otherMarkers.length>0){var a=[];t.data.otherMarkers.forEach(function(e){JSON.parse(e.markers).forEach(function(e){var t=x(e.iconName);e.iconSVG.path=t.path,a.push(e)})}),e.setState({otherMarkers:a})}var r=t.data.userMarkers?JSON.parse(t.data.userMarkers.markers):[];r.forEach(function(e){var t=x(e.iconName);e.iconSVG.path=t.path}),e.setState({userMarkers:r})})}}},{key:"render",value:function(){var e=this,t=this.state.userMarkers.map(function(t,a){var r=n.a.createElement(g.Marker,{key:a,index:a,name:t.name,position:t.position,icon:t.iconSVG,animation:t.shouldRender?null:window.google.maps.Animation.DROP,onClick:e.onMarkerClick,draggable:!0,shouldRender:t.shouldRender});return t.shouldRender=!1,r}),a=this.state.otherMarkers.map(function(t,a){var r=n.a.createElement(g.Marker,{key:a,index:a,name:t.name,position:t.position,icon:t.iconSVG,onClick:e.onOtherMarkerClick});return t.shouldRender=!1,r});return n.a.createElement("div",null,n.a.createElement(g.Map,{style:{transition:"0.5s",marginBottom:46,marginLeft:this.state.leftSidebarVisible?300:0,marginRight:this.state.mapToolbarVisible?150:0},styles:this.state.mapStyle,onClick:this.onMapClicked,google:this.props.google,zoom:10,center:this.state.panToPos?this.state.panToPos:null,initialCenter:{lat:33.83008972168741,lng:-84.35267661111448}},t,a),n.a.createElement("section",{name:"actionBar",className:"d-block"},n.a.createElement("div",{className:"container-fluid p-0 fixed-bottom bg-dark",style:{height:"46px"}},n.a.createElement("div",{className:"d-flex justify-content-around text-center"},n.a.createElement("div",{style:{cursor:"pointer"},onClick:this.toggleLeftSidebar,onMouseEnter:this.actionButtonMouseEnter,onMouseLeave:this.actionButtonMouseLeave,className:"col"},n.a.createElement("i",{className:"fas fa-lg fa-list p-3 text-white"})),n.a.createElement("div",{style:{cursor:"pointer"},onClick:this.toggleHelpWindow,onMouseEnter:this.actionButtonMouseEnter,onMouseLeave:this.actionButtonMouseLeave,className:"col"},n.a.createElement("i",{className:"fas fa-lg fa-question p-3 text-white"})),n.a.createElement("div",{style:{cursor:"pointer"},onClick:this.toggleMapToolbar,onMouseEnter:this.actionButtonMouseEnter,onMouseLeave:this.actionButtonMouseLeave,className:"col"},n.a.createElement("i",{className:"fas fa-lg fa-list fa-flip-horizontal p-3 text-white"}))))),n.a.createElement(w,{visible:this.state.helpWindowVisible}),n.a.createElement(N,{visible:this.state.leftSidebarVisible,side:"left",size:"300px"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h4",null,"Main Markers"),this.state.userMarkers.map(function(t,a){return n.a.createElement("i",{onClick:e.globalMarkerClicked,key:t.index,"data-index":t.index,className:"fa fa-fw fa-2x fa-"+t.iconName})}),n.a.createElement("hr",null),n.a.createElement("h4",null,"Other Markers"),this.state.otherMarkers.map(function(t,a){return n.a.createElement("i",{onClick:e.globalOtherMarkerClicked,key:t.index,"data-index":t.index,className:"fa fa-fw fa-2x fa-"+t.iconName})})))),n.a.createElement(N,{className:"p-4",visible:this.state.markerEditorVisible,side:"left",size:"300px"},n.a.createElement(T,{activeMarker:this.state.activeMarker,onNameChange:this.onMarkerNameChange,onDescriptionChange:this.onMarkerDescriptionChange,onFillColorChange:this.onMarkerFillColorChange,onFillOpacityChange:this.onMarkerFillOpacityChange,onStrokeColorChange:this.onMarkerStrokeColorChange,onStrokeWeightChange:this.onMarkerStrokeWeightChange})),n.a.createElement(N,{visible:this.state.mapToolbarVisible,side:"right"},n.a.createElement(O,{onIconClick:this.toolbarIconClicked,onMapSave:this.saveMap,placeMarker:this.state.placeMarker})))}}]),t}(r.Component),L=Object(g.GoogleApiWrapper)({apiKey:"AIzaSyAiFYDL5cioSrqAZUKhGkZn2aezojpBOSs",LoadingContainer:function(){return n.a.createElement("div",null)}})(V),W=function(e){var t=e.component,a=Object(m.a)(e,["component"]);return n.a.createElement(h.a,Object.assign({},a,{render:function(e){return I(t,e,a)}}))},I=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var o=Object.assign.apply(Object,[{}].concat(a));return n.a.createElement(e,o)},G=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(f.a,null,n.a.createElement("section",{name:"content"},n.a.createElement("div",{className:"container-fluid p-0"},n.a.createElement(d.a,null,n.a.createElement(W,{exact:!0,path:"/",component:L}),n.a.createElement(W,{exact:!0,path:"/:id",component:L}),n.a.createElement(W,{exact:!0,path:"/:id/with/:others",component:L})))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.263f4728.chunk.js.map