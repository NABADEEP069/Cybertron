import React, { useEffect, useState } from 'react';
import API from '../api/api';

const NGORequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await API.get('/ngo/requests');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests', error);
      }
    };
    fetchRequests();
  }, []);

  return (
    <div>
      <h2>NGO Requests</h2>
      <ul>
        {requests.map((req, index) => (
          <li key={index}>{req.name} - {req.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default NGORequests;
