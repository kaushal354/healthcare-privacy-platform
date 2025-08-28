# Enterprise Healthcare Privacy Intelligence Platform

A production-grade, HIPAA-compliant privacy intelligence platform capable of real-time detection and redaction of sensitive information across multiple data modalities, with advanced machine learning capabilities, differential privacy guarantees, and enterprise-scale streaming architecture.

## Features

- **Multi-Modal Ingestion:** Support for 7 modalities — Clinical Notes (Text, RTF, PDF), Audio Streams, Medical Imaging (DICOM), Structured Records (HL7, FHIR, CDA, X12), Genomic Data (VCF), Insurance/Billing Records, and Clinical Trial Data.
- **Advanced Processing:** OCR for scanned docs/PDFs, speaker diarization for audio, parsing of nested healthcare formats.
- **PII/PHI Detection:** 4-tier entity recognition with recall targets (>99.5% for Tier 1, >90% for Tier 4).
- **Format-Preserving Redaction:** Tokenization/redaction that maintains original structure (e.g., (###) ###-#### → (XXX) XXX-XXXX).
- **Stable Pseudonymization:** Consistent pseudonyms for patients, providers, and family links across all modalities/timeframes.
- **System Interfaces:** REST, GraphQL, gRPC, WebSocket APIs, plus real-time dashboard and mobile apps.
- **EHR Integration:** Native integration with Epic, Cerner, Allscripts.
- **Failure Analysis:** Automated near_miss_analysis reports in JSON for performance diagnostics.

## Tech Stack

- **Frontend:** React, TypeScript, Bootstrap
- **Backend:** Node.js, Express.js, TypeScript
- **Database:** Postgres, Redis, Kafka
- **ML:** TensorFlow, PyTorch, KubeFlow, MLflow
- **DevOps:** Kubernetes, Docker, Jenkins, Grafana, Prometheus

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repo
   ```sh
   [https://github.com/kaushal354/healthcare-privacy-platform.git](https://github.com/kaushal354/healthcare-privacy-platform/tree/main)
   ```
2. Install NPM packages for the frontend
   ```sh
   cd frontend
   npm install
   ```
3. Install NPM packages for the backend
   ```sh
   cd backend
   npm install
   ```

### Running the application

1. Start the backend server
   ```sh
   cd backend
   npm run dev
   ```
2. Start the frontend development server
   ```sh
   cd frontend
   npm start
   ```

## Usage

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The platform provides the following functionalities:
- **Data Ingestion:** Ingest healthcare data in various formats.
- **Redaction Viewer:** View the redacted data and the original data side-by-side.
- **Compliance Report:** Generate compliance reports.

## Project Structure

```
.
├── backend
│   ├── src
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── ComplianceReport.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── DataIngestion.tsx
│   │   │   ├── Header.tsx
│   │   │   └── RedactionViewer.tsx
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m '''Add some AmazingFeature'''`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

