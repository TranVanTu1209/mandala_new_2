// confirm change name
var submitHotelName = $('section.vendor-my-hotel-detail main .main-hotel-info .name-hotel #change-hotel-name input[type="submit"]');
var nameHotelInput = $('section.vendor-my-hotel-detail main .main-hotel-info .name-hotel #change-hotel-name input#name-hotel');

submitHotelName.click((e) => {
  if (nameHotelInput.val() !== '')
  {
    $('section.vendor-my-hotel-detail main .main-hotel-info .name-hotel #confirm-change-name').modal('show');
    $('section.vendor-my-hotel-detail main .main-hotel-info .name-hotel #change-hotel-name').modal('hide');

  } else
  {
    alert('Vui lòng điền vào tên trước khi thay đổi');
  }
  e.preventDefault();
});

// confirm change address
var submitHotelAddress = $('section.vendor-my-hotel-detail main .main-hotel-info .address-hotel #change-hotel-address input[type="submit"]');
var addressHotelInput = $('section.vendor-my-hotel-detail main .main-hotel-info .address-hotel #change-hotel-address input#address-hotel');

submitHotelAddress.click((e) => {
  if (addressHotelInput.val() !== '')
  {
    $('section.vendor-my-hotel-detail main .main-hotel-info .address-hotel #confirm-change-address').modal('show');
    $('section.vendor-my-hotel-detail main .main-hotel-info .address-hotel #change-hotel-address').modal('hide');
  } else
  {
    alert('Vui lòng điền vào địa chỉ trước khi thay đổi');
  }
  e.preventDefault();
});