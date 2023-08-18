import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [apiResponse, setApiResponse] = useState('');

  const fetchDataFromAPI = () => {
    // Flask API에 GET 요청을 보냅니다.
    axios.get('http://localhost:8000/font_recommend_test')
      .then(response => {
        setApiResponse(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from Flask API:', error);
      });
  };

  return (
    <div className="App">
      <h1>Flask API Response:</h1>
      <p>{apiResponse}</p>
      <button onClick={fetchDataFromAPI}>Fetch Data from API</button>
    </div>
  );
}

export default App;
