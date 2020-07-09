gsap.registerPlugin(MotionPathPlugin, TextPlugin, CSSRulePlugin);

if (window.location.pathname=='/' || window.location.pathname=='/developer') {
	var background = "index"
	/* gsap animations */
	gsap.fromTo("#title-container", {opacity: 0}, {duration:2, opacity:1.0});
	gsap.to("#music-selector", {duration:.5, boxShadow: "0px 0px 5px 5px white", repeat: -1, yoyo: "true"})
	gsap.to("#programmer-selector", {duration:.5, boxShadow: "0px 0px 5px 5px white", repeat: -1, yoyo: "true"})
	gsap.fromTo(".title-text", {textShadow: "5px 10px black"}, {duration: 6, textShadow: "5px 10px 10px black", repeat: -1, yoyo: "true"})

	var musician = document.getElementById("music-selector");
	var programmer = document.getElementById("programmer-selector");

	backgroundOnHover(musician, "id");
	backgroundOnHover(programmer, "id");
} else if(window.location.pathname=='/musician'){
	background = "musician"
	$('#nav-bio-btn').addClass("active");
	gsap.to(".animate-link", {duration: 2, textShadow: "1px 1px 5px #EF8354", repeat: -1, yoyo: "true"});
	$('.animate-link').each(function(){
		$(this).hover(function(){
		gsap.to(($(this)), {duration: .5, backgroundColor: "black"});
	},
	function() {
		
		gsap.to(($(this)), {duration: .5, backgroundColor: "transparent"});
	});
});
} else if(window.location.pathname=='/media'){
	background = "musician"
	$('#nav-media-btn').addClass("active");
}

/* load musician particle.js background */
if (background == "musician") {
	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', './static/assets/music-particles.json')
};
if (background == "index") {
	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', './static/assets/particles.json')
};

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
    for (i=0;i<elems.length;i++){
		M.Tooltip.getInstance(elems[i]).open();
	};
  });

$(document).ready(function(){
	if($(".dropdown-trigger")[0]){
		$(".dropdown-trigger").dropdown();
	};
	if($(".slider")[0]){
		$('.slider').slider();
	};
	if($(".collapsible")[0]){
		$('.collapsible').collapsible();
	};
	if($(".modal")[0]){
		$('.modal').modal();
	};
	if($(".sidenav")[0]){
		console.log("test");
		$('.sidenav').sidenav();
	};
	gsap.fromTo('.content', {opacity: 0}, {duration: .7, ease: "circ.in", opacity: 1});
});

function backgroundOnHover(element, type)  {
	if (type == "id"){
		var symbol = "#";
		var elementName = element.id
	} else if (type == "class"){
		var symbol = ".";
		var elementName = element.className;
	}
	element.addEventListener('mouseover', function() {
		gsap.to(symbol + elementName, {duration: 1, backgroundColor: "white", color: "black"});
	});
	element.addEventListener('mouseout', function() {
		gsap.to(symbol + elementName, {duration: 1, backgroundColor: "transparent", color: "hsla(180, 1%, 75%, 1)"});
	});
};