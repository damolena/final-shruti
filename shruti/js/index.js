var msg=document.getElementById("message");
msg.innerHTML="Message";

//Back to Top----------------------------------------------------------
var timeOut;
function scrollToTop() {
  if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
    window.scrollBy(0,-50);
    timeOut=setTimeout('scrollToTop()',10);
  }
  else clearTimeout(timeOut);
}
//contact form--------------------------------------------------------------
var cname=document.getElementById('name');
var cemail=document.getElementById('email');
var cmessage=document.getElementById('message');
cname.onclick=function()
{
	cname.value="";	
}

cemail.onclick=function()
{
	cemail.value="";	
}

cmessage.onclick=function()
{
	cmessage.value="";	
}

cmessage.innerHTML="Message";

//slider---------------------------------------------------------------------
var ul1;
var ul2;
var ul3;
var ul4;
var li_items1;
var li_items2;
var li_items3;
var li_items4;
var imageNumber1;
var imageNumber2;
var imageNumber3;
var imageNumber4;
var imageWidth;
var prev, next;
var currentPostion = 0;
var currentImage = 0;


function init(){
	ul1 = document.getElementById('image_slider1');
	ul2 = document.getElementById('image_slider2');
	ul3 = document.getElementById('image_slider3');
	ul4 = document.getElementById('image_slider4');
	li_items1 = ul1.children;
	li_items2 = ul2.children;
	li_items3 = ul3.children;
	li_items4 = ul4.children;
	imageNumber1 = li_items1.length;
	imageNumber2 = li_items2.length;
	imageNumber3 = li_items3.length;
	imageNumber4 = li_items4.length;
	imageWidth = li_items1[0].children[0].clientWidth;
	ul1.style.width = parseInt(imageWidth * imageNumber1) + 'px';
	ul2.style.width = parseInt(imageWidth * imageNumber2) + 'px';
	ul3.style.width = parseInt(imageWidth * imageNumber3) + 'px';
	ul4.style.width = parseInt(imageWidth * imageNumber4) + 'px';
	prev = document.getElementById("prev");
	next = document.getElementById("next");
	//.onclike = slide(-1) will be fired when onload;
	/*
	prev.onclick = function(){slide(-1);};
	next.onclick = function(){slide(1);};*/
	prev.onclick = function(){ onClickPrev();};
	next.onclick = function(){ onClickNext();};
}

function animate(opts){
	var start = new Date;
	var id = setInterval(function(){
		var timePassed = new Date - start;
		var progress = timePassed / opts.duration;
		if (progress > 1){
			progress = 1;
		}
		var delta = opts.delta(progress);
		opts.step(delta);
		if (progress == 1){
			clearInterval(id);
			opts.callback();
		}
	}, opts.delay || 17);
	//return id;
}

function slideTo(imageToGo){
	var direction;
	var numOfImageToGo = Math.abs(imageToGo - currentImage);
	// slide toward left

	direction = currentImage > imageToGo ? 1 : -1;
	currentPostion = -1 * currentImage * imageWidth;
	var opts = {
		duration:250,
		delta:function(p){return p;},
		step:function(delta){
			ul1.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
			ul2.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
			ul3.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
			ul4.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
		},
		callback:function(){currentImage = imageToGo;}	
	};
	animate(opts);
}

function onClickPrev(){
	if (currentImage == 0){
		slideTo(imageNumber1 - 1);
		slideTo(imageNumber2 - 1);
		slideTo(imageNumber3 - 1);
		slideTo(imageNumber4 - 1);
	} 		
	else{
		slideTo(currentImage - 1);
		slideTo(currentImage - 1);
		slideTo(currentImage - 1);
		slideTo(currentImage - 1);
	}		
}

function onClickNext(){
	if (currentImage == imageNumber1 - 1){
		slideTo(0);
	}		
	else{
		slideTo(currentImage + 1);
	}
	if (currentImage == imageNumber2 - 1){
		slideTo(0);
	}		
	else{
		slideTo(currentImage + 1);
	}
	if (currentImage == imageNumber3 - 1){
		slideTo(0);
	}		
	else{
		slideTo(currentImage + 1);
	}
	if (currentImage == imageNumber4 - 1){
		slideTo(0);
	}		
	else{
		slideTo(currentImage + 1);
	}		
}

window.onload = init;

//map------------------------------------------------------------------

var map;
function initialize()
{
var mapProp = {
  center: new google.maps.LatLng(26.7, 87.6),
  zoom:5,

  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng);
  });
}

function placeMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  var infowindow = new google.maps.InfoWindow({
    content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
  });
  infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', initialize);

//search
var searchlocation=document.getElementById("searchLocation");

searchlocation.onclick=function(){

	var lat=prompt("Enter Latitude:","26.7");
	var lon=prompt("Enter Longitude:","88.1");
	
	var mapProp1 = {
  center: new google.maps.LatLng(lat,lon),
  zoom:5,

  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
	 	map1 = new google.maps.Map(document.getElementById("googleMap"),mapProp1);
		
		 google.maps.event.addListener(map1, 'click', function(event) {
    placeMarker(event.latLng);
 		 });
		 function placeMarker(location) {
  	   	 var marker1 = new google.maps.Marker({
   		 position: location,
    		map: map1,
 		 });
		var infowindow = new google.maps.InfoWindow({
    	content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
  		});
 		 infowindow.open(map1,marker1);
}		
}	
	   
   	