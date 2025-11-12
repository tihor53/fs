import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdditionalQuestions({ addQuestionData }) {
  const [profession, setProfession] = useState("");
  const [interest, setInterest] = useState("");
  const [reference, setReference] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!profession || !interest || !reference) {
      alert("All fields are required!");
      return;
    }
    addQuestionData(profession, interest, reference);
    navigate('/details');
  };

  return (
    <div className="qform">
      <form onSubmit={submit}>
        <h3>Additional Questions</h3>
        <label>Profession:</label><br />
        <input type="radio" name="profession" onChange={() => setProfession("Student")} /> Student
        <input type="radio" name="profession" onChange={() => setProfession("Engineer")} /> Engineer
        <input type="radio" name="profession" onChange={() => setProfession("Other")} /> Other<br />
        <input type="text" placeholder="Specify profession" onChange={(e) => setProfession(e.target.value)} /><br />
        <label>Interest:</label>
        <input type="text" placeholder="Your Interest" onChange={(e) => setInterest(e.target.value)} /><br />
        <label>Reference:</label>
        <input type="text" placeholder="Reference" onChange={(e) => setReference(e.target.value)} /><br />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
