// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWJlbHZhbGVuY2lvIiwiYSI6ImNsMnpoZmV2NDBkOHczZG95a3RlbG83cTcifQ.goMwbrrNfsrsm3wF4N9mpg';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  var marker = new mapboxgl.Marker()
      .setLngLat([-71.092761, 42.357575])
      .addTo(map);
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    setTimeout(()=>{
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  

  // NEW CODE
  const cargarClima = async () => {

    try{
      const respuesta = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Cambridge, Massachusetts&APPID=4300e49d7fb946ba46d00211b27dea6b');

      console.log(respuesta);

      if (respuesta.status === 200){
        const datos = await respuesta.json();
        console.log(datos);

        const container = document.getElementById('container');
        const texto = JSON.stringify(datos.main);
        container.innerHTML = `<h3>This is the weather in Cambridge, Massachusetts now:</h3> <p>${texto}</p>`;
        
        
      } else if (respuesta.status === 401){
          console.log('Error in the API_KEY');
      }else if (respuesta.status === 404){
          console.log('The data you are looking for does not exist');
      }else{
          console.log("An error has occurred and we don't Know what happened");
      }

    } catch(error){
        console.log(error);
    }
  }
  cargarClima();