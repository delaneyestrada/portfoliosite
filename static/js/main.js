$(document).ready(function () {
    // Initialize MaterializeCSS components
    $(".scrollspy").scrollSpy({
        scrollOffset: 0,
        activeClass: "scrollspy-active",
    });

    // DARK MODE FUNCTIONALITY
    let mode = window.localStorage.getItem("data-theme");
    if (!mode) {
        window.localStorage.setItem("data-theme", $("body").attr("data-theme"));
    }
    $("body").attr("data-theme", mode);

    $(".toggle > input").on("click", () => {
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
