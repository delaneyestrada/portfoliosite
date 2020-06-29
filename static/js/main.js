gsap.registerPlugin(MotionPathPlugin, TextPlugin, CSSRulePlugin);

if (window.location.pathname=='/') {
	gsap.fromTo("#title-container", {opacity: 0}, {duration:2, opacity:1.0});
	gsap.to("#music-selector", {duration:.5, boxShadow: "0px 0px 5px 5px black", repeat: -1, yoyo: "true"})
	gsap.to("#programmer-selector", {duration:.5, boxShadow: "0px 0px 5px 5px black", repeat: -1, yoyo: "true"})
	gsap.fromTo(".title-text", {textShadow: "5px 10px black"}, {duration: 6, textShadow: "5px 10px 10px black", repeat: -1, yoyo: "true"})

	var musician = document.getElementById("music-selector");
	var programmer = document.getElementById("programmer-selector");

	backgroundOnHover(musician, "id");
	backgroundOnHover(programmer, "id");
} else if(window.location.pathname=='/musician'){
	$('.animate-link').each(function(){
		$(this).hover(function(){
		gsap.to(($(this)), {duration: .5, backgroundColor: "black"});
	},
	function() {
		
		gsap.to(($(this)), {duration: .5, backgroundColor: "transparent"});
	});
	gsap.to(".animate-link", {duration: 2, textShadow: "2px 2px 3px hsla(229, 32%, 26%, 1)", repeat: -1, yoyo: "true"});
});
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
		gsap.to(symbol + elementName, {duration: 1, backgroundColor: "black"});
	});
	element.addEventListener('mouseout', function() {
		gsap.to(symbol + elementName, {duration: 1, backgroundColor: "transparent"});
	});
};