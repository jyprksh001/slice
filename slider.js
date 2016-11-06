

$(document).ready(function(){

var images=[
	{
		img:"img/5.jpg",
		text:"Nicki is making me mad",
		timeout:3000,
		fadeIn:2500
	},
	{
		img:"img/2.jpg",
		text:"Nicki in black dress",
		timeout:5000,
		fadeIn:2000
	},
	{
		img:"img/3.jpg",
		text:"Smiling Nicki",
		timeout:4000,
		fadeIn:1500
	},
	{
		img:"img/4.jpg",
		text:"Nicki ain\'t happy",
		timeout:6000,
		fadeIn:200
	},
	{
		img:"img/1.jpg",
		text:"Drake ani\'t good ",
		timeout:1000,
		fadeIn:800
	}
]




	var mainElem=$('#slider');
	var currIndex=0
	$.each(images,function(i,val){
		if(i==0){
			mainElem.append('<li '+'id="'+'img'+i+'"><img src="'+images[i]["img"]+'" ></li>')	
		}else{
			mainElem.append('<li class="no-display"'+'id="'+'img'+i+'"><img src="'+images[i]["img"]+'" ></li>')	
		}
	})
	$("#image-text").text(images[currIndex]["text"])
	var changeImage=function(){
		if(currIndex==images.length-1){
			var  next="#img0"
		}else{
			var  next="#img"+(currIndex+1)
		}

		var  prev="#img"+currIndex
		$(next).fadeIn(images[currIndex]["fadeIn"]).show()
		$(prev).hide()
		if(currIndex==images.length-1){
			currIndex=0
		}else{
			currIndex++
		}
		$("#image-text").text(images[currIndex]["text"])
		hideButton()
		autoSlide()
	}

	var timeout;
	function autoSlide(){
	 timeout=setTimeout(changeImage,images[currIndex]["timeout"]);
	}
	autoSlide()
	function hideButton(){
		if(currIndex==0){
			$('#button1').prop('disabled', true);
		}else if(currIndex==images.length-1){
			$('#button2').prop('disabled', true);
		}else{
			$('#button1').prop('disabled', false);
			$('#button2').prop('disabled', false);
		}
	}
	hideButton()
	$('#button1').click(function(){
		clearTimeout(timeout);
		var  prev="#img"+(currIndex-1)
		var  curr="#img"+currIndex
		$(prev).show()
		$(curr).hide()
		$("#image-text").text(images[currIndex-1]["text"])
		currIndex--
		hideButton()
	})

	$('#button2').click(function(){
		clearTimeout(timeout);
		var  next="#img"+(currIndex+1)
		var  prev="#img"+currIndex
		$(next).show()
		$(prev).hide()
		$("#image-text").text(images[currIndex+1]["text"])
		currIndex++
		hideButton()
	})
})



