$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  
  // Event listeners
});








// let touch = null;

// if ("ontouchstart" in document.documentElement) {
// 	touch = true
// } else {
// 	touch = false
// };

// 	if (window.location.pathname == '/' || window.location.pathname == '/developer') {
// 		var background = "index"
// 		/* gsap animations */
// 		gsap.fromTo("#title-container", {
// 			opacity: 0
// 		}, {
// 			duration: 2,
// 			opacity: 1.0
// 		});
// 		gsap.to("#music-selector", {
// 			duration: .5,
// 			boxShadow: "0px 0px 5px 5px white",
// 			repeat: -1,
// 			yoyo: "true"
// 		})
// 		gsap.to("#programmer-selector", {
// 			duration: .5,
// 			boxShadow: "0px 0px 5px 5px white",
// 			repeat: -1,
// 			yoyo: "true"
// 		})
// 		gsap.fromTo(".title-text", {
// 			textShadow: "5px 10px black"
// 		}, {
// 			duration: 6,
// 			textShadow: "5px 10px 10px black",
// 			repeat: -1,
// 			yoyo: "true"
// 		})

// 		var musician = document.getElementById("music-selector");
// 		var programmer = document.getElementById("programmer-selector");

// 		backgroundOnHover(musician, "id");
// 		backgroundOnHover(programmer, "id");
// 	} else if (window.location.pathname == '/musician') {
// 		let mobileCurrentPageLink = document.querySelector(".sidenav > li > a[href='./musician']");
// 		mobileCurrentPageLink.style.backgroundColor = 'rgba(0,0,0,0.05)';
		
// 		background = "musician"
// 		document.querySelector('#nav-bio-btn').classList.add("active");
		
// 		gsap.to(".animate-link", {
// 			duration: 2,
// 			textShadow: "1px 1px 5px #EF8354",
// 			repeat: -1,
// 			yoyo: "true"
// 		});
// 		document.querySelectorAll('.animate-link').forEach(link => {
// 			link.addEventListener('mouseover', function () {
// 					gsap.to(this, {
// 						duration: .5,
// 						backgroundColor: "black",
// 					});
// 				}),
// 				link.addEventListener('mouseout', function () {
// 					gsap.to(this, {
// 						duration: .5,
// 						backgroundColor: "transparent",
// 					});
// 				})
// 		});
// 	} else if (window.location.pathname == '/media') {


// 		background = "musician"
// 		document.querySelector('#nav-media-btn').classList.add("active");
// 		let mobileCurrentPageLink = document.querySelector(".sidenav > li > a[href='./media']");
// 		mobileCurrentPageLink.style.backgroundColor = 'rgba(0,0,0,0.05)';
		

		
// 		// Variables
// 		let player,
// 			card = document.querySelector('.vcard'),
// 			play = document.querySelector('.card-play'),
// 			video = document.querySelector('.card-video');
// 		let query;
// 		let playlistMap = {
// 			"Kyle Park": "PLrev1ridNn9H-gvJjS9i3BaTfggPNOqQy",
// 			"Shotgun Rider": "PLrev1ridNn9FRFQmhnR3hZMRd2v0DS_FP",
// 			"Drum Covers": "PLrev1ridNn9HEpf8t_aunLFgKOp2Ek93C",
// 			"Church": "PLrev1ridNn9H2yL7khnDvqhONni2DxpQ6"
// 		}
// 		if (!touch) {
// 			query = ".dropdown-content li";
// 			document.querySelector('#footer-social').style.display = "block";
// 		} else {
// 			function getFooterSelector(btn) {
// 				let dropdownId = btn.id;
// 				let n = dropdownId.indexOf('-');
// 				let footerSelect = '.' + dropdownId.substring(0, n != -1 ? n : dropdownId.length) + '-footer';

// 				return footerSelect;
// 			}
// 			document.querySelector('#footer-social').style.display = "none";
// 			query = "#audio-btns > .media-btn";
// 			let dropElems = document.querySelectorAll('#media-selectors > .dropdown-trigger');
// 			for (i = 0; i < dropElems.length; i++) {
// 				let btn = dropElems[i];
// 				let altBtn = dropElems[(i + 1) % (dropElems.length)];
// 				btn.addEventListener('click', function () {
// 					let footerSelect = getFooterSelector(btn);
// 					let altFooterSelect = getFooterSelector(altBtn);
// 					gsap.fromTo(footerSelect, {
// 						opacity: 1,
// 						y: '15vw'
// 					}, {
// 						duration: 1.2,
// 						display: "block",
// 						ease: "elastic.out(.8, 0.4)",
// 						opacity: 1,
// 						y: '0'
// 					});
// 					gsap.to(altFooterSelect, {
// 						duration: .2,
// 						opacity: 0,
// 						y: '0',
// 						display: "none"
// 					});
// 				})
// 			}
// 		};
// 		/*document.querySelectorAll(query).forEach(
// 			btn =>*/
// 		let btnElems = document.querySelectorAll(query);
// 		for (i = 0; i < btnElems.length; i++) {
// 			let btn = btnElems[i];
// 			btn.addEventListener('click', function () {
// 				let dropdownId = btn.parentNode.id;
// 				console.log(dropdownId)
// 				let n = dropdownId.indexOf('-');
// 				let containerId = dropdownId.substring(0, n != -1 ? n : dropdownId.length) + '-col';
// 				let btnContent = btn.innerText;
// 				let imageName = btnContent.replace(/\s+/g, '');
// 				let backgroundUrl = "/static/img/" + imageName + ".png";
// 				let container = document.querySelector('#' + containerId);
// 				container.style.display = "block";
// 				if (player && player.getPlayerState() == 1) {
// 					player.pauseVideo();
// 				};

