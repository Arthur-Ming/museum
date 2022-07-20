mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0aHVyLW1pbmciLCJhIjoiY2t1amxyeThlMGw0eTJ3bzZ4bzd5cXk5NSJ9.RgNpohPUytRnYuf0rmRRDg';
const map = new mapboxgl.Map({
   container: 'map', // container ID
   style: 'mapbox://styles/mapbox/light-v10', // style URL
   center: [2.3364, 48.86091], // starting position [lng, lat]
   zoom: 15.75 // starting zoom
});

const marker1 = new mapboxgl.Marker({ color: '#171717' })
   .setLngLat([2.3364, 48.86091])
   .addTo(map);

// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({ color: '#757575' })
   .setLngLat([2.3333, 48.8602])
   .addTo(map);

const marker3 = new mapboxgl.Marker({ color: '#757575' })
   .setLngLat([2.3397, 48.8607])
   .addTo(map);


const marker4 = new mapboxgl.Marker({ color: '#757575' })
   .setLngLat([2.3330, 48.8619])
   .addTo(map);


const marker5 = new mapboxgl.Marker({ color: '#757575' })
   .setLngLat([2.3365, 48.8625])
   .addTo(map);

map.on('load', () => {
   // Add a new vector tile source with ID 'mapillary'.
   map.addSource('mapillary', {
      'type': 'vector',
      'tiles': [
         'https://tiles.mapillary.com/maps/vtp/mly1_public/2/{z}/{x}/{y}'
      ],
      'minzoom': 6,
      'maxzoom': 14
   });
   map.addLayer(
      {
         'id': 'mapillary', // Layer ID
         'type': 'line',
         'source': 'mapillary', // ID of the tile source created above
         // Source has several layers. We visualize the one with name 'sequence'.
         'source-layer': 'sequence',
         'layout': {
            'line-cap': 'round',
            'line-join': 'round'
         },
         'paint': {
            'line-opacity': 0.6,
            'line-color': 'rgb(53, 175, 109)',
            'line-width': 2
         }
      },
      'road-label' // Arrange our new layer beneath this layer
   );
});

map.addControl(new mapboxgl.NavigationControl());