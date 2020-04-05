var btnEmail = $('.sign-up .choice-sign-in .sign-mail');
var btnPhone = $('.sign-up .choice-sign-in .sign-phone');
var formPhone = $('.sign-up .choice-sign-in form.form-phone');
var formEmail = $('.sign-up .choice-sign-in form.form-email');
console.log(btnEmail);
console.log(btnPhone);
btnEmail.click((e) => {
  btnPhone.removeClass('active');
  formPhone.addClass('d-none');
  btnEmail.addClass('active');
  formEmail.removeClass('d-none');
});
btnPhone.click((e) => {
  btnPhone.addClass('active');
  formPhone.removeClass('d-none');
  btnEmail.removeClass('active');
  formEmail.addClass('d-none');
});