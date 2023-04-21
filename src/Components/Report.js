import "../Styles/main.css";
import "../report.css";
import React, { useState } from 'react';

function ReportProblem() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');
  const [urgency, setUrgency] = useState('not urgent');
  const [problem, setProblem] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleUrgencyChange = (event) => {
    setUrgency(event.target.value);
  };

  const handleProblemChange = (event) => {
    setProblem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Name:', name);
    console.log('Mobile:', mobile);
    console.log('Location:', location);
    console.log('Urgency:', urgency);
    console.log('Problem:', problem);
  };

  return (
    <div className="report-container">
      <h1 className="report-title">Report</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          Mobile:
          <input
            type="tel"
            value={mobile}
            onChange={handleMobileChange}
            placeholder="Enter your mobile number"
            pattern="[0-9]{10}"
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter your location"
            required
          />
        </label>
        <label>
          Urgency:
          <select value={urgency} onChange={handleUrgencyChange}>
            <option value="not urgent">Not Urgent</option>
            <option value="medium">Medium</option>
            <option value="emergency">Emergency</option>
          </select>
        </label>
        <label>
          Problem:
          <textarea
            value={problem}
            onChange={handleProblemChange}
            placeholder="Describe your problem"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReportProblem;
