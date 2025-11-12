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
      alert("All fields are required!");
      return;
    }
    addBasicData(name, email, contact);
    navigate('/questions');
  };

  return (
    <div className="qform">
      <form onSubmit={submit}>
        <h3>Basic Details</h3>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /><br />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="tel" placeholder="Contact No." onChange={(e) => setContact(e.target.value)} /><br />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
