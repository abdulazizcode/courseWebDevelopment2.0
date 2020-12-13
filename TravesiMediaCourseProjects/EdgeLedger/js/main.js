function initMap(){
    const loc = {lat:2.921318, lng: 101.655937};

    const map = new google.maps.Map(document.querySelector('.map'),
    {
        zoom:14,
        center:loc
    });

    const maeker = new google.maps.Marker({position:loc,map:map});
}