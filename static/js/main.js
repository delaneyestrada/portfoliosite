gsap.registerPlugin(MotionPathPlugin, TextPlugin, CSSRulePlugin);


gsap.fromTo("#title-container", {opacity: 0}, {duration:2, opacity:1.0});
gsap.to("#music-selector", {duration:.5, boxShadow: "0px 0px 5px 5px black", repeat: -1, yoyo: "true"})
gsap.to("#programmer-selector", {duration:.5, boxShadow: "0px 0px 5px 5px black", repeat: -1, yoyo: "true"})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
    for (i=0;i<elems.length;i++){
	M.Tooltip.getInstance(elems[i]).open();
}
  });


