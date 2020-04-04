//Slideshow

let slideIndex = 0;

const showSlides = () => {
	const slides = document.getElementsByClassName("slide");
	
	for(let i = 0; i < slides.length; i++){
	slides[i].style.display = "none";
	}
	
	slideIndex++;
	
	if(slideIndex > slides.length){
	slideIndex = 1;
	}
		
	slides[slideIndex - 1].style.display = "block";
	setTimeout(showSlides,3000);
};

showSlides();

//Smooth Scrolling

function smoothScroll(target,duration){
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;
	
	function animation(currentTime){
	if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0,run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}
	
	function ease(t, b, c, d){
		t /= d/2;
		if (t<1) return c/2*t*t+b;
		t--;
		return -c/2*(t*(t-2)-1);
	}
	
	requestAnimationFrame(animation);
	
}

	var inside = document.querySelector('.inside1');

	inside.addEventListener('click',function(){
		smoothScroll('.inside',1000);
	});

	var about = document.querySelector('.about1');

	about.addEventListener('click',function(){
		smoothScroll('.about',1200);
	});
	
	var contact = document.querySelector('.footer1');

	contact.addEventListener('click',function(){
		smoothScroll('.footer',1400);
	});

	var reviews = document.querySelector('.reviews1');

	reviews.addEventListener('click',function(){
		smoothScroll('.reviews',1500);
	});


//Sticky Nav

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Open Close

var myVar = setInterval(renderTime, 1000);

function renderTime() {
  var d = new Date();
  if(d.getHours() >= 10 && d.getHours() < 22) {
		document.getElementById("banner").innerHTML = "Open";
		document.getElementById("banner").className = "open";
	  	document.getElementById("banner").setAttribute("data-text", "Open"); 
		
	}
	else {
		document.getElementById("banner").innerHTML = "Closed";
		document.getElementById("banner").className = "close1";
		document.getElementById("banner").setAttribute("data-text", "Closed"); 
	}
}