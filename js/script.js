var button = document.querySelectorAll(".post__info--permalink");

for (var i = 0; i < button.length; i++){
	button[i].addEventListener("click", function(){
    var element = this.parentElement.querySelector(".post__info-block");
    element.classList.toggle("post__info-block--show");
	});
}

var close = document.querySelectorAll(".share__close");

var popup = document.querySelector(".share");
for (var i = 0; i < close.length; i++){
	close[i].addEventListener("click", function(){
    popup.classList.remove("share--show");
	});
}

var closer = document.querySelectorAll(".download__close");

var header = document.querySelector(".header");

var download = document.querySelector(".download--android");
for (var i = 0; i < closer.length; i++){
	closer[i].addEventListener("click", function(){
    download.classList.remove("download--show");
    header.style.margin="0 0 0 0";
	});
}

var closing = document.querySelectorAll(".download__close");

var header = document.querySelector(".header");

var downloadApp = document.querySelector(".download--apple");
for (var i = 0; i < closing.length; i++){
	closing[i].addEventListener("click", function(){
    downloadApp.classList.remove("download--show");
    header.style.margin="0 0 0 0";
	});
}






