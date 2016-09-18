// JavaScript Document
var main = function(){
	"use strict";
	
	var x =[0, 50, 100, 150, 200, 250];
	var y =[0, 50, 100, 150, 200, 250];
	
	var status = "Find all " +x.length+ " of the differences.";
	$('.statusInitial').text(status);
	$('.statusInitial').css({
			'padding':'26px',
	});

	
	for (var i = 0; i< x.length; i++){
		var Xpos = x[i] +"px";
		var Ypos = y[i] +"px";
		console.log(Xpos, Ypos);
		var newDiv = "<div style='top:"+Xpos+"; left:"+Ypos+";' class='difference "+i+"'></div>";
		console.log(newDiv);
		$('.image1').append(newDiv);
		$('.image2').append(newDiv);
	}
	
	var found = [];
	var count = 0;
	var difNum="";
	
	var check = function(){
			
		console.log("<<<1>>>");
		var clicked = 0;
		for (var i = 0; i<found.length+1; i++){
			console.log("<<<2>>>");
			console.log("I: "+i);
			console.log("FOUND LENGTH: ", found.length+1);
			console.log("FOUND I: ", found[i]);
			console.log("DifNUm: ", difNum);
			
			if(found[i]===difNum){
				console.log("Already Clicked");
				clicked = 1;
				$('.statusInitial').text(x.length- found.length+ " more remaining");
				if (x.length - found.length === 0){
					$('.statusInitial').text("You found all of the differences!");
					$('.next').addClass('active');
				}
				
			}
		}
		if (clicked === 0){
			found.push(difNum);
			console.log(difNum+ " added to array.");
			count++;
			console.log("count: "+count);
			$('.statusInitial').text(x.length- found.length+ " more remaining");
			
			if (x.length - found.length === 0){
				$('.statusInitial').text("You found all of the differences!");
				$('.next').addClass('active');
			}
		}
	};
	
	$('.difference').click(function() {
		$('.statusInitial').css({
			'padding':'26px',
			'background-color': '#30AC59'
			});
		difNum = "."+$(this).attr('class').split(' ')[1];
		console.log("Difference Number "+ difNum);
		$(difNum).css({
			'border': '2px solid #30AC59',
		});
		check();
	});
	
	$('.pic').click(function() {
    	$('.statusInitial').text('Incorrect');
		$('.statusInitial').css({
			'padding':'26px',
			'background-color': '#FF4D4D'
		});
		
		if (x.length - found.length === 0){
			$('.statusInitial').text("You found all of the differences!");
			$('.next').addClass('active');
			$('.statusInitial').css('background-color', '#30AC59');
		}
	});
	
};

$(document).ready(main);