
    mapboxgl.accessToken = 'pk.eyJ1IjoidGVubjgxIiwiYSI6ImNsZDZodjQwdzB0Z3Uzb3J4ZW8zc2dqOTgifQ.1u4AMi9PqZOFddaJcFiLbw';
  
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [-73.941381, 40.67988],
        zoom: 14
    });
   
  var marker = new mapboxgl.Marker()
      .setLngLat([-73.941381, 40.67988])
      .addTo(map);
  
  // Request bus data from MBTA
  async function getBusLocations(){
      var url = 'https://bustime.mta.info/api/where/stops-for-route/MTA%20NYCT_B25.json?key=63e97138-e2da-42da-b4bd-d38c089dae07&includePolylines=false&version=2';	
      var response = await fetch(url);
      var json     = await response.json();
      return json.data;
  }
  
  const busStops = [ 
      [-73.941381, 40.67988],
      [-73.944167, 40.680033],
      [-73.945667, 40.680116],
      [-73.949161, 40.680301],
      [-73.952805, 40.6805],
      [-73.955289, 40.680982],
      [-73.958134, 40.681579],
      [-73.961824, 40.682362],
      [-73.964338, 40.682882],
      [-73.966593, 40.683332],
      [-73.968617, 40.683904]
  ];
  
  let counter = 0;
  function move(){
    setTimeout(()=>{
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    },1000); 
  }
  
