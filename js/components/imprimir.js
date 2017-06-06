'use strict';

const stationItem = (data) => {
    const parent = $("<div class='station'></div>");
    const row = $("<div class='row'>")
    const col = $("<div class='col s12'>")
    const nombre = $("<h4>"+ data.name +"</h4>");
    const direccion = $("<p>"+ data.address +"</p>");
    const distrito = $("<p>"+ data.district +"</p>");
    const iconmap = $("<span><i class='fa fa-map'></i></span>");
    
    row.append(col);
    col.append(nombre);
    col.append(direccion);
    col.append(distrito);
    col.append(iconmap);
    parent.append(row);
    
    return parent;
}

const Station = () => {
    const stationContainer = $('<div class="station-container"></div>');
    state.stations.forEach((data)=>{
        stationContainer.append(stationItem(data));
    });
    
    return stationContainer;
}