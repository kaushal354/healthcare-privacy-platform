
import React from 'react';

const RedactionViewer: React.FC = () => {
  return (
    <div className="container mt-4">
      <h2>Redaction Viewer</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Redacted Document</h5>
          <div className="border p-3">
            <p>Patient Name: <span className="bg-dark text-dark">John Doe</span></p>
            <p>Address: <span className="bg-dark text-dark">123 Main St, Anytown, USA</span></p>
            <p>Diagnosis: The patient has a <span className="bg-dark text-dark">common cold</span>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedactionViewer;
