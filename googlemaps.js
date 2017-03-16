function hentData(data) {
    console.log("hent data: ");
    console.table(data);
    data.punkt.forEach(DataErHentet);

}

function DataErHentet(data) {
    console.log("dataerhentet");

    console.log(data);
    var marker = new google.maps.Marker({
        position: data.position,
        map: map,
        title: data.overskrift,
        icon: data.image


    });

    var infowindow = new google.maps.InfoWindow({
        content: "don't care",
        position: data.position

    });

    marker.addListener('click', function () {
        var klon = document.querySelector('#infotemplate').content.cloneNode("true");
        map.setZoom(20);
        map.setCenter(marker.getPosition());
        klon.querySelector(".data_overskrift").textContent = data.overskrift;
        klon.querySelector(".data_beskrivelse").textContent = data.beskrivelse;
        klon.querySelector(".billede").src = data.billede;

        infowindow.setContent(klon);
        infowindow.open(map, marker);
    });
}

var map;





function initMap() {
    console.log("initMap")
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 55.695822,
            lng: 12.544170
        },
        zoom: 15

    });

    console.log("load JSON");
    $.getJSON("googlemaps.json", hentData);

    // ****** OVERLAY HER *****
    //    var bounds = {
    //        north: 55.706752411438366,
    //        south: 55.70596958464087,
    //        east: 12.542185485141772,
    //        west: 12.536150514858264
    //
    //    }
    //
    //    var overlay = new google.maps.GroundOverlay('googlemapsoverlay-01-01.svg', bounds);
    //    overlay.setMap(map);
    // ****** OVERLAY HER *****





    //------ Geolocation ------

    //  if (navigator.geolocation) {
    //        navigator.geolocation.getCurrentPosition(function (position) {
    //
    //            var minPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
    //
    //            map.setCenter(minPos);
    //            var mig = new google.maps.Marker({
    //                position: minPos,
    //                map: map
    //            });
    //
    //        });
    //
    //    } else {
    //        alert("Geolocation NOT");
    //    }
    //------ Geolocation ------

    /*
        var image = 'kea.png'



        var image = 'ryge.png'
        var marker2 = new google.maps.Marker({

            position: {
                lat: 55.706233,
                lng: 12.539722
            },
            map: map,
            title: 'Rygerområdet',
            icon: image
        });

        var image = 'mad.png'
        var marker3 = new google.maps.Marker({
            position: {
                lat: 55.706437,
                lng: 12.539334
            },
            map: map,
            title: 'Kantinen',
            icon: image
        });
        var image = 'parking.png'
        var marker4 = new google.maps.Marker({
            position: {
                lat: 55.706216,
                lng: 12.540425
            },
            map: map,
            title: 'Parkeringspladsen',
            icon: image
        });




    */




    //    marker2.addListener('click', function () {
    //        map.setZoom(20);
    //        map.setCenter(marker2.getPosition());
    //        var klon = document.querySelector('#infotemplate').content.cloneNode("true");
    //        infowindow2.setContent(klon);
    //        infowindow2.open(map, marker2);
    //    });
    //
    //    marker3.addListener('click', function () {
    //        map.setZoom(20);
    //        map.setCenter(marker3.getPosition());
    //        var klon = document.querySelector('#infotemplate').content.cloneNode("true");
    //        infowindow3.setContent(klon);
    //        infowindow3.open(map, marker3);
    //    });
    //
    //    marker4.addListener('click', function () {
    //        map.setZoom(20);
    //        map.setCenter(marker4.getPosition());
    //        var klon = document.querySelector('#infotemplate').content.cloneNode("true");
    //        infowindow4.setContent(klon);
    //        infowindow4.open(map, marker4);
    //    });


    // infowindow
    //    var infowindow = new google.maps.InfoWindow({
    //        content: "Indgangen til KEA",
    //        position: {}
    //    });
    //
    //    var infowindow2 = new google.maps.InfoWindow({
    //        content: "Her må du ryge",
    //        position: {}
    //    });
    //
    //    var infowindow3 = new google.maps.InfoWindow({
    //        content: "Her kan du spise",
    //        position: {}
    //    });
    //
    //    var infowindow4 = new google.maps.InfoWindow({
    //        content: "Parkeringsområde",
    //        position: {}
    //    });

}
