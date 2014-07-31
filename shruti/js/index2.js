//pinterest api--------------------------------------------------------
var bigbox=document.getElementById('pinterestContent');
var pic=document.getElementById('picture');
var list = document.createElement("ul");
var div2= document.createElement("div");
var div3= document.createElement("div");
var div4= document.createElement("div");
var div5= document.createElement("div");

div2.style.position="absolute";
bigbox.style.position="relative";
div2.style.left="500px";
div2.style.top="50px";
div2.style.width="300px";
div2.style.height="300px";
div2.style.overflow="hidden";

div3.style.position="absolute";
div4.style.position="absolute";
div5.style.position="absolute";

div3.style.left="500px";
div3.style.top="400px";
div3.style.color="#979797";

div4.style.color="#979797";
div4.style.left="500px";
div4.style.top="430px";

div5.style.color="#979797";
div5.style.left="500px";
div5.style.top="460px";

var xhr = new XMLHttpRequest;
	xhr.open('get','https://api.pinterest.com/v3/pidgets/boards/highquality/travel/pins');
	
	xhr.onloadend = function () 
  {
  		sss = (eval('('+xhr.responseText+')'));
  		 //console.log(sss.data.pins[0].description);
		 
	
		 for (var i=0;i<sss.data.pins.length-30;i++){
		
		 var items = document.createElement("li");
		 items.innerHTML+=sss.data.pins[i].description;
		 list.appendChild(items);
		 bigbox.appendChild(list);
		 
		 
		  var detail=document.createElement("button");
		 detail.innerHTML="View Pic";
		 detail.setAttribute("index",i);
		 
		 items.appendChild(detail);
		
		  detail.onclick=function()
		 {
		 	div2.innerHTML="";
		 	var indexdetail=this.getAttribute("index");
			
			var pimage=sss.data.pins[indexdetail].images["237x"].url;
			var repin=sss.data.pins[indexdetail].repin_count;
			var like=sss.data.pins[indexdetail].like_count;
			var imagelink=sss.data.pins[indexdetail].link;
			
				 {
		 		
					 div2.innerHTML="<img src='"+pimage+"'/>";
					 div3.innerHTML="Repin-"+repin;
					 div4.innerHTML="Like-"+like;
					 div5.innerHTML="Link-"+imagelink;
				
				 }
					
		 		bigbox.appendChild(div2);
				bigbox.appendChild(div3);
				bigbox.appendChild(div4);
				bigbox.appendChild(div5);
			
		 }
		 }
		 
		 
  }
  xhr.send();