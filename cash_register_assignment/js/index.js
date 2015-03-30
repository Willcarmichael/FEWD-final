var total = 0;
$('#entry').submit(enter);

function enter(event) {
  event.preventDefault();
  var entry = $('#newEntry').val();
  entry = parseFloat(entry);

  //event.preventDefault(); is used to prevent the process occuring again. 

  // var formattedEntry = currencyFormat(entry);
  // $('#entries').append('<tr><td></td><td>' + formattedEntry  + '</td></tr>')

  // Two commented out lines above can be refactored nicely like this:
  $('#entries').append('<tr><td></td><td>' + currencyFormat(entry) + '</td></tr>')

  total += entry;

  // var formattedTotal = currencyFormat(total);
  // $('#total').html(formattedTotal);

  // Two commented out lines above can be refactored nicely like this:
  $('#total').html(currencyFormat(total));

  $('#newEntry').val('');
}

function currencyFormat(number) {
  var currency = number.toFixed(2);
  currency = '$' + currency;
  return currency;
}


// CHALLENGE FOR WEDNESDAY: refactor this file further, especially the currencyFormat function.
// SECOND CHALLENGE: how could you add some animation so that every time a new entry is added 
// (ie: a new total is calculated ), the total fades in?