import PatientDashboard from '@/components/Dashboard/PatientDashboard';
import CommonBanner from '@/UI/CommonBanner';
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <div>
        <CommonBanner title="Dashboard" routeName="Dashboard" />
      </div>
      <PatientDashboard/>
    </div>
  );
};

export default Dashboard;