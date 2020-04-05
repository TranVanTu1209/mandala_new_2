var extraBedChoices = document.querySelectorAll('#money-hotels .money-select input[type="radio"]');
console.log(extraBedChoices);
$(document).ready(function () {
  extraBedChoices[0].addEventListener('click', function () {
    console.log('click');
    $('#money-hotels .mony-bed').removeClass('d-none');
  });
  extraBedChoices[1].addEventListener('click', function () {
    console.log('click');
    $('#money-hotels .mony-bed').addClass('d-none');
  });
});

