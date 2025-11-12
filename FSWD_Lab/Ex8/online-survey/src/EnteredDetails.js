import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EnteredDetails({ data, questionData }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(data, questionData);
    navigate('/thanks');
  };

  return (
    <div className="qform">
      <h3>Entered Details</h3>
      <p><b>Name:</b> {data.name}</p>
      <p><b>Email:</b> {data.email}</p>
      <p><b>Contact:</b> {data.contact}</p>
      <h4>Responses</h4>
      <p><b>Profession:</b> {questionData.profession}</p>
      <p><b>Interest:</b> {questionData.interest}</p>
      <p><b>Reference:</b> {questionData.reference}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
