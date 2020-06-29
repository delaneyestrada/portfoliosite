gsap.registerPlugin(MotionPathPlugin, TextPlugin, CSSRulePlugin);

if (window.location.pathname=='/') {
	gsap.fromTo("#title-container", {opacity: 0}, {duration:2, opacity:1.0});
	gsap.to("#music-selector", {duration:.5, boxShadow: "0px 0px 5px 5px black", repeat: -1, yoyo: "true"})
	gsap.to("#programmer-selector", {duration:.5, boxShadow: "0px 0px 5px 5px black", repeat: -1, yoyo: "true"})
	gsap.fromTo(".title-text", {textShadow: "5px 10px black"}, {duration: 6, textShadow: "5px 10px 10px black", repeat: -1, yoyo: "true"})

	musician = document.getElementById("music-selector");
	programmer = document.getElementById("programmer-selector");

	function backgroundOnHover(element)  {
		element.addEventListener('mouseover', function() {
			gsap.to("#" + element.id, {duration: 1, backgroundColor: "black"});
		});
		element.addEventListener('mouseout', function() {
			gsap.to("#" + element.id, {duration: 1, backgroundColor: "transparent"});
		});
	};

	backgroundOnHover(musician);
	backgroundOnHover(programmer);
}

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
	if($(".carousel")[0]){
		$('.carousel').carousel({ dist: -50, numVisible: 4 });
	};
});


