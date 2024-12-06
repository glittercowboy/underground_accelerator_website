import React from 'react';
import ReactDOM from 'react-dom/client';
import { EmbedCode } from './components/EmbedCode';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen bg-dark py-20">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Calculator Embed Code</span>
        </h1>
        <EmbedCode />
      </div>
    </div>
  </React.StrictMode>
);
