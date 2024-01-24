import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Make a GET request to the Flask API endpoint when the component mounts
    axios.get('http://127.0.0.1:5000/leaderboard/current_week')
      .then(response => {
        // Update the state with the fetched leaderboard data
        setLeaderboard(response.data);
      })
      .catch(error => {
        console.error('Error fetching leaderboard data:', error);
      });
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      <h1>Leaderboard</h1>
      <div>
        {leaderboard.map(entry => (
          // Assuming the response is an array of leaderboard entries
          <div key={entry.uid}>
            {entry.name}: {entry.score}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
