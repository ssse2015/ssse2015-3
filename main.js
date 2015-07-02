$( document ).on( "pageinit", "#map-page", function() {
    var defaultLatLng = new google.maps.LatLng(40.7243973,-73.9976353);  // Default to New York when no geolocation support
    if ( navigator.geolocation ) {
        function success(pos) {
            // Location found, show map with these coordinates
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function fail(error) {
            drawMap(defaultLatLng);  // Failed to find location, show default map
        }
        // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);  // No geolocation support, show default map
    }
    function drawMap(latlng) {
        var myOptions = {
            zoom: 12,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Greetings!"
        });
		var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(40.7252357,-74.0038984),
            map: map,
            title: "Aquagrill"
        });
		var marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(40.6753539,-74.0165422),
            map: map,
            title: "Brooklyn Crab"
        });
		var marker3 = new google.maps.Marker({
            position:new google.maps.LatLng (40.742631,-74.0060685),
            map: map,
            title: "The Lobster Place"
        });
		var marker4 = new google.maps.Marker({
            position:new google.maps.LatLng(40.7524862,-73.9774231),
            map: map,
            title: "Grand Central Oyster Bar"
        });
		var marker5 = new google.maps.Marker({
            position: new google.maps.LatLng(40.759569,-73.981901),
            map: map,
            title: "Oceana"
        });
		var marker6 = new google.maps.Marker({
            position: new google.maps.LatLng(40.714269,-73.961715),
            map: map,
            title: "Maison Premiere"
        });
    }
});
