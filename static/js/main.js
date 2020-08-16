$(document).ready(function () {
  // Initialize MaterializeCSS components
  $('.scrollspy').scrollSpy({
    scrollOffset: 0,
    activeClass: 'scrollspy-active'
  });
  $('.fixed-action-btn').floatingActionButton({
    hoverEnabled: false
  });

  $(".toggle > input").on('click', () => {
    let mode = $('body').attr('data-theme');
    let modeAlternates = {
      dark: "light",
      light: "dark"
    }
    $('.toggle-container i').toggleClass('rotate');
    $('body').attr('data-theme', modeAlternates[mode]);
    let modeLabelText = modeAlternates[mode].charAt(0).toUpperCase() + modeAlternates[mode].slice(1)
    $('.mode').text(modeLabelText);
  })

  let sections = document.querySelectorAll('section')
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting == true) {
        entry.target.classList.add('fade-in')
      } else {
        entry.target.classList.remove('fade-in')
      }
    })
  })

  sections.forEach(section => {
    observer.observe(section)
  })
});