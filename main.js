mapboxgl.accessToken = "pk.eyJ1IjoibWFyZ2FyaWRhcHBwIiwiYSI6ImNrNjYxaWJqMDFneTgza29mdHBjeG45dWYifQ.cGtIIZKuy5NgVMSxZpWQRg";

var map = new mapboxgl.Map({
container: "map", // container id
pitch: 0.01, 
style: "mapbox://styles/margaridappp/ck6hfu5d60jgr1ikdhhjvrefi",//hosted style id
center: [150.906686, -33.926951], // starting position
zoom: 13.84,
minZoom: 12
});

 
//markers with photo icon
var photoMarkers = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
          title: "Market Hall",
          description: "",
          image: "img/placeholder.jpeg",
            icon: {
               /* 
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon" 
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.91716706752777,
          -33.924737991796476
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
          title: "Exhibition Centre",
          description: "",
          image: "img/placeholder.jpeg",
            icon: {
               /* 
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon" 
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.91695785522458,
          -33.925895306500564
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
          title: "Community Facilities",
          description: "",
          image: "img/placeholder.jpeg",
            icon: {
               /* 
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon"  
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.91534852981565,
          -33.92406140053267
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
          title: "Civic Centre",
          description: "",
          image: "img/placeholder.jpeg",
            icon: {
               /* 
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon"  
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.91528415679932,
          -33.92637603260166
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
          title: "Sports Facilities",
          description: "",
          image: "img/placeholder.jpeg",
            icon: {
               /* 
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon" 
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.91366410255432,
          -33.9252810414233
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
          title: "Leisure Centre",
          image: "img/placeholder.jpeg",
          description: "",
            icon: {
               /* 
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon"  
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.9130525588989,
          -33.92664310148554
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
          title: "Open Space",
          description: "",
          image: "img/placeholder.jpeg",
            icon: {
               /*
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon" 
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.9124732017517,
          -33.92568164958479
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
          title: "Regional Playground",
          description: "",
          image: "img/placeholder.jpeg",
            icon: {
               /* 
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon"  
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.91333150863645,
          -33.92580628285077
        ]
      }
    }
  ]
};

//create pop ups for photo markers 
function createPopUp(photoMarker) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();

    var popup = new mapboxgl.Popup({ closeOnClick: false, closeOnMove: true, className: "photo-popup" })
      .setLngLat(photoMarker.geometry.coordinates)
      .setHTML(
        "<h4>" + photoMarker.properties.title + "</h4> <img src=" + photoMarker.properties.image + " alt='An Image of'" + photoMarker.properties.title + ">"
      )
      .addTo(map);
  }

$(window).on("load", function () {
// Resize map to full window height
    var h = $(window).height(),
        offsetTop = 60; // Calculate the top offset
    $("#map").css("height", (h - offsetTop));
    map.resize();
    

// add markers to map
photoMarkers.features.forEach(function(photoMarker) {
// create a DOM element for the marker
var el = document.createElement("div");
el.className = "photoMarker";

el.addEventListener("click", function() {
createPopUp(photoMarker);
}); 
 
// add marker to map
new mapboxgl.Marker(el)
.setLngLat(photoMarker.geometry.coordinates)
.addTo(map);
});
    
});  

 
// resize map function 
window.onresize = function(event) {
    var h = $(window).height(),
        offsetTop = 60; // Calculate the top offset
    $("#map").css("height", (h - offsetTop));
    map.resize();
};

map.on('load', function() {
//access SVG Activation Wheel
    var svgObject = document.getElementById('wheel').contentDocument; // this bit is working
    //var svg = svgObject.getElementById('MARKET_PLACE');
    console.log(svgObject);
    
    // Add map sources - all staging added as different sources
map.addSource("now-stage", {
    type: "vector",
    url: "mapbox://margaridappp.cs26xz9f"
    });
map.addSource("1-stage", {
    type: "vector",
    url: "mapbox://margaridappp.7bilpqrg"
    }); 
map.addSource("2-stage", {
    type: "vector",
    url: "mapbox://margaridappp.80cbjvf5"
    });   
map.addSource("3-stage", {
    type: "vector",
    url: "mapbox://margaridappp.1ex24ocz"
    });    
map.addSource("4-stage", {
    type: "vector",
    url: "mapbox://margaridappp.4zwbhblp"
    });    
map.addSource("5-stage", {
    type: "vector",
    url: "mapbox://margaridappp.asuiwdv3"
    });    
map.addSource("6-stage", {
    type: "vector",
    url: "mapbox://margaridappp.cts7r34u"
    });    
map.addSource("7-stage", {
    type: "vector",
    url: "mapbox://margaridappp.6ot50v35"
    });
//Add map layers corresponding to each stage   
map.addLayer({
    "id": "stage-now",
    "type": "fill",
    "source": "now-stage",
    "source-layer": "Existing_Builtform-3sw3zo",
        "layout": {
        "visibility": "none" 
    },
         "paint": {
            "fill-color": "#fe8c01", 
            "fill-opacity" : 0.35       
    },
    });
map.addLayer({
    "id": "stage-1",
    "type": "fill",
    "source": "1-stage",
    "source-layer": "Stage_1-bxirbd",
        "layout": {
        "visibility": "none" 
    },
         "paint": {
            "fill-color": "#fe8c01", 
            "fill-opacity" : 0.35 
    },
    });
map.addLayer({
    "id": "stage-2",
    "type": "fill",
    "source": "2-stage",
    "source-layer": "Stage_2-7piuxz",
        "layout": {
        "visibility": "none" 
    },
         "paint": {
            "fill-color": "#fe8c01", 
            "fill-opacity" : 0.35 
    },
    });
map.addLayer({
    "id": "stage-3",
    "type": "fill",
    "source": "3-stage",
    "source-layer": "Stage_3-0qja53",
        "layout": {
        "visibility": "none" 
    },
         "paint": {
            "fill-color": "#fe8c01", 
            "fill-opacity" : 0.35 
    },
    });
map.addLayer({
    "id": "stage-4",
    "type": "fill",
    "source": "4-stage",
    "source-layer": "Stage_4-94c0lt",
        "layout": {
        "visibility": "none" 
    },
         "paint": {
            "fill-color": "#fe8c01", 
            "fill-opacity" : 0.35 
    },
    });
map.addLayer({
    "id": "stage-5",
    "type": "fill",
    "source": "5-stage",
    "source-layer": "Stage_5-50lqqa",
         "layout": {
        "visibility": "none" 
    },
          "paint": {
            "fill-color": "#fe8c01", 
            "fill-opacity" : 0.35 
    },
    });
map.addLayer({
    "id": "stage-6",
    "type": "fill",
    "source": "6-stage",
    "source-layer": "Stage_6-2qksol",
        "layout": {
        "visibility": "none" 
    },
         "paint": {
            "fill-color": "#fe8c01", 
            "fill-opacity" : 0.35 
    },
    });
map.addLayer({
    "id": "stage-7",
    "type": "fill",
    "source": "7-stage",
    "source-layer": "Stage_7-4h9mtg",
   "layout": {
        "visibility": "none" 
    },
         "paint": {
            "fill-color": "#fe8c01", 
            "fill-opacity" : 0.35 
    },
    });
    map.loadImage('img/0001.jpg', function(error, image) {
   if (error) throw error;
   if (!map.hasImage('border-image')) {
     map.addImage('border-image', image, {
         content: [16, 16, 300, 384], // place text over left half of image, avoiding the 16px border
         //stretchX: [[16, 584]], // stretch everything horizontally except the 16px border
         //stretchY: [[16, 384]], // stretch everything vertically except the 16px border
     });
   }
});

}); 

             
//functions to addLayer to each stage 
function stageNow () {
    $(this).toggleClass( "clicked" )
    if ($(this).hasClass("clicked")) {
        map.setLayoutProperty('stage-now', 'visibility', 'visible');
        map.setLayoutProperty('stage-1', 'visibility', 'none');
        map.setLayoutProperty('stage-2', 'visibility', 'none');
        map.setLayoutProperty('stage-3', 'visibility', 'none');
        map.setLayoutProperty('stage-4', 'visibility', 'none');
        map.setLayoutProperty('stage-5', 'visibility', 'none');
        map.setLayoutProperty('stage-6', 'visibility', 'none');
        map.setLayoutProperty('stage-7', 'visibility', 'none');

    } else {
        map.setLayoutProperty('stage-now', 'visibility', 'none');
    } 
}
function stage1 () {
    $(this).toggleClass( "clicked" )
    if ($(this).hasClass("clicked")) {
        map.setLayoutProperty('stage-1', 'visibility', 'visible');
        map.setLayoutProperty('stage-now', 'visibility', 'none');
        map.setLayoutProperty('stage-2', 'visibility', 'none');
        map.setLayoutProperty('stage-3', 'visibility', 'none');
        map.setLayoutProperty('stage-4', 'visibility', 'none');
        map.setLayoutProperty('stage-5', 'visibility', 'none');
        map.setLayoutProperty('stage-6', 'visibility', 'none');
        map.setLayoutProperty('stage-7', 'visibility', 'none');
    } else {
        map.setLayoutProperty('stage-1', 'visibility', 'none');
    } 
}
function stage2 () {
    $(this).toggleClass( "clicked" )
    if ($(this).hasClass("clicked")) {
        map.setLayoutProperty('stage-2', 'visibility', 'visible');
        map.setLayoutProperty('stage-now', 'visibility', 'none');
        map.setLayoutProperty('stage-1', 'visibility', 'none');
        map.setLayoutProperty('stage-3', 'visibility', 'none');
        map.setLayoutProperty('stage-4', 'visibility', 'none');
        map.setLayoutProperty('stage-5', 'visibility', 'none');
        map.setLayoutProperty('stage-6', 'visibility', 'none');
        map.setLayoutProperty('stage-7', 'visibility', 'none');
    } else {
        map.setLayoutProperty('stage-2', 'visibility', 'none');
    } 
}
function stage3 () {
    $(this).toggleClass( "clicked" )
    if ($(this).hasClass("clicked")) {
        map.setLayoutProperty('stage-3', 'visibility', 'visible');
        map.setLayoutProperty('stage-now', 'visibility', 'none');
        map.setLayoutProperty('stage-1', 'visibility', 'none');
        map.setLayoutProperty('stage-2', 'visibility', 'none');
        map.setLayoutProperty('stage-4', 'visibility', 'none');
        map.setLayoutProperty('stage-5', 'visibility', 'none');
        map.setLayoutProperty('stage-6', 'visibility', 'none');
        map.setLayoutProperty('stage-7', 'visibility', 'none');
    } else {
        map.setLayoutProperty('stage-3', 'visibility', 'none');
    } 
}
function stage4 () {
    $(this).toggleClass( "clicked" )
    if ($(this).hasClass("clicked")) {
        map.setLayoutProperty('stage-4', 'visibility', 'visible');
        map.setLayoutProperty('stage-now', 'visibility', 'none');
        map.setLayoutProperty('stage-1', 'visibility', 'none');
        map.setLayoutProperty('stage-2', 'visibility', 'none');
        map.setLayoutProperty('stage-3', 'visibility', 'none');
        map.setLayoutProperty('stage-5', 'visibility', 'none');
        map.setLayoutProperty('stage-6', 'visibility', 'none');
        map.setLayoutProperty('stage-7', 'visibility', 'none');
    } else {
        map.setLayoutProperty('stage-4', 'visibility', 'none');
    } }
function stage5 () {
   $(this).toggleClass( "clicked" )
    if ($(this).hasClass("clicked")) {
        map.setLayoutProperty('stage-5', 'visibility', 'visible');
        map.setLayoutProperty('stage-now', 'visibility', 'none');
        map.setLayoutProperty('stage-1', 'visibility', 'none');
        map.setLayoutProperty('stage-2', 'visibility', 'none');
        map.setLayoutProperty('stage-3', 'visibility', 'none');
        map.setLayoutProperty('stage-4', 'visibility', 'none');
        map.setLayoutProperty('stage-6', 'visibility', 'none');
        map.setLayoutProperty('stage-7', 'visibility', 'none');
    } else {
        map.setLayoutProperty('stage-5', 'visibility', 'none');
    } 
}
function stage6 () {
    $(this).toggleClass( "clicked" )
    if ($(this).hasClass("clicked")) {
        map.setLayoutProperty('stage-6', 'visibility', 'visible');
        map.setLayoutProperty('stage-now', 'visibility', 'none');
        map.setLayoutProperty('stage-1', 'visibility', 'none');
        map.setLayoutProperty('stage-2', 'visibility', 'none');
        map.setLayoutProperty('stage-3', 'visibility', 'none');
        map.setLayoutProperty('stage-4', 'visibility', 'none');
        map.setLayoutProperty('stage-5', 'visibility', 'none');
        map.setLayoutProperty('stage-7', 'visibility', 'none');
    } else {
        map.setLayoutProperty('stage-6', 'visibility', 'none');
    } 
}
function stage7 () {
    $(this).toggleClass( "clicked" )
    if ($(this).hasClass("clicked")) {
        map.setLayoutProperty('stage-7', 'visibility', 'visible');
        map.setLayoutProperty('stage-now', 'visibility', 'none');
        map.setLayoutProperty('stage-1', 'visibility', 'none');
        map.setLayoutProperty('stage-2', 'visibility', 'none');
        map.setLayoutProperty('stage-3', 'visibility', 'none');
        map.setLayoutProperty('stage-4', 'visibility', 'none');
        map.setLayoutProperty('stage-5', 'visibility', 'none');
        map.setLayoutProperty('stage-6', 'visibility', 'none');
    } else {
        map.setLayoutProperty('stage-7', 'visibility', 'none');
    } 
}

//event listeners to stages  
document.getElementById("stageNow").addEventListener("click", stageNow);
document.getElementById("stage1").addEventListener("click", stage1);
document.getElementById("stage2").addEventListener("click", stage2);
document.getElementById("stage3").addEventListener("click", stage3);
document.getElementById("stage4").addEventListener("click", stage4);
document.getElementById("stage5").addEventListener("click", stage5);
document.getElementById("stage6").addEventListener("click", stage6);
document.getElementById("stage7").addEventListener("click", stage7);

// Add zoom buttons; Disable rotation and its button 
map.touchZoomRotate.disableRotation();
map.addControl(new mapboxgl.NavigationControl({
  showCompass: false
}));

// Flyto functionality for each catalyst
$("#market").click(function() {
  map.flyTo({
    center: [
   150.917281, -33.924748
    ],
    zoom: 16,
    essential: true 
});
});
$("#exhibition").click(function() {
  map.flyTo({
    center: [
   150.917134, -33.926206
    ],
    zoom: 16,
    essential: true 
});
});
$("#community").click(function() {
  map.flyTo({
    center: [
   150.915180, -33.924748
    ],
    zoom: 16,
    essential: true 
});
});
$("#civic").click(function() {
  map.flyTo({
    center: [
   150.915213, -33.926078
    ],
    zoom: 16,
    essential: true 
});
});
$("#sports").click(function() {
  map.flyTo({
    center: [
   150.913617, -33.926399
    ],
    zoom: 16,
    essential: true 
});
});
$("#leisure").click(function() {
  map.flyTo({
    center: [
   150.913083, -33.926876
    ],
    zoom: 16,
    essential: true 
});
});
$("#open").click(function() {
  map.flyTo({
    center: [
   150.912620, -33.925912
    ],
    zoom: 16,
    essential: true 
});
});
$("#play").click(function() {
  map.flyTo({
    center: [
   150.913482, -33.925905
    ],
    zoom: 16,
    essential: true 
});
});

// Reset button - resets zoom levels to original
$("#reset").click(function() {
  map.flyTo({
    center: [
   150.906686, -33.926951
    ],
    zoom: 13.84,
    essential: true 
});
});

/*
// links & bits

For Staging and catalysts
https://docs.mapbox.com/mapbox-gl-js/example/filter-markers/

https://docs.mapbox.com/mapbox-gl-js/example/image-on-a-map/
https://gis.stackexchange.com/questions/257056/overlaying-image-on-mapbox-map

markers anchors and url from geojson
iconUrl: 'img/icon-photo.png',
                 iconSize: [50, 50], // size of the icon
                iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
                
https://github.com/Nmargolis/story-resume/blob/gh-pages/scripts.js

https://github.com/samreaves/mapbox-starter/blob/master/index.html

https://github.com/atcodedog05/MapboxGL-JS-Pubs-in-Bangalore/blob/master/map.html

var activeItem = document.getElementsByClassName('active');

Just add data-toggle="collapse" and a data-target to the element to automatically assign control of one or more collapsible elements. The data-target attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element.

https://docs.mapbox.com/mapbox-gl-js/api/ - set popup anchor
    TO FIZ STAGING CLICKS (REMOVE LAYER WHEN SOMETHING ELSE IS CLICKED)
$(document).on("click",".sidebar li",function(){
  if (!$(this).hasClass("current")) {
    $("li.current").removeClass("current");
    $(this).addClass("current");
  }
});
*/ 