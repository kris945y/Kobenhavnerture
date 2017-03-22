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
        map.setZoom(19);
        map.setCenter(marker.getPosition());
        klon.querySelector(".data_overskrift").textContent = data.overskrift;
        klon.querySelector(".data_beskrivelse").textContent = data.beskrivelse;
        klon.querySelector(".billede").src = data.billede;

        klon.querySelector(".data_question").textContent = data.question;

        klon.querySelector(".data_svar1").textContent = data.svar1;
        klon.querySelector(".data_svar2").textContent = data.svar2;
        klon.querySelector(".data_svar3").textContent = data.svar3;
        klon.querySelector(".data_svar4").textContent = data.svar4;

        if (data.korrekt == "svar1") {
            klon.querySelector(".data_svar1").value = 1;
        } else if (data.korrekt == "svar2") {
            klon.querySelector(".data_svar2").value = 1;
        } else if (data.korrekt == "svar3") {
            klon.querySelector(".data_svar3").value = 1;
        } else if (data.korrekt == "svar4") {
            klon.querySelector(".data_svar4").value = 1;
        }





        infowindow.setContent(klon);
        infowindow.open(map, marker);
        $('.q1b').answer();
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
        zoom: 15,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ebe3cd"
      }
    ]
  },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#523735"
      }
    ]
  },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f1e6"
      }
    ]
  },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9b2a6"
      }
    ]
  },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#dcd2be"
      }
    ]
  },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ae9e90"
      }
    ]
  },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
      }
    ]
  },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
      }
    ]
  },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#93817c"
      }
    ]
  },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#a5b076"
      }
    ]
  },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#447530"
      }
    ]
  },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f1e6"
      }
    ]
  },
            {
                "featureType": "road",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fdfcf8"
      }
    ]
  },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f8c967"
      }
    ]
  },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#e9bc62"
      }
    ]
  },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e98d58"
      }
    ]
  },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#db8555"
      }
    ]
  },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#806b63"
      }
    ]
  },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
      }
    ]
  },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8f7d77"
      }
    ]
  },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ebe3cd"
      }
    ]
  },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
      }
    ]
  },
            {
                "featureType": "transit.station.bus",
                "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#95cac3"
      }
    ]
  },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#92998d"
      }
    ]
  }
]

    });

    console.log("load JSON");
    $.getJSON("googlemaps.json", hentData);





    $(document).ready(function () {
        var panels = $('.user-infos');
        var panelsButton = $('.dropdown-user');
        panels.hide();

        //Click dropdown
        panelsButton.click(function () {
            //get data-for attribute
            var dataFor = $(this).attr('data-for');
            var idFor = $(dataFor);

            //current button
            var currentButton = $(this);
            idFor.slideToggle(400, function () {
                //Completed slidetoggle
                if (idFor.is(':visible')) {
                    currentButton.html('<i class="icon-chevron-up text-muted"></i>');
                } else {
                    currentButton.html('<i class="icon-chevron-down text-muted"></i>');
                }
            })
        });


        $('[data-toggle="tooltip"]').tooltip();

        $('button').click(function (e) {
            e.preventDefault();
            alert("This is a demo.\n :-)");
        });
    });


    // -------QUIZ Her-------


    // global variable to hold total score
    var total = 0;

    // begin plugin to handle each answer
    $.fn.answer = function () {

        // for this element, listen for a click event, then run the onClick function
        this.click(onClick)

        // define the onClick function
        function onClick() {

            // get value from the clicked button and store in the varialble val
            var val = $(this).val();

            // if val is equal to one...
            if (val == 1) {

                // ...add one to the total variable...
                total++

                // ...change the color of the button from blue to green, add some html to the end of the div and unbind the event to prevent buttons for this question from being clicked again
                $(this).removeClass('btn-primary').addClass('btn-success').parent().append('<h2>Korrekt!</h2>').find('button').unbind();;
            }

            // if val does not equal one, change button from blue to red, add some html and unbind the event
            else {
                $(this).removeClass('btn-primary').addClass('btn-danger').parent().append('<h3>Forkert!</h3>').find('button').unbind();

                $(this).removeClass('btn-primary').addClass('btn-success').parent();


            };

        };
    };
    // end of answer plugin

    // begin plugin to calculate the final score and display one of a range of images


    // call answer plugin on each question


    // call calcScore plugin on score button



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
