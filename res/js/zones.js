function sort(){
  var zonesCDMX = [];
  var zonesGDL = [];
  var zonesEMX = [];

  for (var i = 0; i < zones.length; i++) {
    if (zones[i].city == "CDMX" && zones[i].status == "ON") {
      zonesCDMX.push(zones[i].name);
    } else if (zones[i].city == "GDL" && zones[i].status == "ON") {
      zonesGDL.push(zones[i].name);
    } else if(zones[i].city == "EMX" && zones[i].status == "ON"){
      zonesEMX.push(zones[i].name);
    }
  }

  zonesCDMX = zonesCDMX.sort();
  zonesGDL = zonesGDL.sort();

  build("Ciudad de México", zonesCDMX);
  build("Estado de México", zonesEMX);
  build("Guadalajara", zonesGDL);
}

function build(city, array){
  var contentColumn = "<div class='row'> <div class='col-md-12'> <h2 class='font-black' style='width: 100%'>" + city + "</h2> </div> </div>";

  var columnSize = parseInt(array.length / 3);
  var columnCount = 0;

  contentColumn += "<div class='row' style='margin-bottom: 66px;'>";

  for (var i = 0; i < array.length; i++) {
    if (columnCount == 0) {
      contentColumn += "<div class='col-md-4'>" + array[i] + "<br>";
      columnCount = columnCount + 1;
    } else if(columnCount < columnSize){
      contentColumn += array[i] + "<br>";
      columnCount = columnCount + 1;
    } else {
      contentColumn += "</div>";
      columnCount = 0;
    }
  }

  contentColumn += "</div>"

  document.getElementById('cities').innerHTML += contentColumn;
}
