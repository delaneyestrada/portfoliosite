$(document).ready(function () {
    // Initialize MaterializeCSS components
    $(".scrollspy").scrollSpy({
        scrollOffset: 0,
        activeClass: "scrollspy-active",
    });

    // DARK MODE FUNCTIONALITY

    if (!window.localStorage.getItem("data-theme")) {
        window.localStorage.setItem("data-theme", $("body").attr("data-theme"));
    }
    let mode = window.localStorage.getItem("data-theme");
    $("body").attr("data-theme", mode);

    $(".toggle > input").on("click", () => {
        mode = window.localStorage.getItem("data-theme");
        let modeAlternates = {
            dark: "light",
            light: "dark",
        };
        $("body").attr("data-theme", modeAlternates[mode]);
        let modeLabelText =
            modeAlternates[mode].charAt(0).toUpperCase() +
            modeAlternates[mode].slice(1);
        $(".mode").text(modeLabelText);
        window.localStorage.setItem("data-theme", modeAlternates[mode]);
    });

    $("#contact-submit").on("submit", (e) => {
        var response = grecaptcha.getResponse();
        console.log(response.length)
        $('#contact-submit').submit(function (event) {
            if (response.length == 0) {
                event.preventDevault();
                alert('Please validate with the reCAPTCHA')
            }
        })
    })

    // let sections = document.querySelectorAll('section')
    // let observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting == true) {
    //       entry.target.classList.add('fade-in')
    //     } else {
    //       entry.target.classList.remove('fade-in')
    //     }
    //   })
    // })

    // sections.forEach(section => {
    //   observer.observe(section)
    // })
});