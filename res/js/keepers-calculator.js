function income(){
  var daysAux = document.getElementById('days');
  var hoursAux = document.getElementById('hours');

  var days = parseInt(daysAux.options[daysAux.selectedIndex].value);
  var hours = parseInt(hoursAux.options[hoursAux.selectedIndex].value);

  var income = (days * hours) * 74 * 4;

  income = income.toLocaleString()

  document.getElementById('income').innerHTML = "$" + income;

}
