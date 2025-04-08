import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('https://congenial-xylophone-rpgxxxwr9jwh5rp7-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaders(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="my-4 text-center">Leaderboard</h1>
      <table className="table table-striped table-bordered">
        <thead className="table-warning">
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map(leader => (
            <tr key={leader._id}>
              <td>{leader.user.username}</td>
              <td>{leader.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
