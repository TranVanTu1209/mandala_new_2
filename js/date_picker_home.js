// date picker
$(function () {
  $('input[name="daterange"]').daterangepicker(
    {
      opens: "center"
    },
    function (start, end, label) {
      console.log(
        "A new date selection was made: " +
        start.format("YYYY-MM-DD") +
        " to " +
        end.format("YYYY-MM-DD")
      );
    }
  );
});
// change text btn
$(document).ready(function () {

  $('.daterangepicker .drp-buttons .cancelBtn').html('Hủy');
  $('.daterangepicker .drp-buttons .applyBtn').html('Áp dụng');
});

