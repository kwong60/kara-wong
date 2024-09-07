import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import DistanceSearchBar from './DistanceSearchBar';
import Button from 'react-bootstrap/Button';

function Home() {
  const [distance, setDistance] = useState(null); // To store the selected distance
  const [map, setMap] = useState(null); // Store the map instance

  useEffect(() => {
    // Initialize the Mapbox map after the component mounts
    mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pbHl3YW5nMTg4IiwiYSI6ImNtMHNpZHQzYjBrODgya29oYnFibzk4YnkifQ.VBw7i5CBXZ8zFZ6aTXiPqQ';

    const newMap = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-71.4, 41.8], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    setMap(newMap); // Save map instance in state

    return () => newMap.remove(); // Cleanup on unmount
  }, []);

  const handleSearch = () => {
    if (!distance) {
      alert('Please select a distance');
      return;
    }

    // CHANGE THIS to actually use proximity bias
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/hospital.json?proximity=-71.4,41.8&limit=10&access_token=${mapboxgl.accessToken}`;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Hospitals within ${distance} miles:`, data);

        // add markers to the map based on the results
        data.features.forEach((hospital) => {
          new mapboxgl.Marker()
            .setLngLat(hospital.geometry.coordinates)
            .addTo(map); // this doesn't account for zoom... fix meeeeee
        });
      })
      .catch((error) => {
        console.error('Error fetching hospitals:', error);
      });
  };

  return (
    <div>
      <div className="map-container">
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
      </div>
      <div className="distance-search-bar">
        <DistanceSearchBar setDistance={setDistance} />{' '}
        <Button onClick={handleSearch}>Search for In-Network Hospitals</Button>
      </div>
    </div>
  );
}

export default Home;