// 				if (dropdownId == "video-drop" || dropdownId == "video-btns") {
// 					container.previousElementSibling.style.display = "none";
// 					console.log('test')
// 					card.style.background = "#000 url('" + backgroundUrl + "') center center / cover";
// 					if (video.style.display == "block") {
// 						video.style.display = "none";
// 						card.classList.remove('video-is-open');
// 					};
// 					video.firstChild.src = 'https://www.youtube.com/embed?listType=playlist&list=' + playlistMap[btnContent] + '&amp;enablejsapi=1&amp;html5=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;modestbranding=1&amp;controls=0"'
// 				} else if (dropdownId == "audio-drop" || dropdownId == "audio-btns") {
// 					studioContent = document.querySelector("#studio-content");
// 					originalContent = document.querySelector("#original-content")
					
// 					container.nextElementSibling.style.display = "none";
// 					if (btn.style.display == "none"){
// 						btn.style.diplay = "block";
// 						console.log(test)
// 					};
// 					if (btnContent == "Studio Work") {
// 						originalContent.style.display = "none";
// 						studioContent.style.display = "block";
// 					} else if (btnContent == "Original Music") {
// 						studioContent.style.display = "none";
// 						originalContent.style.display = "block"
// 					};
// 				}
// 			})
// 		};


// 		// Shine effect
// 		card.onmousemove = function (e) {
// 			const x = e.pageX - card.offsetLeft;
// 			const y = e.pageY - card.offsetTop;

// 			card.style.setProperty('--x', x + 'px');
// 			card.style.setProperty('--y', y + 'px');
// 		}


// 		// Youtube API
// 		function onYouTubePlayerAPIReady() {
// 			player = new YT.Player('video', {
// 				events: {
// 					'onReady': onPlayerReady
// 				}
// 			});
// 		}


// 		// Player Ready
// 		function onPlayerReady(event) {
// 			play.addEventListener('click', function () {
// 				card.classList.add('video-is-open');
// 				setTimeout(function () {
// 					video.style.display = 'block';
// 					player.playVideo();
// 				}, 500);
// 			});
// 		}


// 		// Inject YouTube API script
// 		var tag = document.createElement('script');
// 		tag.src = "//www.youtube.com/player_api";
// 		var firstScriptTag = document.getElementsByTagName('script')[0];
// 		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// 	}

// 	/* load musician particle.js background */
// 	if (background == "musician") {
// 		/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// 		particlesJS.load('particles-js', './static/assets/music-particles.json')
// 	};
// 	if (background == "index") {
// 		/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// 		particlesJS.load('particles-js', './static/assets/particles.json')
// 	};

// 	document.addEventListener('DOMContentLoaded', function () {
// 		var elems = document.querySelectorAll('.tooltipped');
// 		var instances = M.Tooltip.init(elems);
// 		for (i = 0; i < elems.length; i++) {
// 			M.Tooltip.getInstance(elems[i]).open();
// 		};
// 	});

// 	/* LIST OF MATERIALIZE COMPONENTS NEEDING INITIALIZATION */
// 	let mComponents = [
// 		['.dropdown-trigger', {
// 			'hover': true
// 		}],
// 		['.slider', {
// 			'duration': 1000
// 		}]
// 	];


// 	M.AutoInit();
// 	for (i = 0; i < mComponents.length; i++) {
// 		let elName = mComponents[i][0];
// 		let options = mComponents[i][1];
// 		let elems;

// 		if (!!(elems = document.querySelectorAll(elName)) == true) {
// 			if (elName == '.dropdown-trigger' && !touch) {
// 				var instances = M.Dropdown.init(elems, options);
// 			}
// 			if (elName == '.slider') {
// 				var instances = M.Slider.init(elems, options);
// 			}
// 		}
// 	}
// 	gsap.fromTo('.content', {
// 		opacity: 0
// 	}, {
// 		duration: .7,
// 		ease: "circ.in",
// 		opacity: 1
// 	});


// 	function backgroundOnHover(element, type) {
// 		if (type == "id") {
// 			var symbol = "#";
// 			var elementName = element.id
// 		} else if (type == "class") {
// 			var symbol = ".";
// 			var elementName = element.className;
// 		}
// 		element.addEventListener('mouseover', function () {
// 			gsap.to(symbol + elementName, {
// 				duration: 1,
// 				backgroundColor: "white",
// 				color: "black"
// 			});
// 		});
// 		element.addEventListener('mouseout', function () {
// 			gsap.to(symbol + elementName, {
// 				duration: 1,
// 				backgroundColor: "transparent",
// 				color: "hsla(180, 1%, 75%, 1)"
// 			});
// 		});
// 	};