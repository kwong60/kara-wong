import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
// import './Home.css'; // Optional: if you want custom styles for the map container

function Home() {
  useEffect(() => {
    // Initialize the Mapbox map after the component mounts
    mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pbHl3YW5nMTg4IiwiYSI6ImNtMHNpZHQzYjBrODgya29oYnFibzk4YnkifQ.VBw7i5CBXZ8zFZ6aTXiPqQ';
    
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-71.4, 41.8], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

    return () => map.remove(); // Cleanup on unmount
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      <div id="map" style={{ width: '50%', height: '50vh' }}></div>
    </div>
  );
}

export default Home;
