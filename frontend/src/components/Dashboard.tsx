
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Real-time Processing</h5>
              <p className="card-text">Monitoring real-time data streams.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Compliance Status</h5>
              <p className="card-text">HIPAA, GDPR, and other compliance metrics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
