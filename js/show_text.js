// show text
var btnShowText = $('#experience-travel .description .text-description .show-text');
var btnHideText = $('#experience-travel .description .text-description .hide-text');
var textHidden = $('#experience-travel .description .text-description .hidden-text');
btnShowText.on('click', (e) => {
  btnHideText.removeClass('d-none');
  textHidden.css('display', 'block');
  textHidden.css('transform', 'scale(1)');
});
btnHideText.on('click', (e) => {
  textHidden.css('display', 'none');
  btnHideText.addClass('d-none');
});

// fly heart
$('#hotel-search-result .hotel-info .push-heart').on('click', (e) => {
  $('#hotel-search-result .hotel-info .push-heart i').toggleClass('text-red');
  $('#hotel-search-result .hotel-info .fly-heart').toggleClass('fly');
});