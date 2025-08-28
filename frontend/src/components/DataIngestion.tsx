
import React, { useState } from 'react';

const DataIngestion: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [redactedText, setRedactedText] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setRedactedText(data.redactedText);
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Data Ingestion</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Upload Documents</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">Select a file to upload</label>
              <input className="form-control" type="file" id="formFile" onChange={handleFileChange} />
            </div>
            <button type="submit" className="btn btn-primary">Upload</button>
          </form>
        </div>
      </div>

      {redactedText && (
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">Redacted Text</h5>
            <div className="border p-3">
              <pre>{redactedText}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataIngestion;
