import React from 'react';

interface HeaderProps {
  setRoute: (route: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setRoute }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => setRoute('dashboard')}>myOnsite HealthCare</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setRoute('dashboard')}>Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setRoute('data-ingestion')}>Data Ingestion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setRoute('redaction-viewer')}>Redaction Viewer</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setRoute('compliance-reports')}>Compliance Reports</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;