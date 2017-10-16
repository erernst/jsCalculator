var num1=0;
var op;
var num2;
$('.number').click(function(ev) {

  var num = $('#display').text();
  $('#display').text(num + $(this).text());
})



$('.operator').click(function(ev) {
  var sw = $(this).text();
  if (sw === 'C'){
    clearDisplay();
  }
  else if(sw === '+/-'){

    $('#display').text(0-$('#display').text());}
  else if(sw === '='){
    num2 =$('#display').text();
    console.log(equals)
    var ans = operate();
    $('#display').text(ans);
    num1 =0;
    op = null;
    num2 =0;
  }
  else {
    num1 = $('#display').text();
    clearDisplay();
    op = sw;
  }

});

function clearDisplay() {
  $('#display').text('');
}

function operate(){
  num1= parseInt(num1);
  num2= parseInt(num2);
  switch (op) {
    case 'X':
    return num1*num2;
    case '-':
    return num1-num2;
    case '+':
    return num1+num2;
    case '/':
    return num1/num2;
    case '%':
    return num1%num2;
    default:
    break;

  }
}
