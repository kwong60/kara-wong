import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Button from 'react-bootstrap/Button';

function Home() {
  const [selectedService, setSelectedService] = useState(''); // To store selected service
  const [selectedTransport, setSelectedTransport] = useState('driving'); // To store selected transportation method
  const [map, setMap] = useState(null); // Store the map instance
  const [markers, setMarkers] = useState([]); // To store markers
  const [hospitals, setHospitals] = useState([]); // To store the search results including travel time
  const [userLocation, setUserLocation] = useState(null); // Store user's current location

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (map) {
        map.resize();
      }
    });
  
    return () => window.removeEventListener('resize', () => {
      if (map) {
        map.resize();
      }
    });
  }, [map]);

  useEffect(() => {
    // Initialize Mapbox map
    mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pbHl3YW5nMTg4IiwiYSI6ImNtMHNpZHQzYjBrODgya29oYnFibzk4YnkifQ.VBw7i5CBXZ8zFZ6aTXiPqQ';
    const newMap = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.4, 41.8], // Centering on Providence, RI
      zoom: 9,
    });

    // Make sure the map resizes properly based on the container dimensions
    newMap.on('load', () => {
      newMap.resize(); // Trigger map resize on load
    });

    setMap(newMap);

    // Get user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      const userCoordinates = [-71.4, 41.8];
      setUserLocation(userCoordinates);  // Save the user location
    
      if (newMap) {
        // Center the map on the user's location if map exists
        newMap.flyTo({
          center: userCoordinates,
          zoom: 12 // Adjust the zoom for user location
        });
    
        // Optionally, add a marker for the user's location
        // new mapboxgl.Marker({ offset: [430, -650], color: 'blue' }).setLngLat([-71.4, 41.8]).addTo(newMap);
      }
    });

    return () => newMap.remove(); // Cleanup on unmount
  }, []);

  // Function to handle selecting a service from the dropdown
  const handleServiceSelect = (service) => {
    setSelectedService(service); // Set only the selected service
  };

  // Function to handle selecting the transportation method
  const handleTransportSelect = (transport) => {
    setSelectedTransport(transport); // Set the transportation method
  };

  const handleSearch = () => {
    if (!selectedService) {
      alert('Please select a service');
      return;
    }

    if (!userLocation) {
      alert('User location is not available');
      return;
    }

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/hospital.json?proximity=-71.3949184,41.8250752&limit=10&access_token=${mapboxgl.accessToken}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Hospitals with selected service:`, data.features);

        // Clear existing markers
        markers.forEach(marker => marker.remove());
        setMarkers([]);  // Reset marker state

        const newMarkers = [];
        new mapboxgl.Marker({ offset: [430, -650], color: 'blue' }).setLngLat([-71.4, 41.8]).addTo(map);

        const marker1 = new mapboxgl.Marker({ color: 'green', offset: [620, -860]}).setLngLat([-71.4, 41.8]).setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>")).addTo(map);
        newMarkers.push(marker1);
        const marker2 = new mapboxgl.Marker({ color: 'green', offset: [260, -790]}).setLngLat([-71.4, 41.8]).setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>")).addTo(map);
        newMarkers.push(marker2);
        const marker3 = new mapboxgl.Marker({ color: 'black', offset: [400, -690]}).setLngLat([-71.4, 41.8]).setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>")).addTo(map);
        newMarkers.push(marker3);
        
        setMarkers(newMarkers);  // Update the state with the new markers

        if (data.features.length > 0) {
          const bounds = new mapboxgl.LngLatBounds();
        
          // Extend bounds for each hospital's coordinates
          data.features.forEach((feature) => {
            bounds.extend(feature.geometry.coordinates);
          });
        
          // Fit the map to the bounds
          map.fitBounds(bounds, {
            padding: 50  // Add padding around the markers
          });
        }

        if (data.features.length === 0) {
          alert("No hospitals found with the selected service.");
          setHospitals([]); // Clear the hospitals list if no results
          return;
        }

        // Create an array to store hospitals with travel time
        const hospitalsWithTravelTime = [];

        // Fetch travel times for each hospital
        data.features.forEach((hospital) => {
          const travelUrl = `https://api.mapbox.com/directions/v5/mapbox/${selectedTransport}/${userLocation[0]},${userLocation[1]};${hospital.geometry.coordinates[0]},${hospital.geometry.coordinates[1]}?access_token=${mapboxgl.accessToken}`;

          fetch(travelUrl)
            .then((response) => response.json())
            .then((travelData) => {
              let duration = travelData.routes[0].duration / 60; // Travel time in minutes

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
      <div className="deductible-label">
        Deductible<sup>ⓘ
          <span className="tooltiptext">The amount you pay for covered healthcare services before your insurance plan starts to pay. With a $2,000 deductible, for example, you pay the first $2,000 of covered services yourself.</span>
        </sup>: $500.00 out of $2,000.00
      </div>

      <div className="progress-bar">
        <div className="progress-bar-body" style={{ width:'25%' }}>25%</div>
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
            <Button id="search-button-button" size="lg" variant="outline-primary" onClick={handleSearch}>
              Search for Hospitals
            </Button>
          </div>
          <div className="travel-dropdown">
            <label htmlFor="transport">Transportation Method:</label>
            <select
              name="transport"
              id="transport"
              onChange={(e) => handleTransportSelect(e.target.value)}
              style={{ padding: '0.5rem', marginLeft: '1rem' }}
            >
              <option value="driving">Driving</option>
              <option value="walking">Walking</option>
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
                  <td >{hospital.name}{(hospital.name === 'Butler Hospital' || hospital.name === 'Providence VA Medical Center') && (
                <span style={{ color: 'green', marginLeft: '8px', fontSize: '0.8em' }}>
                  <b><i>IN NETWORK!</i></b>
                </span>
              )}</td>
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
