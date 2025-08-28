import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import DataIngestion from './components/DataIngestion';
import RedactionViewer from './components/RedactionViewer';
import ComplianceReport from './components/ComplianceReport';

const App: React.FC = () => {
  const [route, setRoute] = React.useState('dashboard');

  const renderPage = () => {
    switch (route) {
      case 'data-ingestion':
        return <DataIngestion />;
      case 'redaction-viewer':
        return <RedactionViewer />;
      case 'compliance-reports':
        return <ComplianceReport />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <Header setRoute={setRoute} />
      <div className="container">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;