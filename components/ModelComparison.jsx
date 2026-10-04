import React from 'react';

export default function ModelComparison() {
  return (
    <div className="card">
      <div className="card-title">Machine Learning Model Comparison</div>
      <div className="card-subtitle">Target Variable: Log-Transformed Total Streams</div>
      
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Model Architecture</th>
              <th>R² Score</th>
              <th>MAE</th>
              <th>RMSE</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Gradient Boosting Regressor</strong></td>
              <td style={{ color: '#1DB954', fontWeight: 'bold' }}>0.8912</td>
              <td>142,300</td>
              <td>285,100</td>
              <td><span className="badge badge-green">Production Model</span></td>
            </tr>
            <tr>
              <td><strong>Random Forest Regressor</strong></td>
              <td>0.8540</td>
              <td>168,900</td>
              <td>320,400</td>
              <td><span className="badge badge-gray">Benchmark</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}