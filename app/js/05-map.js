var style = [{ "featureType": "all", "elementType": "geometry", "stylers": [{ "color": "#25292e" }] }, { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "gamma": 0.01 }, { "lightness": 20 }, { "color": "#47546e" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "saturation": -31 }, { "lightness": -33 }, { "weight": 2 }, { "gamma": "0.00" }, { "visibility": "off" }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }] }, { "featureType": "administrative.country", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.locality", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "lightness": "45" }] }, { "featureType": "administrative.locality", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }] }, { "featureType": "administrative.neighborhood", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.land_parcel", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "lightness": 30 }, { "saturation": 30 }, { "color": "#30363d" }, { "visibility": "on" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "saturation": "0" }, { "lightness": "0" }, { "gamma": "0.30" }, { "weight": "0.01" }, { "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "lightness": "100" }, { "saturation": -20 }, { "visibility": "simplified" }, { "color": "#32383d" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 10 }, { "saturation": -30 }, { "color": "#2a3037" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "saturation": "-100" }, { "lightness": "-100" }, { "gamma": "0.00" }, { "color": "#2a3037" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "on" }] }, { "featureType": "road", "elementType": "labels.text", "stylers": [{ "visibility": "on" }, { "color": "#575e6b" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }, { "weight": "1" }, { "gamma": "1" }, { "saturation": "100" }, { "lightness": "1" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#474b51" }, { "visibility": "on" }, { "weight": "0.78" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }, { "weight": "1.06" }] }, { "featureType": "road.highway", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }, { "saturation": "75" }] }, { "featureType": "road.highway.controlled_access", "elementType": "labels.text", "stylers": [{ "visibility": "on" }] }, { "featureType": "road.highway.controlled_access", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }, { "hue": "#ff6600" }, { "lightness": "1" }, { "saturation": "100" }, { "gamma": "1" }, { "weight": "2.08" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }] }, { "featureType": "road.local", "elementType": "labels.icon", "stylers": [{ "hue": "#ff0000" }, { "visibility": "on" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.station.airport", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "lightness": -20 }, { "color": "#35485f" }] }, { "featureType": "transit.station.rail", "elementType": "labels.icon", "stylers": [{ "hue": "#1f2d79" }, { "visibility": "on" }] }, { "featureType": "poi.park", "elementType": "labels.icon", "stylers": [{ "color": "#7cb342" }] }];
$.getJSON('js/sahil.json', function (data) {
    // json için local değişkenler
    var latLng = { lat: 40.9021014, lng: 29.1825021 };
    var kartalMapOpt = {
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        zoom: 11,
        scrollwheel: false,
        center: new google.maps.LatLng(data.proje[0][0]["lat"], data.proje[0][0]["lng"]),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: style
    };
    var kartalMap = new google.maps.Map(document.getElementById('harita'), kartalMapOpt);
    var kartalMarker, i;
    var kartalMarkers = [];
    var kartalInfowindow;
    var wayDir;
    var bounds;

    var dts = data.lokasyonlar;

    $.each(dts, function (index, objj) {
        objj.push(data.proje[0][0]);
    });


    // haritayı döngüde oluşturan fonksiyon
    var boundss = new google.maps.LatLngBounds();
    function runMap(data, map) {
        bounds = new google.maps.LatLngBounds();
        for (i = 0; i < data.length; i++) {
            wayDir = 'https://www.google.com.tr/maps/dir//' + data[i]["lat"] + ',' + data[i]["lng"];

            kartalMarker = new google.maps.Marker({
                position: new google.maps.LatLng(data[i]["lat"], data[i]["lng"]),
                map: map,
                animation: google.maps.Animation.DROP,
                icon: new google.maps.MarkerImage(data[i]["icon"])

            });

            kartalMarkers.push(kartalMarker);
            kartalInfowindow = new SnazzyInfoWindow({
                marker: kartalMarker,
                content: '<div class="mi-content"><div class="loc-name">' + data[i]["name"].toLowerCase() + '</div><a target="_blank" href="' + wayDir + '" class="mi-tarif">Yol Tarifi</a>',
                wrapperClass: 'iw-container ' + data[i]["name"].replace(/\s/g, '') + '',
                placement: 'top',
                closeWhenOthersOpen: true,
                callbacks: {
                    afterOpen: function () {
                        $(this.getWrapper()).addClass('active');
                        var loc = $('.loc-name');
                        //loc.text(loc.text().substring(0, 34));
                        loc.each(function () {
                            if ($(this).text().length > 34) {
                                $(this).text($(this).text().substring(0, 34) + '...');
                            }
                        });
                    }
                }
            });
            google.maps.event.addListener(kartalMarker, 'click', (function (marker, i) {
                return function () {
                    var kartalInfowindow = null;
                    if (kartalInfowindow) {
                        kartalInfowindow.close();
                    }
                    kartalInfowindow.open();

                }

            })(kartalMarker, i));
            bounds.extend(new google.maps.LatLng(data[i]["lat"], data[i]["lng"]));
            boundss.extend(new google.maps.LatLng(data[i]["lat"], data[i]["lng"]));
        }
    };

    //ilk yüklenen hariç tüm markerları bulmak için fonksiyon
    function setMapOnAll(map) {
        for (var i = 0; i < kartalMarkers.length; i++) {
            kartalMarkers[i].setMap(map);
        }
    }

    // bulunan markerları temizlemek için fonksiyon
    function clearMarkers() {
        setMapOnAll(null);
    }
    function runLocationsMap() {
        var ul = $('.dplaces');
        ul.empty();
        var tumu = $('<li id="#tumu">').text('Tümü').appendTo(ul);
        $('<span class="circle">').appendTo(tumu);
        $.each(data.lokasyonlar, function (index, obj) {
            var item = obj[0];
            var li = $('<li id="' + item.category_name + '">').text(item.category_name).prependTo(ul);
            var span = $('<span class="circle">').appendTo(li);
            $(li).each(function () {
                $(this).click(function () {
                    ul.find('li').removeClass('active');
                    $(this).addClass('active');
                    clearMarkers();
                    runMap(obj, kartalMap);
                    kartalMap.setZoom(11);
                    // kartalMap.panTo(latLng);
                    kartalMap.fitBounds(bounds);
                });
            });

            if ($(window).width() < 425) {
                ul.find('li').removeClass('active');
                $(this).addClass('active');
                // clearMarkers();
                runMap(obj, kartalMap);
                kartalMap.setZoom(11);
                // kartalMap.panTo(latLng);
                kartalMap.fitBounds(boundss);
            } else {
                tumu.click(function () {
                    ul.find('li').removeClass('active');
                    $(this).addClass('active');
                    // clearMarkers();
                    runMap(obj, kartalMap);
                    kartalMap.setZoom(11);
                    // kartalMap.panTo(latLng);
                    kartalMap.fitBounds(boundss);
                });
            }

        });
    };
    // fonksiyonların hepsi çalıştırılıyor
    runMap(data.proje[0], kartalMap);
    runLocationsMap();
    $(document).click(function (evt) {
        kartalMap.set('scrollwheel', false);
    });
    $("#harita").click(function (evt) {
        evt.stopPropagation();
        kartalMap.set('scrollwheel', true);
    });
    $('#yolTarifi').click(function () {
        window.open(wayDir);
    });
});





