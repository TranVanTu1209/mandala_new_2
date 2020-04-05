var minus = document.querySelectorAll('#amount-choice .form-group .minus-amount');
var plus = document.querySelectorAll('#amount-choice .form-group .plus-amount');
var amount = document.querySelectorAll('#amount-choice .form-group input[type="number"]');
var amounts = [amount[0].value, amount[1].value, amount[2].value];
minus.forEach((current, index) => {
  current.addEventListener('click', function () {
    amount[index].value--;
    if (amount[index].value == -1)
    {
      amount[index].value = 0;
    }

  });
});
plus.forEach((current, index) => {
  current.addEventListener('click', function () {

    amount[index].value++;
  });
})