// pages/upcoming.tsx

import React from 'react';
import UpcomingTask from '@/components/UpcomingTask'; // Import the UpcomingTask component
import { BrowserRouter as Router } from 'react-router-dom';

const UpcomingPage: React.FC = () => {
  return (
    <Router>
      <UpcomingTask />
    </Router>
  );
};

export default UpcomingPage;
