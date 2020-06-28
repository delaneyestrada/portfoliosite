gsap.registerPlugin(MotionPathPlugin, TextPlugin, ScrollToPlugin, ScrollTrigger, CSSRulePlugin);


gsap.fromTo("#title", {opacity: 0}, {duration:2, opacity:1.0});

function hover(side) {
	sideElement = document.getElementById(side);
	console.log(side);
	console.log(sideElement);
	sideElement.addEventListener("mouseover", function(){
			gsap.to("#" + side, {duration: .5, border: "solid white"});
	});
	sideElement.addEventListener("mouseout", function(){
			gsap.to("#" + side, {duration: .5, border: "none"});
	});
};

hover("left-side");