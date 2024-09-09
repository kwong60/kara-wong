import React from 'react';
import Form from 'react-bootstrap/Form';

function DistanceSearchBar({ setDistance }) {
  const handleSelect = (event) => {
    setDistance(event.target.value); // Pass the selected value back to the parent
  };

  return (
    <Form>
      <Form.Label>Maximum Distance from Me: </Form.Label>
      <Form.Select aria-label="Default select example" onChange={handleSelect}>
        <option>Choose a distance</option>
        <option value="1">1 mile</option>
        <option value="5">5 miles</option>
        <option value="10">10 miles</option>
        <option value="20">20 miles</option>
      </Form.Select>
    </Form>
  );
}

export default DistanceSearchBar;
