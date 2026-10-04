import React from 'react';

export default function MetricsOverview() {
  const metrics = [
    { label: "Analyzed Tracks", value: "12,450", change: "+14% vs prior period" },
    { label: "Avg. Streams / Track", value: "4.82M", change: "+8.2% vs prior period" },
    { label: "Avg. Playlist Reach", value: "1.25M", change: "+22.5% vs prior period" },
    { label: "Model Accuracy (R²)", value: "0.891", change: "+3.1% vs prior period" },
  ];

  return (
    <div className="metrics-grid">
      {metrics.map((item, idx) => (
        <div key={idx} className="metric-card">
          <div className="metric-label">{item.label}</div>
          <div className="metric-value">{item.value}</div>
          <div className="metric-change">{item.change}</div>
        </div>
      ))}
    </div>
  );
}