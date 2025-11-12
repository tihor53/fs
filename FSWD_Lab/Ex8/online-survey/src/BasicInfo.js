import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BasicInfo({ addBasicData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      alert("All fields are necessary!");
      return;
    }

    addBasicData(name, email, contact);
    navigate('/questions');
  };

  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <form onSubmit={submit}>
          <h4>Basic Details</h4>
          <input type="text" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="tel" placeholder="Enter your Contact No." value={contact} onChange={(e) => setContact(e.target.value)} />
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}
