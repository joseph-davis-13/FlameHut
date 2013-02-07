var imgnum = 0;
var imgsrc = ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg", "img/image4.jpg", "img/image5.jpg"];

$(document).ready(function() {
	var imageChange = function() {
		if(imgnum == 4) {
			imgnum = 0;

			$("#imgviewer").animate({
				  	opacity: "0",
				    left: "900px",
				}, 1, function() {
				    $("#imgviewer").attr("src", "" +imgsrc[imgnum])
			}); 

			$("#imgviewer").animate({
				  	opacity: "1",
				    left: "0px",
				}, 1000, function() {
			}); 
		} else {
			imgnum++;
			$("#imgviewer").animate({
				  	opacity: "0",
				    left: "900px",
				}, 1, function() {
				    $("#imgviewer").attr("src", "" +imgsrc[imgnum])
			});  

			$("#imgviewer").animate({
				  	opacity: "1",
				    left: "0px",
				}, 1000, function() {
			}); 

			$("#imgviewer").animate({
				    left: "0px",
				}, 5000, function() {
			}); 

			$("#imgviewer").animate({
				  	opacity: "0",
				    left: "-900px",
				}, 1000, function() {
				    $("#imgviewer").attr("src", "" +imgsrc[imgnum])
			}); 
		}
	};
	setInterval(imageChange, 5000)
});
