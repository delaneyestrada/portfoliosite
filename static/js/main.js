gsap.registerPlugin(MotionPathPlugin, TextPlugin, CSSRulePlugin);

let touch = null;
if ("ontouchstart" in document.documentElement){ touch = true } else { touch = false };

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
	if(touch){
		document.querySelector('#footer-media').style.visibility = "hidden";
		document.querySelector('#footer-social').style.display = "none";
		document.querySelectorAll('.dropdown-trigger').forEach(
			btn => btn.removeAttribute("data-target"));
	} else {
		document.querySelector('#footer-media').style.display = "none";
		document.querySelector('#footer-social').style.display = "block";
	}
	background = "musician"
	$('#nav-media-btn').addClass("active");
	
	// Variables
	let player,
	card  = document.querySelector( '.vcard' ),
	play  = document.querySelector( '.card-play' ),
	video = document.querySelector( '.card-video' );
	let query;
	let playlistMap = {"Kyle Park": "PLrev1ridNn9H-gvJjS9i3BaTfggPNOqQy", "Shotgun Rider": "PLrev1ridNn9FRFQmhnR3hZMRd2v0DS_FP", "Drum Covers": "PLrev1ridNn9HEpf8t_aunLFgKOp2Ek93C", "Church": "PLrev1ridNn9H2yL7khnDvqhONni2DxpQ6"}
	if (!touch){ 
		query = ".dropdown-content li" 
	} else { 
		query = ".media-btn";
		document.querySelectorAll('.dropdown-trigger').forEach(
			btn => btn.addEventListener('click', function() {
				document.querySelector('#footer-media').style.visibility = 'visible';
			})
		)
	};
		document.querySelectorAll(query).forEach(
			btn => btn.addEventListener('click', function() {
				let dropdownId = btn.parentNode.id;
				let n = dropdownId.indexOf('-');
				let containerId = dropdownId.substring(0, n != -1 ? n : dropdownId.length) + '-col';
				let btnContent = btn.innerText;
				let imageName = btnContent.replace(/\s+/g, '');
				let backgroundUrl = "/static/img/" + imageName + ".png";
				let container = document.querySelector('#' + containerId);
				container.style.display = "block";
				if (player && player.getPlayerState() == 1){
					player.pauseVideo();
				};

				if (dropdownId == "video-drop" || dropdownId == "video-btns"){
					container.previousElementSibling.style.display = "none";
					card.style.background = "#000 url('" + backgroundUrl + "') center center / cover";
					if (video.style.display == "block") {
						video.style.display = "none";
						card.classList.remove( 'video-is-open' );
					};
					video.firstChild.src = 'https://www.youtube.com/embed?listType=playlist&list=' + playlistMap[btnContent] +'&amp;enablejsapi=1&amp;html5=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;modestbranding=1&amp;controls=0"'
				} else if (dropdownId == "audio-drop" || dropdownId == "audio-btns"){
					container.nextElementSibling.style.display = "none";
				}
			}
		));


	// Shine effect
	card.onmousemove = function (e) {
	const x = e.pageX - card.offsetLeft;
	const y = e.pageY - card.offsetTop;

	card.style.setProperty( '--x', x + 'px' );
	card.style.setProperty( '--y', y + 'px' );
	}


	// Youtube API
	function onYouTubePlayerAPIReady() {
	player = new YT.Player('video', {
	events: {
	'onReady': onPlayerReady
	}
	});
	}


	// Player Ready
	function onPlayerReady(event) {
	play.addEventListener( 'click', function() {
	card.classList.add( 'video-is-open' );
	setTimeout(function() {
		video.style.display = 'block';
		player.playVideo();
	}, 500);
	});
	}


	// Inject YouTube API script
	var tag = document.createElement('script');
	tag.src = "//www.youtube.com/player_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


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
	if($(".dropdown-trigger")[0] && !touch){
		$(".dropdown-trigger").dropdown(
			{
				'hover': true,
				//'closeOnClick': true
			});
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