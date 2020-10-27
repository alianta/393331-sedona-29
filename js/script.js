function mainMap() {
  const coordinates = {
    lat: 34.86,
    lng: -111.77
  };
  const image = 'img/site_logo.png';
  const map = new google.maps.Map(document.getElementById('map'), {
    center: coordinates,
    zoom: 14
  });
  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image,
    animation: google.maps.Animation.BOUNCE
  });

}
