'use client';
import React, { useState } from 'react';

export default function StreamPredictor() {
  const [formData, setFormData] = useState({
    danceability: 0.75,
    energy: 0.80,
    valence: 0.60,
    tempo: 120,
    acousticness: 0.15,
    liveness: 0.12,
    speechiness: 0.05,
    playlist_count: 450,
    playlist_reach: 2500000,
    release_year: 2024
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: parseFloat(e.target.value) });
  };

  const handlePredict = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-title">Stream Volume Predictor</div>
      <div className="card-subtitle">
        Input track audio characteristics and distribution parameters for real-time model evaluation.
      </div>

      <form onSubmit={handlePredict}>
        <div className="form-grid">
          {Object.keys(formData).map((key) => (
            <div key={key} className="input-group">
              <label>{key.replace('_', ' ')}</label>
              <input
                type="number"
                name={key}
                step="any"
                value={formData[key]}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          ))}
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? 'Evaluating Model...' : 'Run Predictive Model'}
          </button>
        </div>
      </form>

      {result && (
        <div className="result-box">
          <div>
            <div style={{ fontSize: '0.75rem', color: '#1DB954', fontWeight: 600 }}>PREDICTION RESULT</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>
              {result.predicted_total_streams?.toLocaleString()} <span style={{ fontSize: '0.875rem', color: '#a1a1aa' }}>Streams</span>
            </div>
          </div>
          <span className="badge badge-green">{result.performance_tier}</span>
        </div>
      )}
    </div>
  );
}