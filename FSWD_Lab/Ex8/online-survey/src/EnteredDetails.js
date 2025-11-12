import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EnteredDetails({ data, questionData }) {
  const navigate = useNavigate();

  const submit = () => {
    console.log(data, questionData);
    navigate('/thanks');
  };

  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <h4>Entered Details</h4>
        <p><b>Name:</b> {data.name}</p>
        <p><b>Email:</b> {data.email}</p>
        <p><b>Contact No.:</b> {data.contact}</p>
        <h4>Responses</h4>
        <p><b>Profession:</b> {questionData.profession}</p>
        <p><b>Interests:</b> {questionData.interest}</p>
        <p><b>Reference:</b> {questionData.reference}</p>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}
