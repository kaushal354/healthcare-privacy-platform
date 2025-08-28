
import React from 'react';

const ComplianceReport: React.FC = () => {
  return (
    <div className="container mt-4">
      <h2>Compliance Reports</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">HIPAA Compliance Report</h5>
          <p>Report generated on: {new Date().toLocaleDateString()}</p>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Rule</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Privacy Rule</td>
                <td><span className="badge bg-success">Compliant</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Security Rule</td>
                <td><span className="badge bg-success">Compliant</span></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Breach Notification Rule</td>
                <td><span className="badge bg-success">Compliant</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplianceReport;
