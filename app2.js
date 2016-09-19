// JavaScript Document
var main = function(){
	'use strict';
	console.log("<<<<<RUNNING>>>>>");
	var relX;
	var relY;
	var xPos=[];
	var yPos=[];
	
	$('.picAdd').click(function(e) {
		console.log("<<<<<CLICKED>>>>>");
   		var Offset = $(this).offset();
   		relX = e.pageX - Offset.left;
   		relY = e.pageY - Offset.top;
		console.log("Center: ", relX, relY);
		xPos.push(relY-20);
		yPos.push(relX-20);
		
		var newDiv = "<div style='top:"+(relY-20)+"px; left:"+(relX-20)+"px;' class='difference'></div>";
		
		console.log(newDiv);
		$('.image1').append(newDiv);
		$('.image2').append(newDiv);
		
		$('.difference').css({
			'border': '2px solid #30AC59',
		});
	});
	
};

$(document).ready(main);
