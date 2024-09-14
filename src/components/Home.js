import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


function Home() {
  const [selectedService, setSelectedService] = useState(''); // To store selected service
  const [map, setMap] = useState(null); // Store the map instance
  const [markers, setMarkers] = useState([]); // To store markers
  const [hospitals, setHospitals] = useState([]); // To store the search results including travel time
  const [userLocation, setUserLocation] = useState(null); // Store user's current location

  useEffect(() => {
    // Initialize Mapbox map
    mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pbHl3YW5nMTg4IiwiYSI6ImNtMHNpZHQzYjBrODgya29oYnFibzk4YnkifQ.VBw7i5CBXZ8zFZ6aTXiPqQ';
    const newMap = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.4, 41.8],
      zoom: 9,
    });
    setMap(newMap);

    // newMap.on('load', () => {
    //   newMap.resize();
    // });

    // Get user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation([position.coords.longitude, position.coords.latitude]);
    });

    return () => newMap.remove(); // Cleanup on unmount
  }, []);

  // Function to handle selecting a service from the dropdown
  const handleServiceSelect = (service) => {
    setSelectedService(service); // Set only the selected service
  };

  const handleSearch = () => {
    if (!selectedService) {
      alert('Please select a service');
      return;
    }

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/hospital.json?proximity=${userLocation[0]},${userLocation[1]}&limit=10&access_token=${mapboxgl.accessToken}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Hospitals with selected service:`, data.features);

        // Clear existing markers
        markers.forEach(marker => marker.remove());
        setMarkers([]); // Reset marker state

        if (data.features.length === 0) {
          alert("No hospitals found with the selected service.");
          setHospitals([]); // Clear the hospitals list if no results
          return;
        }

        // Create an array to store hospitals with travel time
        const hospitalsWithTravelTime = [];

        // Fetch travel times for each hospital
        data.features.forEach((hospital) => {
          const travelUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${userLocation[0]},${userLocation[1]};${hospital.geometry.coordinates[0]},${hospital.geometry.coordinates[1]}?access_token=${mapboxgl.accessToken}`;

          fetch(travelUrl)
            .then((response) => response.json())
            .then((travelData) => {
              const duration = travelData.routes[0].duration / 60; // Travel time in minutes

              // Store hospital details and travel time
              hospitalsWithTravelTime.push({
                name: hospital.text,
                placeName: hospital.place_name,
                travelTime: duration.toFixed(2), // Round to 2 decimal places
              });

              // If all travel times have been fetched, update state
              if (hospitalsWithTravelTime.length === data.features.length) {
                setHospitals(hospitalsWithTravelTime);
              }
            });
        });
      })
      .catch((error) => {
        console.error('Error fetching hospitals:', error);
      });
  };

  return (
    <div>
      <div className="map-container">
        <div id="map"></div>
      </div>
      <div className="deductible-label">Deductible: $100.00 out of $400.00</div>
      <div className="progress-bar">
        <div className="progress-bar-body" style= {{ width:'25%' }}>25%</div>
      </div><br></br>
      <div className="search-container">

        <div className="search-bar">
        <div className="service-dropdown">
            <label htmlFor="service">Service:</label>
            <select
              name="service"
              id="service"
              onChange={(e) => handleServiceSelect(e.target.value)}
              style={{ padding: '0.5rem', marginLeft: '1rem' }}
            >
              <option value="">--Select One--</option>
              <option value="emergency">Emergency</option>
              <option value="maternity">Maternity</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="cardiology">Cardiology</option>
            </select>
          </div>
          <div className="search-button">
            <button id="search-button-button" size="lg" variant="outline-primary" onClick={handleSearch}>
              Search for Hospitals
            </button>
          </div>
          <div className="travel-dropdown">
            <label htmlFor="service">Transportation Method:</label>
            <select
              name="service"
              id="service"
              onChange={(e) => handleServiceSelect(e.target.value)}
              style={{ padding: '0.5rem', marginLeft: '1rem' }}
            >
              <option value="">--Select One--</option>
              <option value="emergency">Driving</option>
              <option value="maternity">Walking</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="results">
        {hospitals.length > 0 ? (
          <table className="hospital-table">
            <thead>
              <tr>
                <th>Hospital Name</th>
                <th>Location</th>
                <th>Travel Time (minutes)</th>
              </tr>
            </thead>
            <tbody>
              {hospitals.map((hospital, index) => (
                <tr key={index}>
                  <td>{hospital.name}</td>
                  <td>{hospital.placeName}</td>
                  <td>{hospital.travelTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hospitals found. Try selecting a different service.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
