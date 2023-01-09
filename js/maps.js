function iniciarMap(){
    let coord = {lat:-34.5956145 ,lng: -58.4431949};
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    let marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}