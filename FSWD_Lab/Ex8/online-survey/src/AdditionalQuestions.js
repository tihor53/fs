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
      alert("All fields are necessary!");
      return;
    }

    addQuestionData(profession, interest, reference);
    navigate('/details');
  };

  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <form onSubmit={submit}>
          <h4>Additional Questions</h4>
          <div>
            <label>What is your profession?</label>
            <input type="radio" value="Student" onChange={() => setProfession("Student")} /> Student
            <input type="radio" value="Software Engineer" onChange={() => setProfession("Software Engineer")} /> Software Engineer
            <input type="radio" value="Others" onChange={() => setProfession("Others")} /> Others
            <input type="text" placeholder="Specify your profession" onChange={(e) => setProfession(e.target.value)} />
          </div>
          <div>
            <label>Your Interest:</label>
            <input type="text" onChange={(e) => setInterest(e.target.value)} />
          </div>
          <div>
            <label>Reference:</label>
            <input type="text" onChange={(e) => setReference(e.target.value)} />
          </div>
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}
