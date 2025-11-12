// Importing React and required modules
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BasicInfo from './BasicInfo';
import AdditionalQuestions from './AdditionalQuestions';
import EnteredDetails from './EnteredDetails';
import ThankYouPage from './ThankYouPage';
import { About } from './About';
import './App.css';

function App() {
  // State for storing data
  const [basicData, setBasicData] = useState(JSON.parse(localStorage.getItem('data')) || {});
  const [questionData, setQuestionData] = useState(JSON.parse(localStorage.getItem('questiondata')) || {});

  // Saving data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basicData));
  }, [basicData]);

  useEffect(() => {
    localStorage.setItem('questiondata', JSON.stringify(questionData));
  }, [questionData]);

  // Functions to update data
  const addBasicData = (name, email, contact) => {
    setBasicData({ name, email, contact });
  };

  const addQuestionData = (profession, interest, reference) => {
    setQuestionData({ profession, interest, reference });
  };

  // Routes for navigation
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BasicInfo addBasicData={addBasicData} />} />
        <Route path='/questions' element={<AdditionalQuestions addQuestionData={addQuestionData} />} />
        <Route path='/details' element={<EnteredDetails data={basicData} questionData={questionData} />} />
        <Route path='/thanks' element={<ThankYouPage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
