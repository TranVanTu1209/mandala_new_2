var starChoiceBtn = $('#showcase #star-tab');
starChoiceBtn.fadeOut();
$('#showcase .room-type-form button#star').on('click', (e) => {
  starChoiceBtn.fadeToggle();
  e.preventDefault();
});

$('#showcase .hide-star').on('click', (e) => {
  starChoiceBtn.fadeOut();
});

// notification
var textNotification = $('#showcase .search-result-notification p');
var submitResultBtn = $('#showcase button[type="submit"]');
submitResultBtn.on('click', (e) => {
  textNotification.removeClass('d-none');
  e.preventDefault();
});