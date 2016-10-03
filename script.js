var button = document.querySelectorAll(".post__info--permalink");

for (var i = 0; i < a.length; i++){
	button[i].addEventListener("click", function(){
    var element = this.parentElement.querySelector(".post__info-block");
    element.classList.toggle("post__info-block--show");
	});
}
