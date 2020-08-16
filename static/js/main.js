$(document).ready(function(){
  // Initialize MaterializeCSS components
  $('.scrollspy').scrollSpy({scrollOffset: 50, activeClass: 'scrollspy-active'});
  $('.fixed-action-btn').floatingActionButton({hoverEnabled: false});

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
    // if($('body').attr('data-theme') == "dark"){
    //   $('body').attr('data-theme', 'light');

    // } else {
    //   $('body').attr('data-theme', 'dark');
    // }
  })
});